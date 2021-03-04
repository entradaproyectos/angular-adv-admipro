import { Component, OnInit } from '@angular/core';
import { EnvioDePag } from 'src/app/interfaces/envios.interface';
import { EnviosService } from '../../services/envios.service';
import Swal from 'sweetalert2';
import { Envio } from '../../models/envio.model';


@Component({
  	selector: 'app-texteditor-envios-detalle',
  	templateUrl: './texteditor-envios-detalle.component.html',
  	styleUrls: ['./texteditor-envios-detalle.component.css']
})
export class TexteditorEnviosDetalleComponent implements OnInit {


  	texto_raw:string = '';
	dades = {
		enviaments_total : null,
		enviaments_fets : null,
		enviaments_no_fets : null,
		enviaments_click_unic : null,
		enviaments_click_contactes : null,
		enviaments_oberts : null,
		enviaments_retornats : null
	};
	nom_enviament:string='';
	envio:Envio = null;
	

  	constructor(
		  private enviosService:EnviosService
	  ) { }

  	ngOnInit(): void {
  	}
  

  	async transformar(){

		const sobras0 = this.texto_raw.split('Estadístiques del ');
		const sobras1 = sobras0[1].split('% Missatges oberts: ');
		const info_raw = sobras1[0];
		// console.log(info_raw);
		const array_lineas = info_raw.split('\n');
		// console.log(array_lineas);

	   const datos_array = [];

		for (let index = 0; index < array_lineas.length; index++) {
			if  (array_lineas[index] === '' || array_lineas[index] === ' '){
			}else{
				datos_array.push(array_lineas[index]);
			}
		}

		// console.log(datos_array);

		const primera_linea = datos_array[0];

		const nom_enviament_ar = primera_linea.split(' ');
		const nom_enviament = nom_enviament_ar[0];
		const fecha_envio = nom_enviament_ar[5];
		const hora_envio = nom_enviament_ar[6];

		console.log(nom_enviament_ar);

		const fecha_envio_unix = this.convertirAUnix(fecha_envio,hora_envio);
		await this.buscarEnvPorDataEnv(fecha_envio_unix);

		const fin_ar = [];
		
		for (let index = 1; index < datos_array.length; index++) {
			const element_ar = datos_array[index].split(': ');
			const element = element_ar[1];
			fin_ar.push(element);
		}

		const no_fets_ar = fin_ar[2].split('   [ Mostrar / Ocultar ]');
		fin_ar[2] = no_fets_ar[0];
		console.log(fin_ar);

		this.dades = {
			enviaments_total : parseInt(fin_ar[0]),
			enviaments_fets : parseInt(fin_ar[1]),
			enviaments_no_fets : parseInt(fin_ar[2]),
			enviaments_click_unic : parseInt(fin_ar[3]),
			enviaments_click_contactes : parseInt(fin_ar[4]),
			enviaments_oberts : parseInt(fin_ar[5]),
			enviaments_retornats : parseInt(fin_ar[6])
		};

		console.log(this.dades);

  }

	async buscarEnvPorDataEnv(data_enviament:number){
		// console.log(data_enviament);
		this.enviosService.getEnvioPorDataEnv(data_enviament).subscribe(async resp => {
			console.log(resp);
			if (resp['msg'] === 'Envio encontrado') {
				this.envio = await resp['envio'];
				console.log(this.envio);
				this.recogerDatos(this.envio);
			}
		})
	}
	async recogerDatos(envio:Envio){
		console.log(envio);

		if (!envio.primeres_dades) {
			this.envio.primeres_dades = this.dades;
			this.envio.primera_gravacio = true;
			console.log('primeres dades');
			var d = new Date();
			this.envio.data_primeres_dades = d.getTime();
			this.envio.data_10dies = this.envio.data_primeres_dades + 864000000;
			this.actualizarEnvio(envio['_id'],this.envio);
		}else{
			this.envio.data_10dies = this.envio.data_primeres_dades + 864000000;
			var d = new Date();
			
			if (this.envio.data_10dies - d.getTime() > 0) {
				Swal.fire('Todavía no han pasado 10 días desde la primera grabación de datos',`Mensaje: No se han guardado los datos`,'error');
			}else{
				this.envio.segones_dades = this.dades;
				this.envio.segona_gravacio = true;
				this.actualizarEnvio(envio['_id'],this.envio);
			}
			
		}


	}

	async actualizarEnvio(id:string,envio:Envio,){
		this.enviosService.actualizarEnvio(id,envio).subscribe( resp => {
			console.log(resp);
			if (resp['msg'] === 'Envio Actualizado') {
				Swal.fire('Se han grabado los datos correctamente','','success');
			}else{
				Swal.fire('Ha habbido un error, no se ha actualizado',`${resp['msg']}`,'error');
			}
		});
  	}

  	convertirAUnix(fecha:string,horas:string){

		console.log(fecha);
		console.log(horas);

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

}
