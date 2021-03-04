import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Acto } from '../../models/acto.model';
import { EnvioDePag } from '../../interfaces/envios.interface';
import { EnviosService } from '../../services/envios.service';
import { NewslettersService } from '../../services/newsletters.service';
import { Envio } from '../../models/envio.model';

@Component({
	selector: 'app-texteditor-enviospag',
	templateUrl: './texteditor-enviospag.component.html',
	styleUrls: ['./texteditor-enviospag.component.css']
})

export class TexteditorEnviospagComponent implements OnInit {

	htmlContent:string;
	htmlContentTransf:string;

	texto_raw:string = '';
	texto_medio:string = '';

	texto_ar:string[] = [];

	envio:Envio = null;
	enviosPag:Envio[] = [];

	pruebas:Envio[] = [];
	sin_pruebas:Envio[] = [];

	planificats:Envio[] = [];
	sin_planificats:Envio[] = [];

	envio_prueba:Envio;

	envioModel:Envio;
	envios_modelos:Envio[]=[];

	constructor(
		private enviosService:EnviosService,
		private newslettersService:NewslettersService

	) { }

	ngOnInit(): void {
	}

	async transformar(){

		// console.log(this.texto_raw);
		const recortar_arr = this.texto_raw.split('Mostrar eliminats');
		// console.log(recortar_arr[1]);
		const recortar2_arr = recortar_arr[1].split('Des de ');
		const recortar3_arr = recortar2_arr[0].split('Enviaments fets');
		// console.log(recortar3_arr);
		this.texto_medio = recortar3_arr[1].slice(0, -16);
		this.texto_medio = this.texto_medio.slice(1);
		// console.log(this.texto_medio);

		const lineas_arr = this.texto_medio.split('\n');
		lineas_arr.pop();

		for (let index = 0; index < lineas_arr.length; index++) {
			var element = lineas_arr[index].trim();
			// console.log(element);
			var linea_ar = element.split('	');
			// console.log(linea_ar);

			for (let index2 = 0; index2 < linea_ar.length; index2++) {
				linea_ar[index2] = linea_ar[index2].trim();
			}
			// console.log(linea_ar);

			var data_inici = null;
			var ini_anyo = 0;

			if (linea_ar[3]) {
				var ini_fecha_ar1 = linea_ar[3].split(' ');
				var ini_fecha = ini_fecha_ar1[0];
				var ini_hora = ini_fecha_ar1[1];
				var ini_anyo_ar = ini_fecha.split('/');
				ini_anyo = parseInt(ini_anyo_ar[2]);
				data_inici = this.convertirAUnix(ini_fecha,ini_hora);
			}

			var data_enviament = null;

			if (linea_ar[4]) {
				var env_fecha_ar1 = linea_ar[4].split(' ');
				var env_fecha = env_fecha_ar1[0];
				var env_hora = env_fecha_ar1[1];
				data_enviament = this.convertirAUnix(env_fecha,env_hora);
			}
 
			var tipo_ar = linea_ar[0].split('_');
			var tipo_Catalonia_ar = linea_ar[0].split(' ');

			var tipo = '';
			var numero = 0;

			var numero_ar = tipo_ar[0].split('-');
			var numero_AccInf_ar = tipo_ar[0].split('_');

			if (linea_ar[0].startsWith('REC')) {
				tipo = 'REC';
				numero = parseInt(numero_ar[2]);
			}else if (linea_ar[0].startsWith('ACT')) {
				tipo = 'ACT';
				numero = parseInt(numero_ar[2]);
			}else if (linea_ar[0].startsWith('AL')) {
				tipo = 'ALTRES';
				numero = parseInt(numero_ar[2]);
			}else if (linea_ar[0].startsWith('agenda')) {
				tipo = 'AGENDA';
				numero = parseInt(numero_ar[1]);
			}else if (linea_ar[0].startsWith('ACCIO')) {
				tipo = 'Acció Informa';
				numero = parseInt(numero_AccInf_ar[2]);
			}else if (linea_ar[0].startsWith('Catalonia')) {
				tipo = 'Catalonia';
				numero = parseInt(tipo_Catalonia_ar[2]);
			}else if (linea_ar[0].startsWith('POST')) {
				tipo = 'POST';
				numero = parseInt(numero_ar[2]);
			}else if (linea_ar[0].startsWith('RA') || linea_ar[0].startsWith('ra')) {
				tipo = 'RADAR';
				numero = parseInt(numero_ar[1]);
			}

			this.envio = new Envio(linea_ar[0], linea_ar[1],linea_ar[2], data_inici, data_enviament, parseInt(linea_ar[5]),tipo,numero,ini_anyo,parseInt((ini_anyo.toString()).slice(2)));

			this.enviosPag.push(this.envio);

			this.envio = null;
			
		}

		console.log(this.enviosPag);

		// this.envio_prueba = this.enviosPag[13];

		this.sin_pruebas = this.borrarPruebas(this.enviosPag);
		this.planificats = this.tratarPlanificats(this.sin_pruebas);
 
		// console.log('pruebas',this.pruebas);
		// console.log('sin_pruebas',this.sin_pruebas);
		// console.log(`planificats`,this.planificats);
		console.log(`sin_planificats`,this.sin_planificats);

		// this.verificarYagruparEnvios(this.sin_planificats);

		await this.relacionarMail();

		await this.guardarActualizar();

	}

