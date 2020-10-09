import { Component, OnDestroy, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { delay } from 'rxjs/operators';

import { Usuario } from 'src/app/models/usuario.model';

import { BusquedasService } from '../../../services/busquedas.service';
import { ModelImagenService } from '../../../services/model-imagen.service';
import { UsuarioService } from '../../../services/usuario.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styles: [
  ]
})
export class UsuariosComponent implements OnInit, OnDestroy {

  public totalUsuarios:number = 0;
  public usuarios:Usuario[]=[];
  public usuariosTemp:Usuario[]=[];

  public imgSubs:Subscription;
  public desde:number = 0;
  public cargando:boolean = true;

  constructor(
    private usuarioService:UsuarioService,
    private busquedasService:BusquedasService,
    private modelImagenService:ModelImagenService
  ) { }

  ngOnDestroy(): void {
    this.imgSubs.unsubscribe();
  }

  ngOnInit(): void {

    this.CargarUsuarios();
    this.imgSubs = this.modelImagenService.nuevaImagen
    .pipe(
      delay(100)
    )
    .subscribe( img => {
       this.CargarUsuarios();
      });
  }


  CargarUsuarios(){
    this.cargando = true;
    this.usuarioService.cargarUsuarios(this.desde).subscribe( ({total,usuarios}) => {
      this.totalUsuarios = total;
      this.usuarios = usuarios;
      this.usuariosTemp = usuarios;
      this.cargando = false;

    })
  }

  cambiarPagina(valor:number){
    this.desde += valor;
    if (this.desde < 0) {
      this.desde = 0;
    }else if(this.desde >= this.totalUsuarios){
      this.desde -= valor;  
    }
    this.CargarUsuarios();
  }

  buscar(termino:string){
    if (termino.length === 0) {
      return this.usuarios = this.usuariosTemp;
    }
    this.busquedasService.buscar('usuarios',termino).subscribe(
      resultados => {
        this.usuarios = resultados;
      }
    )
  }


  eliminarUsuario(usuario:Usuario){

    if (usuario.uid === this.usuarioService.usuario.uid) {
      return Swal.fire('Error','No puede borrarse a si mismo','error')
    }
    
    // console.log(usuario);

    Swal.fire({
      title: '¿Borrar Usuario?',
      text: `Está apunto de borrar a ${usuario.nombre}`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, borrar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.usuarioService.eliminarUsuario(usuario).subscribe( resp => {
          this.CargarUsuarios();
          Swal.fire('Usuario Borrado',`${usuario.nombre} fue eliminado correctamente`,'success')
        })
      }
    })
  }

 

  cambiarRole(usuario:Usuario){
    // console.log(usuario);
    this.usuarioService.guardarUsuario(usuario).subscribe( resp => {
      console.log(resp);
    })
  }

  abrirModal(usuario:Usuario){
    console.log(usuario);
    this.modelImagenService.abrirModal('usuarios',usuario.uid,usuario.img);
  }

}
