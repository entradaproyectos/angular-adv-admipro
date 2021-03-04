import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { DatosUrlService } from './datos-url.service';
import { environment } from '../../environments/environment.prod';

import { tap, map } from 'rxjs/operators';
import { EnvioDePag } from '../interfaces/envios.interface';
import { CargarEnvios } from '../interfaces/envios.interface';
import { Envio } from '../models/envio.model';

const baserUrl = environment.baseUrl;

@Injectable({
  	providedIn: 'root'
})

export class EnviosService implements OnInit {

  	constructor(
		private datos:DatosUrlService,
		private http:HttpClient
	  ) { }

	ngOnInit(){}

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

	cargarEnvios(desde:number=0){
		const url = `${ baserUrl}/envios?desde=${desde}`;
		return this.http.get<CargarEnvios>(url,this.headers)
			.pipe(

				map(resp => {

					const envios = resp.envios.map(envio => new Envio(envio.nom_enviament, envio.campanya,envio.estat, envio.data_inici, envio.data_enviament, envio.enviaments_fets, envio.tipo, envio.numero,  envio.anyo_codi, envio.anyo, envio.id_email, envio.data_primeres_dades, envio.primera_gravacio, envio.segona_gravacio, envio.data_10dies, envio.primeres_dades, envio.segones_dades));

					return {
					total:resp.total,
					envios
					};
				})
			)
	}

	getEnvioPorDataEnv(data_enviament:number){	
		return this.http.get(`${baserUrl}/envios/env/${data_enviament}`,this.headers);
	}


	guardarEnvio(envio:Envio){
		console.log('envio en service',envio)
		return this.http.post(`${baserUrl}/envios`, envio, this.headers);
	}

	async compararEnvio(envioDB:EnvioDePag, envio:EnvioDePag){
	
		var ok = false;
		if(envio === envioDB){
			var ok = true;
		}

		return ok;
	}

	async existeEnvio(envio:Envio){

		var existe = {
			ok: false,
			envio: null
		};
		this.http.get(`${baserUrl}/envios/${envio.data_inici}`,this.headers).subscribe(async (resp) => {
			if (await resp['msg'] === 'Envio no encontrado') {
			} else if (await resp['msg'] === 'Envio encontrado'){
				existe = {
					ok: true,
					envio: resp['envio']
				};

			}
		});
		return existe;
	}

	actualizarEnvio(_id:string, envio:Envio){
		return this.http.put(`${baserUrl}/envios/${_id}`, envio, this.headers);
	}

	getEnvioNomFets(){

	}





}