	async relacionarMail(){

		for (let index = 0; index < this.sin_planificats.length; index++) {

			var tipo = this.sin_planificats[index].tipo;

			if (tipo === 'REC') {
				(await this.newslettersService.getRecporEnvio(this.sin_planificats[index])).subscribe( resp2 => {
					console.log(resp2);
					this.sin_planificats[index].id_email = resp2['rec']['_id'];
					this.envioModel = new Envio(this.sin_planificats[index].nom_enviament, this.sin_planificats[index].campanya,this.sin_planificats[index].estat, this.sin_planificats[index].data_inici, this.sin_planificats[index].data_enviament, this.sin_planificats[index].enviaments_fets, this.sin_planificats[index].tipo,this.sin_planificats[index].numero,this.sin_planificats[index].anyo,this.sin_planificats[index].anyo_codi,this.sin_planificats[index].id_email, this.sin_planificats[index].data_primeres_dades, this.sin_planificats[index].primera_gravacio, this.sin_planificats[index].segona_gravacio, this.sin_planificats[index].data_10dies, this.sin_planificats[index].primeres_dades, this.sin_planificats[index].segones_dades);
					this.envios_modelos.push(this.envioModel);
				})
			}else if (tipo === 'ACT') {
				(await this.newslettersService.getActporEnvio(this.sin_planificats[index])).subscribe( resp4 => {
					console.log(resp4);
					this.sin_planificats[index].id_email = resp4['act']['_id'];
					this.envioModel = new Envio(this.sin_planificats[index].nom_enviament, this.sin_planificats[index].campanya,this.sin_planificats[index].estat, this.sin_planificats[index].data_inici, this.sin_planificats[index].data_enviament, this.sin_planificats[index].enviaments_fets, this.sin_planificats[index].tipo,this.sin_planificats[index].numero,this.sin_planificats[index].anyo,this.sin_planificats[index].anyo_codi,this.sin_planificats[index].id_email, this.sin_planificats[index].data_primeres_dades, this.sin_planificats[index].primera_gravacio, this.sin_planificats[index].segona_gravacio, this.sin_planificats[index].data_10dies, this.sin_planificats[index].primeres_dades, this.sin_planificats[index].segones_dades);
					this.envios_modelos.push(this.envioModel);

				})
			}else if (tipo !=='ACT' && tipo !=='REC'){

				this.envioModel = new Envio(this.sin_planificats[index].nom_enviament, this.sin_planificats[index].campanya,this.sin_planificats[index].estat, this.sin_planificats[index].data_inici, this.sin_planificats[index].data_enviament, this.sin_planificats[index].enviaments_fets, this.sin_planificats[index].tipo,this.sin_planificats[index].numero,this.sin_planificats[index].anyo,this.sin_planificats[index].anyo_codi,this.sin_planificats[index].id_email, this.sin_planificats[index].data_primeres_dades, this.sin_planificats[index].primera_gravacio, this.sin_planificats[index].segona_gravacio, this.sin_planificats[index].data_10dies, this.sin_planificats[index].primeres_dades, this.sin_planificats[index].segones_dades);
				this.envios_modelos.push(this.envioModel);
			}
		}
		console.log('envios_modelos',this.envios_modelos);
	}
			
			
	async guardarActualizar(){

		for (let index = 0; index < this.envios_modelos.length; index++) {

			const existe = await this.enviosService.existeEnvio(this.envios_modelos[index]);

			if (existe['ok']) {
				
			}else{
				
				await this.guardarEnvio(this.envios_modelos[index]);
			}

		}
	}

	convertirAUnix(fecha:string,horas:string){

		var fecha_ar = fecha.split('/');
		var dia = parseInt(fecha_ar[0]);
		var mes = parseInt(fecha_ar[1]) - 1;
		var anyo = parseInt(fecha_ar[2]);
		var hora_ar = horas.split(':');
		var hora = parseInt(hora_ar[0]) - 1;
		var min = parseInt(hora_ar[1]);
		var seg = parseInt(hora_ar[2]);

		var datum = new Date(Date.UTC(anyo,mes,dia,hora,min,seg));
		return datum.getTime();

	}

