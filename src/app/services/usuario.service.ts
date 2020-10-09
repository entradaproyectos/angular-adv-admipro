import { Injectable, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators'; // dispara un paso adicional
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';

import { environment } from '../../environments/environment';

import { CargarUsuarios } from '../interfaces/cargar-usuarios.interface';
import { loginForm } from '../interfaces/login-form.interface';
import { registerForm } from '../interfaces/registerFrom.interface';

import { Usuario } from '../models/usuario.model';

const baserUrl = environment.baseUrl;
declare const gapi:any;


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  public auth2:any;
  public usuario:Usuario;

  constructor(
    private http:HttpClient,
    private router:Router,
    private ngZone: NgZone
    ) { 
      this.googleInit();
    }

  get token():string{
    return localStorage.getItem('token')  || '';
  }

  get uid():string{
    return this.usuario.uid  || '';

  }

  get headers(){
    return {
      headers:{
        'x-token':this.token
      }
    }
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
  
    return this.http.get(`${baserUrl}/login/renew`,{
      headers:{
        'x-token':this.token
      }
    }).pipe(
      map((resp:any)=>{
        // console.log(resp);
        const {email,google,img='',nombre,role,uid} = resp.usuario;
        this.usuario = new Usuario(nombre,email,'',img,google,role,uid);
        localStorage.setItem('token',resp.token);
        return true;
      }),
      
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

  actulizarPerfil(data: {email:string,nombre:string,role:string}){

    data = {
      ...data,
      role: this.usuario.role
    }

    return this.http.put(`${baserUrl}/usuarios/${this.uid}`,data,this.headers);

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

  cargarUsuarios(desde:number=0){
    const url = `${ baserUrl}/usuarios?desde=${desde}`;
    return this.http.get<CargarUsuarios>(url,this.headers)
        .pipe(

          map(resp => {
            const usuarios = resp.usuarios.map(user => new Usuario(user.nombre, user.email,'',user.img,user.google,user.role,user.uid));
            return {
              total:resp.total,
              usuarios
            };
          })
        )
  }

  eliminarUsuario(usuario:Usuario){
    console.log('eliminando');
    // /usuarios/5f6493aa9bc5b63494704e7f

    const url = `${baserUrl}/usuarios/${usuario.uid}`;

    return this.http.delete(url,this.headers);

  }

  guardarUsuario(usuario: Usuario){
    return this.http.put(`${baserUrl}/usuarios/${usuario.uid}`,usuario,this.headers);
  }






}