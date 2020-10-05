import { Injectable, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators'; // dispara un paso adicional
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';

import { environment } from '../../environments/environment';
import { registerForm } from '../interfaces/registerFrom.interface';
import { loginForm } from '../interfaces/login-form.interface';

const baserUrl = environment.baseUrl;
declare const gapi:any;


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  public auth2:any;

  constructor(
    private http:HttpClient,
    private router:Router,
    private ngZone: NgZone
    ) { 
      this.googleInit();
    }


  googleInit(){

    return new Promise(resolve =>{
      console.log('google Init');
      gapi.load('auth2', ()=>{
        // Retrieve the singleton for the GoogleAuth library and set up the client.
        this.auth2 = gapi.auth2.init({
          client_id: '211393971284-gl78gmj49n1mkpc4kkcdem4f2q6bs7na.apps.googleusercontent.com',
          cookiepolicy: 'single_host_origin',
        });
        resolve();
      });

    })

  }

  validarToken():Observable<boolean>{
    const token = localStorage.getItem('token')  || '';

    return this.http.get(`${baserUrl}/login/renew`,{
      headers:{
        'x-token':token
      }
    }).pipe(
      tap((resp:any)=>{
        localStorage.setItem('token',resp.token)
      }),
      map(resp => true),
      catchError(error => of(false))
    );
  }


  crearUsuario(formData:registerForm){
    console.log('Creando usuario'); 

    return this.http.post(`${baserUrl}/usuarios`,formData)
    .pipe(
      tap((resp:any) => {
        console.log(resp);
        localStorage.setItem('token',resp.token)
      })
    )
  }

  login(formData:loginForm){
  
    return this.http.post(`${baserUrl}/login`,formData)
    .pipe(
      tap((resp:any) => {
        console.log(resp);
        localStorage.setItem('token',resp.token)
      })
    )
  }

  loginGoogle(token){
    
    return this.http.post(`${baserUrl}/login/google`, {token})
    .pipe(
      tap((resp:any) => {
        console.log(resp);
        localStorage.setItem('token',resp.token)
      })
    )
  }

  logout(){
    localStorage.removeItem('token');

    this.auth2.signOut().then( () => {

      this.ngZone.run(()=>{
        this.router.navigateByUrl('/login');
      })

    });

  }

}
