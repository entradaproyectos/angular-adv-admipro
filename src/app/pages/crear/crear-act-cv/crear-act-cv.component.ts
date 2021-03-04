import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';



import { Newscv } from '../../../models/newscv.model';

import { ActosService } from '../../../services/actos.service';
import { HtmlToTextService } from '../../../services/html-to-text.service';

import { Acto } from '../../../models/acto.model';
import { FileUploadService } from '../../../services/file-upload.service';
import { NewslettersService } from '../../../services/newsletters.service';

@Component({
selector: 'app-crear-act-cv',
templateUrl: './crear-act-cv.component.html',
styleUrls: ['./crear-act-cv.component.css']
})
export class CrearActCvComponent implements OnInit {

	resizeToWidth:number = 180;
	resizeToHeight:number = 180;
	aspectRatio:string = '1 / 1';

	imagenCropped:any = null;

	acto:Acto = null;
	tipo = 'ACT';

	// usuario = this.acto['usuario'];

	responder_nombre = '';
	responder_mail = '';
	numero:number;
	utmCampaing:string;
	asunto:string;
	preheader:string;

	parrafos_textos:string[] = null;
	num_parrafos: number;
	parrafos_separados = false;

	parrafos:string;
	lista_preview:string[] = null;

	inscriu:string = '';
	tel1:string;

	show_tel:boolean=false;

	responder_nombre2:string='';
	responder_mail2:string='';
	tel2:string='';

	show_colabora:boolean = false;
	colabora_nombre1:string;
	colabora_enlace1:string;
	colabora_imagen1:string;
	colabora_nombre2:string;
	colabora_enlace2:string;
	colabora_imagen2:string;

	show_coorganitzat:boolean = false;
	coorganitzat_nombre1:string;
	coorganitzat_enlace1:string;
	coorganitzat_imagen1:string;
	coorganitzat_nombre2:string;
	coorganitzat_enlace2:string;
	coorganitzat_imagen2:string;

	show_enlaces:boolean = false;
	enlaces_nombre1:string;
	enlaces_enlace1:string;
	enlaces_nombre2:string;
	enlaces_enlace2:string;
	enlaces_nombre3:string;
	enlaces_enlace3:string;

	newsCV:Newscv = null;

	cargando = false;

	urlTxt:string = '';
	urlHtml:string = '';
	urlImage:string = '';
	urlHtmlText:string = '';
	urlZip:string = '';
  
	txtName:string = '';
	htmlName:string = '';
	imageName:string = '';
	htmlTextName:string = '';
	zipName:string = '';

	htmlBlob: Blob;

	cargandoImagen = false;

	imagenSubir: File;
	imagenSubirOriginal: File;
	imgTemp:any | ArrayBuffer = null;
	

	emitHtml:string;

	show_2mail:boolean = false;

	msg_guardado:string = '';
	  
	constructor(
		private actosService:ActosService,
		private route: ActivatedRoute,
		private fileUploadService:FileUploadService,
		private htmlToTextService:HtmlToTextService,
		private newslettersService:NewslettersService
	) { }

	ngOnInit(): void {

		const _id = this.route.snapshot.paramMap.get('id');
		console.log(_id);

		this.actosService.getActoId(_id).subscribe( resp => {
			console.log(resp);
			this.acto = resp['acto'];
			console.log(this.acto);
		});

	}

	cambiarImagen(file:File){
		// console.log(file);
		this.imagenSubir = file;
	
		if (!file) {
		  return this.imgTemp = null;
		};
	
		const reader = new FileReader();
		reader.readAsDataURL(file);
		console.log(reader);
	
		reader.onloadend = () => {
		  this.imgTemp = reader.result;
		//   console.log(reader.result);
		}
	}

	recibirImagen(evento:Event){
		const filename = 'temp';
		var file_imagen = this.fileUploadService.dataURLtoFile(evento,filename);
		// console.log(evento);

		this.imagenCropped = evento;
		// console.log(this.imagenCropped);
		this.imagenSubir = file_imagen;
		console.log('file_imagen',this.imagenSubir);

	}

	recibirImagenOriginal(archivo:File){
		console.log(archivo);
		this.imagenSubirOriginal = archivo;
	}

	// subirImagen(){

	// 	this.fileUploadService.actualizarFoto(this.imagenSubir,'usuarios',this.acto.usuario)
	// 		.then(img => {
	// 		  this.newsCV.img = img;
			  
	// 		  Swal.fire('Guardada','La imagen ha sido actulizada','success');
	// 		})
	// 		.catch(err => {
	// 		  console.log(err);
	// 		  Swal.fire('Error','No se puedo subir la imagen','error');
	// 		})  

	// }

	

