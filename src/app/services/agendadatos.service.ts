import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { agendaDestacat, agendaDestaquem, agendaPropers,indicesAgenda } from '../interfaces/agenda.interface';
import { Agenda } from '../models/agenda.model';
import { actoDesdeUrl } from '../interfaces/actoDesdeUrl.interface';
import { Acto } from '../models/acto.model';
import { DatosUrlService } from './datos-url.service';

@Injectable({
	providedIn: 'root'
})

export class AgendadatosService {

	texto = '';
	total_arr:string[] = null;

	indices:indicesAgenda = null;
	destaquem:agendaDestaquem = null;
	propersSeminaris_a:agendaPropers[] = [];
	propersSeminaris:agendaPropers[] = [];
	sacaba_a:agendaPropers[] = [];
	sacaba:agendaPropers[] = [];
	obert:agendaPropers[] = [];

	agenda:Agenda = null;


	destacat1_obj:agendaDestacat = null;
	destacat2_obj:agendaDestacat = null;

	especialidad:string = '';

	proper_obj:agendaPropers = null;
	sacaba_obj:agendaPropers = null;


	enlace:string;
	enlace_bit:string;
	titulo_nombre:string;




	constructor(
		private datosUrlService:DatosUrlService
	) { }
	  

	tratarTexto(texto:string){

		// console.log(texto);

		this.texto = texto.replace(/&#10;/g, ' ');

		// this.texto = this.texto.replace(/<p>/g, '');
		// this.texto = this.texto.replace(/<\/p>/g, '');

		this.texto = this.texto.replace(/\'/g, '’');
		this.texto = this.texto.replace(/<font>/g, '');
		this.texto = this.texto.replace(/<\/font>/g, '');
		this.texto = this.texto.replace(/<span lang="ca">/g, '');
		this.texto = this.texto.replace(/<\/span>/g, '');
		this.texto = this.texto.replace(/<u>/g, '');
		this.texto = this.texto.replace(/<\/u>/g, '');
		this.texto = this.texto.replace(/<a><\/a>/g, '');
		// this.texto = this.texto.replace(/<p align="left">/g, '');
		this.texto = this.texto.replace(/<font color="#c00000">/g, '');
		this.texto = this.texto.replace(/<span lang="ca-ES">/g, '');
		this.texto = this.texto.replace(/<font color="#ce181e">/g, '');
		this.texto = this.texto.replace(/<font color="#bf0000">/g, '');
		

// 
		this.texto = this.texto.replace(/<font face="Calibri, serif">/g, '');
		this.texto = this.texto.replace(/<font color="#666666">/g, '');
		this.texto = this.texto.replace(/<font face="Helvetica, serif">/g, '');
		this.texto = this.texto.replace(/<font color="#0563c1">/g, '');
		this.texto = this.texto.replace(/<font color="#bf0000">s/g, '');
		this.texto = this.texto.replace(/<br>/g, '');
		this.texto = this.texto.replace(/<p lang="ca">/g, '');

		var acentos = ['À','Á','È','É','Ì','Í','Ò','Ó','Ù','Ú','à','á','è','é','ì','í','ò','ó','ù','ú','Ï','ï','Ü','ü','Ñ','ñ','Ç','ç','·','’',];
		var reemplazo =['&#192;','&#193;','&#200;','&#201;','&#204;','&#205;','&#210;','&#211;','&#217;','&#218;','&#2224;','&#225;','&#232;','&#233;','&#236;','&#237;','&#242;','&#243;','&#249;','&#250;','&#207;','&#239;','&#220;','&#252;','&#209;','&#241;','&#199;','&#231;','&#192;','&#8217;'];

		for (let index = 0; index < acentos.length; index++) {
			// definitivo = definitivo.split(reemplazo[index]).join(acentos[index]);
			this.texto = this.texto.replace(new RegExp(reemplazo[index],'g'),acentos[index]);
		}

		// const index_acaba_agenda = this.texto.indexOf("</p>",0);
		// console.log(index_acaba_agenda);

		// const ag = this.texto.slice(0,21);
		// const ag2 = ag.replace(/<p>/g, '').trim();

		// console.log(ag2);

		this.texto = this.texto.replace(/<p>/g, '***');
		this.texto = this.texto.replace(/<p align="left">/g, '***');
		this.texto = this.texto.replace(/<\/p>/g, '');

		// console.log(this.texto);

		this.total_arr = this.texto.split('***');

		return this.total_arr;
	}

	trimearYborrar(total_arr:string[]){
		for (let index = 0; index < total_arr.length; index++) {
			total_arr[index] = total_arr[index].trim();
		}
		for (let index = 0; index < total_arr.length; index++) {
			if (total_arr[index] === '') {
				total_arr.splice(index,1);
			}
		}
		console.log(total_arr);
		return total_arr;

	}

	titulo(total_arr:string[]){
		for (let index = 0; index < total_arr.length; index++) {
			if (total_arr[index].startsWith('AGENDA')) {
				this.titulo_nombre = total_arr[index];
			}
		}

		return this.titulo_nombre;
	}

	recibirFecha(titulo:string){
		const solo_fecha = titulo.slice(7);
		const fecha_arr = solo_fecha.split('/');
		// console.log(fecha_arr);
		const anyo = fecha_arr[2].slice(1);
		const anyo_num = parseInt(anyo);
		return anyo_num;
	}

	empiezanIndices(total_arr:string[]){

		for (let index = 0; index < total_arr.length; index++) {
			if (total_arr[index] === 'Destaquem') {
				var empiezaDestaquem = index;
			}
		}

		for (let index = 0; index < total_arr.length; index++) {
			if (total_arr[index] === 'Propers seminaris') {
				var empiezaPropers = index;
			}
		}

		for (let index = 0; index < total_arr.length; index++) {
			if (total_arr[index] === 'S’acaba el termini per inscriure’t') {
				var empiezaSacaba = index;
			}
		}

		for (let index = 0; index < total_arr.length; index++) {
			if (total_arr[index] === 'Ja s’han obert les inscripcions') {
				var empiezaObert = index;
			}
		}

		this.indices = {
			empiezaDestaquem,
			empiezaPropers,
			empiezaSacaba,
			empiezaObert
		};

		return this.indices;

	}

	async destacat1(total_arr:string[]){

		const fechaDestacat1 = total_arr[this.indices.empiezaDestaquem + 1];

		const link_enteroDest1 = total_arr[this.indices.empiezaDestaquem + 2];

		var link_empiezaDest1 = link_enteroDest1.indexOf('"') + 1;
		var link_acabDest1 = link_enteroDest1.lastIndexOf('"');

		var linkDestacat1 = link_enteroDest1.slice(link_empiezaDest1, link_acabDest1);

		linkDestacat1 = this.quitarBack(linkDestacat1);

		var titulo_empiezaDest1 = link_enteroDest1.lastIndexOf('">');
		var titulo_acabDest1 = link_enteroDest1.lastIndexOf('<');

		const tituloDestacat1 = link_enteroDest1.slice(titulo_empiezaDest1 + 2, titulo_acabDest1);

		this.destacat1_obj = {
			fecha : fechaDestacat1,
			link : linkDestacat1,
			titulo : tituloDestacat1,
			especialidad : '',
			imagen : `-destacat1.jpg`
		}

		if(!linkDestacat1.endsWith('p1')){
			const c = this.datosUrlService.actoDatosPorUrl(this.destacat1_obj.link).subscribe( (resp:Acto) => {
				this.destacat1_obj.especialidad = resp.especialidad;
			});
		}else{
			this.destacat1_obj.especialidad = '';
		}

		

		return this.destacat1_obj;

	}

	async destacat2(total_arr:string[]){

		const fechaDestacat2 = total_arr[this.indices.empiezaDestaquem + 3];

		const link_enteroDest2 = total_arr[this.indices.empiezaDestaquem + 4];
		// console.log('link_enteroDest2',link_enteroDest2);

		var link_empiezaDest2 = link_enteroDest2.indexOf('"') + 1;
		var link_acabDest2 = link_enteroDest2.lastIndexOf('"');

		var linkDestacat2 = link_enteroDest2.slice(link_empiezaDest2, link_acabDest2);

		linkDestacat2 = this.quitarBack(linkDestacat2);
		// console.log('linkDestacat2_quitarBack',linkDestacat2);

		var titulo_empiezaDest2 = link_enteroDest2.lastIndexOf('">');
		var titulo_acabDest2 = link_enteroDest2.lastIndexOf('<');

		const tituloDestacat2 = link_enteroDest2.slice(titulo_empiezaDest2 + 2, titulo_acabDest2);

		this.destacat2_obj = {
			fecha : fechaDestacat2,
			link : linkDestacat2,
			titulo : tituloDestacat2,
			especialidad : '',
			imagen : `-destacat2.jpg`
		}

		if(!linkDestacat2.endsWith('p1')){
			const d = this.datosUrlService.actoDatosPorUrl(this.destacat2_obj.link).subscribe( (resp:Acto) => {
				this.destacat2_obj.especialidad = resp.especialidad;
				// console.log(resp);
			});
		}else{
			this.destacat2_obj.especialidad = '';
		}

		return this.destacat2_obj;

	}

	async propers(total_arr:string[]){

		var propers_ar = [];

		if (this.indices.empiezaSacaba) {
			for (let index = this.indices.empiezaPropers + 1; index <this.indices.empiezaSacaba; index++) {
				propers_ar.push(total_arr[index]);
			}
		}else if (!this.indices.empiezaSacaba && this.indices.empiezaObert) {
			for (let index = this.indices.empiezaPropers + 1; index <this.indices.empiezaObert; index++) {
				propers_ar.push(total_arr[index]);
			}
		}else if(!this.indices.empiezaSacaba && !this.indices.empiezaObert) {
			for (let index = this.indices.empiezaPropers + 1; index <total_arr.length; index++) {
				propers_ar.push(total_arr[index]);
			}
		}

		
		// console.log(propers_ar);

		for (let index = 0; index < propers_ar.length; index++) {

			var link_entero_fecha = '';
			var empieza_fecha = null;
			var acaba_fecha = null;

			var fechaProper = '';

			var link_entero = '';

			var titulo_empieza = null;
			var titulo_acaba = null;
			var titulo = '';

			var link_empieza = null;
			var link_acaba = null;
			var link = '';

			var especialidad = '';

			
			if(index % 2 === 0){

				if (propers_ar[index].startsWith('<a href="') ) {

					// var fechaProper = this.total_arr[index];
					link_entero_fecha = propers_ar[index];
					empieza_fecha = link_entero_fecha.indexOf('">') + 2;
					acaba_fecha = link_entero_fecha.indexOf('</a>');
					fechaProper = link_entero_fecha.slice(empieza_fecha,acaba_fecha);

					link_empieza = link_entero_fecha.indexOf('<a href="') + 9;
					link_acaba = link_entero_fecha.indexOf('">');
					link = link_entero_fecha.slice(link_empieza,link_acaba);

					titulo_empieza = link_entero_fecha.lastIndexOf('">') + 2;
					titulo_acaba = link_entero_fecha.lastIndexOf('</a>');
					titulo = link_entero_fecha.slice(titulo_empieza,titulo_acaba);

				}else{

					fechaProper = propers_ar[index];

					link_entero = propers_ar[index + 1];

					if (link_entero) {
						titulo_empieza = link_entero.indexOf('">') + 2;
						titulo_acaba = link_entero.indexOf('</a>');
						titulo = link_entero.slice(titulo_empieza,titulo_acaba);
						link_empieza = link_entero.indexOf('<a href="') + 9;
						link_acaba = link_entero.indexOf('">');
						link = link_entero.slice(link_empieza,link_acaba);
					}
					console.log(link_entero);
					
					// console.log('pares NO empieza por enlace');

				}

			
			}else{

				fechaProper = propers_ar[index - 1];

				link_entero = propers_ar[index];

				titulo_empieza = link_entero.indexOf('">') + 2;
				titulo_acaba = link_entero.indexOf('<"/a>') - 3;
				titulo = link_entero.slice(titulo_empieza,titulo_acaba);
				link_empieza = link_entero.indexOf('<a href="') + 9;
				link_acaba = link_entero.indexOf('">');
				link = link_entero.slice(link_empieza,link_acaba);

				// console.log('impares');

			}

			link = this.quitarBack(link);

			this.proper_obj = {
				fecha : fechaProper,
				link : link,
				titulo : titulo,
				especialidad : this.especialidad
			}

			// console.log(proper);

			if (this.proper_obj.fecha && this.proper_obj.link && this.proper_obj.titulo) {
				
				this.propersSeminaris_a.push(this.proper_obj);
			}


		}

		// console.log(this.propersSeminaris_a);

		for (let index = 0; index < this.propersSeminaris_a.length; index++) {

			if (index%2 === 0) {
				this.propersSeminaris.push(this.propersSeminaris_a[index]);
			}

		}

		for (let index = 0; index < this.propersSeminaris.length; index++) {

			if(link.endsWith('p1')){
				this.especialidad = '';
				
			}else{

				// const a = await this.recogerEspecialidad(link).then((value) => {
				// 	this.especialidad = value;
				// })

				const a = this.datosUrlService.actoDatosPorUrl(this.propersSeminaris[index].link).subscribe( (resp:Acto) => {
					// console.log(resp);
					this.especialidad = resp.especialidad;
					this.propersSeminaris[index].especialidad = this.especialidad;
					return this.especialidad;
				});
			}


			// this.propersSeminaris[index].especialidad = await this.especialidad;

		}

		// console.log(this.propersSeminaris);
		
		return this.propersSeminaris;
	}

	async sacaba_arr(total_arr:string[]){

		var sin_obert = null;

		if (!this.indices.empiezaObert) {
			sin_obert = total_arr.length - this.indices.empiezaDestaquem + 1;
		}else{
			sin_obert = this.indices.empiezaObert;
		}

		console.log('sin_obert',sin_obert);
		console.log('this.empiezaObert',this.indices.empiezaObert);

		var sacaba_ar = [];

		for (let index = this.indices.empiezaSacaba + 1; index < sin_obert; index++) {
			sacaba_ar.push(total_arr[index]);
		}

		for (let index = 0; index < sacaba_ar.length; index++) {

			var fechaSacaba = '';

			var link_entero_fecha = '';
			var empieza_fecha = null;
			var acaba_fecha = null;

			var link_entero = '';

			var titulo_empieza = null;
			var titulo_acaba = null;
			var titulo = '';

			var link_empieza = null;
			var link_acaba = null;
			var link = '';

			if(index % 2 === 0){

				if (sacaba_ar[index].startsWith('<a href="') ) {

					link_entero_fecha = sacaba_ar[index];
					empieza_fecha = link_entero_fecha.indexOf('">') + 2;
					acaba_fecha = link_entero_fecha.indexOf('</a>');
					fechaSacaba = link_entero_fecha.slice(empieza_fecha,acaba_fecha);

					link_empieza = link_entero_fecha.indexOf('<a href="') + 9;
					link_acaba = link_entero_fecha.indexOf('">');
					link = link_entero_fecha.slice(link_empieza,link_acaba);

					titulo_empieza = link_entero_fecha.lastIndexOf('">') + 2;
					titulo_acaba = link_entero_fecha.lastIndexOf('</a>');
					titulo = link_entero_fecha.slice(titulo_empieza,titulo_acaba);
					
				}else{

					fechaSacaba = sacaba_ar[index];

					link_entero = sacaba_ar[index + 1];
					titulo_empieza = link_entero.indexOf('">') + 2;
					titulo_acaba = link_entero.indexOf('</a>');
					titulo = link_entero.slice(titulo_empieza,titulo_acaba);
					link_empieza = link_entero.indexOf('<a href="') + 9;
					link_acaba = link_entero.indexOf('">');
					link = link_entero.slice(link_empieza,link_acaba);

				}
			
			}else{

				fechaSacaba = sacaba_ar[index - 1];

				link_entero = sacaba_ar[index];

				titulo_empieza = link_entero.indexOf('">') + 2;
				titulo_acaba = link_entero.indexOf('<"/a>') - 3;
				titulo = link_entero.slice(titulo_empieza,titulo_acaba);
				link_empieza = link_entero.indexOf('<a href="') + 9;
				link_acaba = link_entero.indexOf('">');
				link = link_entero.slice(link_empieza,link_acaba);

			}

			link = this.quitarBack(link);

			// if(!link.endsWith('p1')){
			// 	await this.recogerEspecialidad(link).then((value) => {
			// 		this.especialidad = value;
			// 	});
			// }else{
			// 	this.especialidad = '';
			// }

			this.sacaba_obj = {
				fecha : fechaSacaba,
				link : link,
				titulo : titulo,
				especialidad : this.especialidad
			}

			this.sacaba_a.push(this.sacaba_obj);

		}

		for (let index = 0; index < this.sacaba_a.length; index++) {

			if (index%2 === 0) {
				this.sacaba.push(this.sacaba_a[index]);
			}

		}

		for (let index = 0; index < this.sacaba.length; index++) {

			console.log('sacaba link',this.sacaba[index].link);

			if(!link.endsWith('p1')){
				const a = this.datosUrlService.actoDatosPorUrl(this.sacaba[index].link).subscribe( (resp:Acto) => {
					this.especialidad = resp.especialidad;
					this.sacaba[index].especialidad = this.especialidad;
					return this.especialidad;
				});
			}else{
				this.especialidad = '';
			}

			this.sacaba[index].especialidad = await this.especialidad;

		}

		console.log(this.sacaba);

		return this.sacaba;
		 
	}

	async agenda_obj(anyo:number,numero:number){

		this.destaquem = {
			destacat1:this.destacat1_obj,
			destacat2:this.destacat2_obj
		};

		this.enlace = `http://enviaments.accio.gencat.cat/ACC1O/cat/docs/enviaments/20${anyo}/agenda/agenda-${numero}.html?utm_source=AG&amp;utm_medium=${numero}-compartit-recomanacio&amp;utm_campaign=enviament-agenda`;

		this.agenda = new Agenda(this.titulo_nombre,numero,anyo,this.destaquem, this.propersSeminaris,this.enlace, this.sacaba, this.obert);

		return this.agenda;
	}


	quitarBack(link: string){

		var enlace_fin = link;

		if(link.includes('?backToSearch')){
			const back_empieza = link.indexOf('?backToSearch');
			enlace_fin = link.slice(0,-(link.length - back_empieza));
		}

		// console.log(enlace_fin);

		return enlace_fin;

	}

	async recogerEspecialidad(link:string){
		this.datosUrlService.especialidadPorUrl(link).subscribe( async(resp) => { 
			// console.log(resp);
			// console.log(resp['datos']['especialidad']);
			this.especialidad = await resp['datos']['especialidad'];
			// console.log(this.especialidad);
		});

		return this.especialidad;
		 
	}


}
