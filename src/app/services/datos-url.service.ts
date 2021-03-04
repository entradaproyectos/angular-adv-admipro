import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { actoDesdeUrl } from '../interfaces/actoDesdeUrl.interface';
import { map, catchError } from 'rxjs/operators';
import { Acto } from '../models/acto.model';
import { of } from 'rxjs';

const baserUrlPHP = environment.baseUrlPHP;


@Injectable({
  providedIn: 'root'
})
export class DatosUrlService {

  acto:Acto = null;

  constructor(
    private http:HttpClient
  ) { }

  actoDatosPorUrl(url:string){

    return this.http.post<actoDesdeUrl>(`${baserUrlPHP}/datosPorUrl.php`,url)

    .pipe(
      map((resp:any)=>{
        // console.log(resp);
        // const {email,google,img='',nombre,role,uid} = resp.usuario;
        this.acto = new Acto(resp.datos.enlace, resp.datos.especialidad, resp.datos.fecha_acto_texto_dia_semana, resp.datos.fecha_acto_anyo, resp.datos.fecha_acto_num,resp.datos.fecha_acto_num_fin, resp.datos.fecha_acto_texto, resp.datos.hora_acto_texto, resp.datos.termini_inscr, resp.datos.termini_inscr_num, resp.datos.termini_inscr_texto, resp.datos.titulo, resp.datos.titulo_amigable, resp.datos.titulo_amigable_short, resp.datos.titulo_percent, resp.datos.varies_dates,resp.datos.id_cv,resp.datos.id_rec,resp.datos.id_post,resp.datos.id_acto_accio,resp.datos.url_fecha);
        // localStorage.setItem('token',resp.token);
        return this.acto;
      }),
      
      catchError(error => of(false))
    );

  }

  especialidadPorUrl(url:string){

    return  this.http.post<actoDesdeUrl>(`${baserUrlPHP}/datosPorUrl.php`,url);

  }

  datosPorInfoManual(datos:string[]){

    console.log(datos);

    return this.http.post<actoDesdeUrl>(`${baserUrlPHP}/datosPorInfoManual.php`,datos)
    .pipe(
      map((resp:any)=>{
        console.log('respBack',resp);
        console.log('resp.datos.enlace',resp.data.enlace);

        this.acto = new Acto(resp.data.enlace, resp.data.especialidad, resp.data.fecha_acto_texto_dia_semana, resp.data.fecha_acto_anyo, resp.data.fecha_acto_num,resp.data.fecha_acto_num_fin, resp.data.fecha_acto_texto, resp.data.hora_acto_texto, resp.data.termini_inscr, resp.data.termini_inscr_num, resp.data.termini_inscr_texto, resp.data.titulo, resp.data.titulo_amigable, resp.data.titulo_amigable_short, resp.data.titulo_percent, resp.data.varies_dates,resp.datos.id_cv,resp.datos.id_rec,resp.datos.id_post,resp.datos.id_acto_accio,resp.datos.url_fecha);
        console.log(this.acto);
        return this.acto;
      }),
      
      catchError(error => of(false))
    );

  }

  datosPorUrlAgenda(){

    return this.http.post<any>(`${baserUrlPHP}/datosPorURLagenda.php`,'');

  }

  datosPorUrlEina(){

    return this.http.post<any>(`${baserUrlPHP}/datosPorURLeina.php`,'');

  }




}
