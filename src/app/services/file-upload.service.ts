import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Newscv } from '../models/newscv.model';
import { Newsrec } from '../models/newsrec.model';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import * as _ from 'lodash';



const baseUrl = environment.baseUrl;
const baserUrlPHP = environment.baseUrlPHP;


@Injectable({
providedIn: 'root'
})
export class FileUploadService {

	archivo = {
		enlace: null,
		titulo_amigable: null,
		nombreArchivo: null,
		base64textString: null,
		id_usuario: null,
		archivo_para: ''
	};

	respGuardarImagen:any;
	imgBase64Path:any;

	constructor(
		private http: HttpClient
	) { }

	async actualizarFoto(archivo:File,tipo:'usuarios'|'medicos'|'hospitales', id:string){

		try {

		const url = `${baseUrl}/uploads/${id}`;
		const formData = new FormData();
		formData.append('imagen',archivo);

		const resp = await fetch(url,{
			method:'PUT',
			headers: {
			'x-token':localStorage.getItem('token') || ''
			},
			body: formData
		});

		const data = await resp.json();
		console.log(data);

		if (data.ok) {
			return data.nombreArchivo;
		}else{
			console.log(data.msg);
			return false;
		}

		} catch (error) {
		console.log(error);
		return false;
		}

	}

	dataURLtoFile(dataurl, filename) {
		var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
			bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
		while(n--){
			u8arr[n] = bstr.charCodeAt(n);
		}
		return new File([u8arr], filename, {type:mime});
 	}

	recogerDatosImg(archivo:File, usuario:string, news:any){
		const pasar = {
			archivo,
			usuario,
			news
		}
		return this.http.post(`${baserUrlPHP}/devolver_datos_img.php`,pasar);
	}

	guardar_datos_email(email_datos:any){
		return this.http.post(`${baserUrlPHP}/guardar_datos_email.php`,email_datos)
	}

	// async guardarImagen(archivo:File,tipo:'usuarios'|'newscv'|'hospitales',news:any){

	// 	this.archivo = {
	// 		nombre: archivo.name,
	// 		nombreArchivo: archivo.name,
	// 		base64textString: null,
	// 		id_usuario: news['usuario'],
	// 		archivo_para: tipo
	// 	};

	// 	var reader = new FileReader();
    //     reader.onload = await this._handleReaderLoaded.bind(reader);
    //     reader.readAsBinaryString(archivo);

		

	// 	let ext_arr = this.archivo.nombreArchivo.split('.');
    // 	const extension = ext_arr[1];

	// 	const resp = await {
	// 		archivo:this.archivo,
	// 		tipo,
	// 		id_usuario: this.archivo.id_usuario
	// 	};

	// 	return this.http.post(`${baserUrlPHP}/guardar_imagen.php`,resp);
	// }


	

	async pasarA64(archivo:File,tipo:'usuarios'|'newscv'|'imagen-acto',news:any) {
		// this.imageError = null;

		// Size Filter Bytes
		const max_size = 20971520;
		const allowed_types = ['image/png', 'image/jpeg'];
		const max_height = 15200;
		const max_width = 25600;

		if (!_.includes(allowed_types, archivo.type)) {
			Swal.fire('Archivo NO válido','Sólo son válidos archivos JPG / PNG ','error');
			// return;
		}

		if (archivo.size > max_size) {
			Swal.fire('Archivo NO válido','Máxima tamaño de archivo ' + max_size / 1000 + 'Mb','error');
			// return;
		}

		this.archivo = {
			enlace: news['enlace'],
			titulo_amigable: news['titulo_amigable'],
			nombreArchivo: news['filename_html'],
			base64textString: null,
			id_usuario: news['acto']['usuario'],
			archivo_para: tipo
		};
        
            const reader = new FileReader();
            reader.onload = (e: any) => {
                const image = new Image();
				image.src = e.target.result;
                image.onload = rs => {
                    const img_height = rs.currentTarget['height'];
                    const img_width = rs.currentTarget['width'];

                    console.log(img_height, img_width);

                    if (img_height > max_height && img_width > max_width) {
						Swal.fire('Archivo NO válido','Maximo Tamaño permitido es '+ max_height +
						'*' + max_width + 'px','error');
                        // return;
					}

					var imgBase64Path = e.target.result;
					// this.imgBase64Path = imgBase64Path;
					// console.log('imgBase64Path',imgBase64Path);
					// return this.imgBase64Path;
					
					// this.archivo = {
					// 	enlace: news['enlace'],
					// 	titulo_amigable: news['titulo_amigable'],
					// 	nombreArchivo: news['filename_html'],
					// 	base64textString: this.imgBase64Path,
					// 	id_usuario: news['acto']['usuario'],
					// 	archivo_para: tipo
					// };
					
					this.guardarImagen64PHP(imgBase64Path,tipo,news).subscribe( resp => {
						console.log(resp);
					});
					
				}
				

                    
                
			};
			
			
			return reader.readAsDataURL(archivo);
			

	}
	
	guardarImagen64PHP(archivo64:string,tipo:'usuarios'|'newscv'|'hospitales'|'imagen-acto',news:any){
		this.archivo = {
			enlace: news['enlace'],
			titulo_amigable: news['titulo_amigable'],
			nombreArchivo: news['filename_html'],
			base64textString: archivo64,
			id_usuario: news['acto']['usuario'],
			archivo_para: tipo
		};
		return this.http.post(`${baserUrlPHP}/guardar_imagen.php`,JSON.stringify(this.archivo));
	}








}
