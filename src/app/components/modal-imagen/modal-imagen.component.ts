import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

import { ModelImagenService } from '../../services/model-imagen.service';
import { FileUploadService } from '../../services/file-upload.service';

@Component({
  selector: 'app-modal-imagen',
  templateUrl: './modal-imagen.component.html',
  styles: [
  ]
})
export class ModalImagenComponent implements OnInit {

  public imagenSubir: File;
  public imgTemp:any | ArrayBuffer = null;
  

  constructor(
    public modelImagenService:ModelImagenService,
    public fileUploadService:FileUploadService
  ) { }

  ngOnInit(): void {
  }

  cerrarModal(){
    this.imgTemp = null;
    this.modelImagenService.cerrarModal();
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
      // console.log(reader.result);
    }

  }

  subirImagen(){

    console.log('subiendo...');

    const id = this.modelImagenService.id;
    const tipo = this.modelImagenService.tipo;

    this.fileUploadService
        .actualizarFoto(this.imagenSubir, tipo, id)
        .then(img => {
          Swal.fire('Guardada','La imagen ha sido actualizada','success');
          this.modelImagenService.nuevaImagen.emit(img);
          this.cerrarModal();
        }).catch(err => {
          console.log(err);
          Swal.fire('Error','No se puedo subir la imagen','error');
        })  
  }

}
