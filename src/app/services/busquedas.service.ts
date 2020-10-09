import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { Usuario } from '../models/usuario.model';

const baserUrl = environment.baseUrl;

@Injectable({
  providedIn: 'root'
})


export class BusquedasService {

  constructor(
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

  private transfromarUsuarios(resultados:any[]):Usuario[]{
    return resultados.map(user => new Usuario(user.nombre, user.email,'',user.img,user.google,user.uid));
  }

  buscar(tipo:'usuarios'|'medicos'|'hospitales', termino:string){
    const url = `${ baserUrl}/todo/coleccion/${tipo}/${termino}`;
    return this.http.get<any[]>(url,this.headers)
        .pipe(
          map((resp:any) => {
            switch (tipo) {
              case 'usuarios':
                return this.transfromarUsuarios(resp.resultados);
              default:
                return [];
            }
          })
        )
  }



}