	borrarPruebas(enviosPag:Envio[]){

		for (let index = 0; index < enviosPag.length; index++) {
			if (enviosPag[index].enviaments_fets === 2 || enviosPag[index].enviaments_fets === 3) {
				this.pruebas.push(enviosPag[index]);
				// this.enviosPag.splice(index,1);
			}else{
				this.sin_pruebas.push(enviosPag[index]);
			}
		}
		
		// console.log('enviosPag',enviosPag);
		// console.log('pruebas',pruebas);

		return this.sin_pruebas;

	}

	tratarPlanificats(enviosPag:Envio[]){

		for (let index = 0; index < enviosPag.length; index++) {
			if (enviosPag[index].estat.includes('Planificat') || enviosPag[index].estat.includes('Enviant')) {
				this.planificats.push(enviosPag[index]);
			}else{
				this.sin_planificats.push(enviosPag[index]);
			}
		}

		var data_estimada = 0;

		for (let index = 0; index < this.planificats.length; index++) {

			if (this.planificats[index].estat.includes('Enviant')) {

				var data_record = Date.now();

				var enviant_array = this.planificats[index].estat.split(' ');
				var enviaments_fets = parseInt(enviant_array[1]);
				var enviaments_total = parseInt(enviant_array[3]);
				var enviaments_faltan = enviaments_total - enviaments_fets;
				console.log(enviaments_faltan);
				data_estimada = this.planificats[index].data_inici + (enviaments_total*360);

				this.planificats[index] = {
					nom_enviament: this.planificats[index].nom_enviament,
					campanya: this.planificats[index].campanya,
					estat: this.planificats[index].estat,
					enviaments_fets,
					tipo: this.planificats[index].tipo,
					numero: this.planificats[index].numero,
					anyo: this.planificats[index].anyo,
					data_inici: this.planificats[index].data_inici,
					data_enviament: null,
					data_10dies:0,
					data_estimada
				}

				
			}else{

				if (this.planificats[index].nom_enviament.includes('agenda') || this.planificats[index].tipo === 'AGENDA') {
					if (this.planificats[index].nom_enviament.includes('accio')) {
						data_estimada = this.planificats[index].data_inici + (1*1000);
					} else {
						data_estimada = this.planificats[index].data_inici + (45000*350);
					}
				}
	
				if (this.planificats[index].nom_enviament.includes('ACCIOinforma') || this.planificats[index].tipo === 'ACC1Ó Informa') {
					data_estimada = this.planificats[index].data_inici + (44000*400);
				}
	
				if (this.planificats[index].nom_enviament.includes('Catalonia') || this.planificats[index].tipo === 'Catalonia') {
					data_estimada = this.planificats[index].data_inici + (9000*400);
				}
				
				if (this.planificats[index].nom_enviament.includes('ra-0') || this.planificats[index].nom_enviament.includes('RA-0') || this.planificats[index].tipo === 'RADAR') {
					data_estimada = this.planificats[index].data_inici + (9000*400);
				}

				if (this.planificats[index].nom_enviament.includes('REC') || this.planificats[index].nom_enviament.includes('POST')) {
					data_estimada = this.planificats[index].data_inici + (130*400);
				}
				if (this.planificats[index].nom_enviament.includes('ACT')) {
					data_estimada = this.planificats[index].data_inici + (5000*400);
				}
				
	
				this.planificats[index] = {
					nom_enviament: this.planificats[index].nom_enviament,
					campanya: this.planificats[index].campanya,
					estat: this.planificats[index].estat,
					enviaments_fets: this.planificats[index].enviaments_fets,
					tipo: this.planificats[index].tipo,
					numero: this.planificats[index].numero,
					anyo: this.planificats[index].anyo,
					data_inici: this.planificats[index].data_inici,
					data_enviament: null,
					data_10dies: Date.now(),
					data_estimada: data_estimada
				}

			}

			
		}

		return this.planificats;
	}

	verificarYagruparEnvios(enviosPag:EnvioDePag[]){

		for (let index = 0; index < enviosPag.length; index++) {
			
		}

	}

	abrir_envio(envio:EnvioDePag){

	}

	// async guardarEnvio(envio:EnvioDePag){
	// 	this.enviosService.guardarEnvio(envio).subscribe( resp => {
	// 		console.log(resp);
	// 		if (resp['msg'] === 'El Envío ya está registrado') {
	// 			this.enviosService.compararEnvio(resp['existeEnvio'],envio);
	// 		}
	// 	});
	// }

	async guardarEnvio(envio:Envio){
		console.log(envio);
		await this.enviosService.guardarEnvio(envio).subscribe( resp => {
			console.log(resp);
		});
	}

	async actualizarEnvio(id:string,envio:Envio){
		this.enviosService.actualizarEnvio(id,envio).subscribe( resp => {
			console.log(resp);
		});
	}





	



}
