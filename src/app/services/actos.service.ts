import { Injectable } from '@angular/core';
import { throwError, Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Acto } from '../models/acto.model';
import { DatosUrlService } from './datos-url.service';
import { environment } from '../../environments/environment.prod';

import { actoDesdeUrl } from '../interfaces/actoDesdeUrl.interface';
import { tap, map } from 'rxjs/operators';
import { CargarActos } from '../interfaces/cargar-actos.interface';

const baserUrl = environment.baseUrl;

@Injectable({
providedIn: 'root'
})
export class ActosService {

	acto:Acto = null;
	enlace:string = null;

	actoCrea:Acto = null;

	error_creacion:string[] = [];

	actos_recibidos:number = 0;
	actos_error:number = 0;
	actos_iguales:number = 0;
	actos_guardados:number = 0;
	actos_actualizados:number = 0;


	constructor(
		private datos:DatosUrlService,
		private http:HttpClient
	) { }

	get token():string{
		return localStorage.getItem('token')  || '';
	}

	get headers(){
		return {
		headers:{
			'x-token':this.token
			}
		}
	}

	cargarActos(desde:number=0){
		const url = `${ baserUrl}/actos?desde=${desde}`;
		return this.http.get<CargarActos>(url,this.headers)
			.pipe(

				map(resp => {

					const actos = resp.actos.map(acto => new Acto(acto.enlace, acto.especialidad,acto.fecha_acto_texto_dia_semana, acto.fecha_acto_anyo, acto.fecha_acto_num, acto.fecha_acto_num_fin, acto.fecha_acto_texto, acto.hora_acto_texto, acto.termini_inscr, acto.termini_inscr_num, acto.termini_inscr_texto, acto.titulo, acto.titulo_amigable, acto.titulo_amigable_short, acto.titulo_percent, acto.varies_dates,acto.id_cv,acto.id_rec,acto.id_post,acto.id_acto_accio,acto.url_fecha,acto._id));

					return {
					total:resp.total,
					actos
					};
				})
			)
	}


async guardarActos(actos:any[]){

	console.log('Actos Service',actos);

	for (let index = 0; index < actos.length; index++) {
		this.actos_recibidos ++;
		// console.log(actos[index]['enlace']);
		this.datos.actoDatosPorUrl(actos[index]['enlace']).subscribe( async (resp:Acto) => {
			// this.acto = resp;
			console.log(resp);

			this.getActo(resp['id_acto_accio']).subscribe( async (get) => {

				if (await get['ok'] && get['msg'] === 'Acto encontrado') {

					console.log('está',get['acto']);
					this.actualizarActo(get['acto']['_id'],resp['acto']).subscribe(  actualizar => {
						console.log(actualizar);
						this.actos_actualizados ++;
					});


					// var iguales = await this.compararActo(this.acto,get);
					// if (!iguales) {
					// 	this.guardarActo(this.acto).subscribe( async guardar1 => {
					// 		console.log(guardar1);
					// 		this.actos_guardados ++;

					// 	});
					// }else{
					// 	this.actos_iguales ++;
					// }

				}else if (await get['ok'] && get['msg'] === 'Acto no encontrado'){
					console.log('NO está',get['acto']);
					this.guardarActo(resp).subscribe(  guardar => {
						console.log(guardar);
						this.actos_guardados ++;
					});
				}
			});

			
		});
	}

	
	var data = {
		'actos_recibidos':this.actos_recibidos ,
		'actos_error':this.actos_error ,
		'actos_iguales':this.actos_iguales ,
		'actos_guardados':this.actos_guardados ,
		'actos_actualizados':this.actos_actualizados 
	};
	console.log(data);
	
	return data;

}

guardarActo(acto:Acto){
	// console.log(acto);
	return this.http.post(`${baserUrl}/actos`, acto, this.headers);
}

async compararActo(actoDB:Acto, actoModel:Acto){

	// console.log('actoDB', actoDB);
	// console.log('actoModel', actoModel);

	var ok = true;

	if (actoModel.hora_acto_texto !== actoDB.hora_acto_texto ) {
	ok = false;
	}

	if (actoDB.especialidad !== actoModel.especialidad ) {
	ok = false;
	}
	if (actoDB.fecha_acto_anyo !== actoModel.fecha_acto_anyo ) {
	ok = false;
	}
	if (actoDB.fecha_acto_num !== actoModel.fecha_acto_num ) {
	ok = false;
	}
	if (actoDB.fecha_acto_texto !== actoModel.fecha_acto_texto ) {
	ok = false;
	}
	if (actoDB.fecha_acto_texto_dia_semana !== actoModel.fecha_acto_texto_dia_semana ) {
	ok = false;
	}
	
	if (actoDB.titulo !== actoModel.titulo ) {
	ok = false;
	}

	console.log(actoDB.varies_dates);
	console.log(actoModel.varies_dates);

	if (actoDB.varies_dates === true) {
	var varies_dates_actoDB = true;
	}
	if (actoDB.varies_dates === false) {
	var varies_dates_actoDB = false;
	}

	if (varies_dates_actoDB !== actoModel.varies_dates ) {
	ok = false;
	}

	console.log(ok);

	return ok;

}

actualizarActo(_id:string, acto:any){
	return this.http.put(`${baserUrl}/actos/${_id}`, acto, this.headers);
}

getActo(id_acto_accio:string){
	console.log(id_acto_accio);
	return this.http.get(`${baserUrl}/actos/${id_acto_accio}`, this.headers);
}

getActoId(_id:string){
	console.log(_id);
	return this.http.get(`${baserUrl}/actos/id/${_id}`, this.headers);
}

getActosTituloAmigable(titulo_amigable:string){
	console.log(titulo_amigable);
	return this.http.get(`${baserUrl}/actos/x/${titulo_amigable}`, this.headers);
}

borrarActo(_id:string){
	const url = `${baserUrl}/actos/${_id}`;
    return this.http.delete(url,this.headers);
}




}