	async generarNews(){

		this.newsCV = new Newscv(this.acto,this.numero,this.utmCampaing,this.responder_nombre,this.responder_mail,this.asunto,this.preheader,this.inscriu,this.parrafos,this.tel1,this.responder_nombre2,this.responder_mail2,this.tel2,this.colabora_nombre1,this.colabora_enlace1,this.colabora_imagen1,this.colabora_nombre2,this.colabora_enlace2,this.colabora_imagen2,this.coorganitzat_nombre1,this.coorganitzat_enlace1,this.coorganitzat_imagen1,this.coorganitzat_nombre2,this.coorganitzat_enlace2,this.coorganitzat_imagen2,this.enlaces_nombre1,this.enlaces_enlace1,this.enlaces_nombre2,this.enlaces_enlace2,this.enlaces_nombre3,this.enlaces_enlace3);

		// console.log(this.imagenSubir);

		// console.log(this.newsCV);
		// console.log('imagenSubir',this.imagenSubir);
		// this.subirImagenPHP();

		
	}

	async recogerHtmlString(html:string){
		// console.log('eiiiiiii');
		// this.cargando = true;
		// console.log(html);
		const html1 = html.replace(/undefined/g,'');
		// console.log(html1);
		this.newsCV.html = html1;
		const texto = await this.htmlToTextService.texto(html1).then((textFromHtml:string) => {
			// console.log(textFromHtml);
			this.newsCV.htmlText = textFromHtml;
		})
		// console.log(this.newsCV);

		this.fileUploadService.guardar_datos_email(this.newsCV).subscribe(async resp => {
		  console.log(resp);
		  if(await resp['ok']){
			this.urlTxt = resp['txt'];
			this.urlHtml = resp['html'];
			this.urlHtmlText = resp['htmlText'];
	
			const arr_name_txt = this.urlTxt.split('/');
			this.txtName = arr_name_txt.pop();
	
			const arr_name_html = this.urlHtml.split('/');
			this.htmlName = arr_name_html.pop();

			const arr_name_htmlText = this.urlHtmlText.split('/');
			this.htmlTextName = arr_name_htmlText.pop();

			this.fileUploadService.guardarImagen64PHP(this.imagenCropped, 'newscv',this.newsCV).subscribe(resp2 => {
				console.log(resp2);
				if (resp2['ok'] === true) {
					this.urlImage = resp2['data'];
					console.log(this.urlImage);
					Swal.fire('Se ha guardado la imagen',`Mensaje: ${resp2['message']}`,'success');
					const arr_name_image = this.urlImage.split('/');
					console.log(arr_name_image);
					this.imageName = arr_name_image.pop();
				}else{
					Swal.fire('Ha habido un error al guardar la imagen',`Mensaje: ${resp2['message']}`,'error');
				}
			});
			const imagen_orig = this.fileUploadService.pasarA64(this.imagenSubirOriginal, 'imagen-acto',this.newsCV).then(resp3 => {
				console.log(resp3);
				this.fileUploadService.guardarImagen64PHP(this.imagenCropped, 'imagen-acto',this.newsCV).subscribe(resp4 => {
					console.log(resp4);
				});

			});
	
			// console.log(this.urlTxt);
			// console.log(this.txtName);
			// 
			// console.log(this.urlHtml);
			// console.log(this.htmlName);
	
		  }else{
			console.log('ha llegado un error', resp);
		  }
		});
	  }


	descargar(){
		var aFileParts = [this.newsCV.html];
		this.htmlBlob = new Blob(aFileParts, {type : 'text/html'}); // the blob
	}

	recibirTexto(evento:string){
		//   console.log(evento);
		  this.parrafos = evento;
	}


	guardarActCv(){

		this.newslettersService.guardarCv(this.newsCV).subscribe ( resp => {

			console.log(resp);
			if (!resp['ok']) {
				console.log('Ha habido un error', resp['msg'])
			}else{
			  this.msg_guardado = resp['msg'];
			  // console.log(resp);
			  this.acto.id_cv = resp['actcv']['_id'];
			  console.log(this.acto);
			  this.actosService.actualizarActo(this.acto._id, this.acto).subscribe(resp2 => {
				console.log(resp2);
				if (resp2['ok']) {
				  Swal.fire('Convocatoria guardada y acto actualizado',`${resp['actcv']['titulo']} ha sido guardado y acto actualizado`,'success');
				}else{
				  Swal.fire('Convocatoria guardada pero acto NO actualizado',`${resp['actcv']['titulo']} ha sido guardado`,'error');
				}
			  })
		
			}
		})

	
				
		  
			// this.newsRec = null;
			// this.msg_guardado = '';

		

	

	}
}
