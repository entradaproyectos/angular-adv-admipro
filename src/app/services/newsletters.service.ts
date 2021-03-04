import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators'; // dispara un paso adicional
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';


import { environment } from '../../environments/environment';
import { Usuario } from '../models/usuario.model';
import { Newsrec } from '../models/newsrec.model';
import { Newscv } from '../models/newscv.model';
import { EnvioDePag } from '../interfaces/envios.interface';
import { Envio } from '../models/envio.model';

const baserUrlPHP = environment.baseUrlPHP;
const baserUrl = environment.baseUrl;


@Injectable({
  providedIn: 'root'
})
export class NewslettersService {

  public usuario:Usuario;
  public news:Newsrec;

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

  constructor(
    private http:HttpClient
  ) { }

  guardarRec(rec:Newsrec){

    return this.http.post(`${baserUrl}/recs`, rec, this.headers);
      
  }

  guardarCv(actCv:Newscv){

    return this.http.post(`${baserUrl}/actcvs`, actCv, this.headers);
      
  }

 
  async getRecporEnvio(envio:Envio){
		return this.http.get(`${baserUrl}/recs/envio-codi/${envio.anyo_codi}-${envio.numero}`,this.headers);
	}
  async getActporEnvio(envio:Envio){
    return this.http.get(`${baserUrl}/actcvs/envio-codi/${envio.anyo_codi}-${envio.numero}`,this.headers);
  }

 

}

