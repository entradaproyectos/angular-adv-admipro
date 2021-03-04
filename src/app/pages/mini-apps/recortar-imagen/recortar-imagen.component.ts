import { Component, OnInit } from '@angular/core';
import { FileUploadService } from '../../../services/file-upload.service';
import Swal from 'sweetalert2';


@Component({
	selector: 'app-recortar-imagen',
	templateUrl: './recortar-imagen.component.html',
	styleUrls: ['./recortar-imagen.component.css']
})
export class RecortarImagenComponent implements OnInit {

	resizeToWidth:number = 180;
	resizeToHeight:number = 180;
	aspectRatio:number = 1;
	imagenCropped:any = null;
	
	imagenSubir: File;
	imagenSubirOriginal: File;
	
	newsletter:string = 'cv';
	tipoImagen:string = '';
	widthImagen:number = 180;
	heightImagen:number = 180;

  	constructor(
		private fileUploadService:FileUploadService
  		) { }

	ngOnInit(): void {
	}

	elegirNewsletter(){

		console.log(this.newsletter);

		if(this.newsletter === 'cv'){
			this.widthImagen = 180;
			this.heightImagen = 180;
			this.aspectRatio = this.widthImagen/this.heightImagen;
		}
		if(this.newsletter === 'post'){
			this.widthImagen = 600;
			this.heightImagen = 300;
			this.aspectRatio = this.widthImagen/this.heightImagen;
		}


		if(this.newsletter === 'agenda_dest'){
			this.widthImagen = 278;
			this.heightImagen = 128;
			this.aspectRatio = this.widthImagen/this.heightImagen;
		}
		if(this.newsletter === 'agenda_prin'){
			this.widthImagen = 600;
			this.heightImagen = 117;
			this.aspectRatio = this.widthImagen/this.heightImagen;
		}

		if(this.newsletter === 'ai_dest'){
			this.widthImagen = 270;
			this.heightImagen = 154;
			this.aspectRatio = this.widthImagen/this.heightImagen;
		}
		if(this.newsletter === 'ai_prin'){
			this.widthImagen = 600;
			this.heightImagen = 258;
			this.aspectRatio = this.widthImagen/this.heightImagen;
		}

		if(this.newsletter === 'radar'){
			this.widthImagen = 278;
			this.heightImagen = 128;
			this.aspectRatio = this.widthImagen/this.heightImagen;
		}

		if(this.newsletter === 'especials'){

			this.aspectRatio = this.widthImagen/this.heightImagen;

		}


		console.log(this.widthImagen);
		console.log(this.heightImagen);
		console.log(this.aspectRatio);


	}

	cambiarEspecials(){

		this.aspectRatio = this.widthImagen/this.heightImagen;
		console.log(this.widthImagen);
		console.log(this.heightImagen);
		console.log(this.aspectRatio);

	}


	recibirImagen(evento:Event){
		const filename = 'temp';
		var file_imagen = this.fileUploadService.dataURLtoFile(evento,filename);
		// console.log(evento);

		this.imagenCropped = evento;
		// console.log(this.imagenCropped);
		this.imagenSubir = file_imagen;
		// console.log('file_imagen',this.imagenSubir);

	}

	// recibirImagenOriginal(archivo:File){
	// 	console.log(archivo);
	// 	this.imagenSubirOriginal = archivo;
	// }



}
