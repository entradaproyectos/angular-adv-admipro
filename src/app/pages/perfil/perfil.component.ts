import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

import { Usuario } from '../../models/usuario.model';

import { UsuarioService } from '../../services/usuario.service';
import { FileUploadService } from '../../services/file-upload.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styles: [
  ]
})
export class PerfilComponent implements OnInit {

  public perfilForm:FormGroup;
  public usuario: Usuario;
  public imagenSubir: File;
  public imgTemp:any | ArrayBuffer = null;

  constructor(
    private fb:FormBuilder,
    private usuarioService:UsuarioService,
    private fileUploadService:FileUploadService
  ) { 
  this.usuario = usuarioService.usuario;
  }

  ngOnInit(): void {
    this.perfilForm = this.fb.group({
      nombre:[this.usuario.nombre,Validators.required],
      email:[this.usuario.email,[Validators.required, Validators.email]]
    })
  }

  actualizarPerfil(){
    console.log(this.perfilForm.value);
    this.usuarioService.actulizarPerfil(this.perfilForm.value)
      .subscribe( () => {
        const {nombre,email} = this.perfilForm.value;
        this.usuario.nombre = nombre;
        this.usuario.email = email;

        Swal.fire('Guardado','Los cambios fueron guardados','success');
      },(err) => {
        console.log(err.error.msg);
        Swal.fire('Error',err.error.msg,'error');

      })
  }


  cambiarImagen(file:File){
    // console.log(file);
    this.imagenSubir = file;

    if (!file) {
      return this.imgTemp = null;
    };

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      this.imgTemp = reader.result;
      console.log(reader.result);
    }

  }

  subirImagen(){
    this.fileUploadService.actualizarFoto(this.imagenSubir,'usuarios',this.usuario.uid)
        .then(img => {
          this.usuario.img = img;
          Swal.fire('Guardada','La imagen ha sido actulizada','success');
        })
        .catch(err => {
          console.log(err);
          Swal.fire('Error','No se puedo subir la imagen','error');
        })  
  }


}
