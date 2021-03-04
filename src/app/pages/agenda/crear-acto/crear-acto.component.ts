import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';


import { DatosUrlService } from '../../../services/datos-url.service';
import { actoDesdeUrl } from '../../../interfaces/actoDesdeUrl.interface';
import { ActosService } from '../../../services/actos.service';
import { Acto } from '../../../models/acto.model';
import { Router } from '@angular/router';


@Component({
selector: 'app-crear-acto',
templateUrl: './crear-acto.component.html',
styleUrls: ['./crear-acto.component.css']
})
export class CrearActoComponent implements OnInit {

enlace = '';
enlace_trimmed = '';

error_enlace = '';
ok_enlace = '';

acto_desde_url:actoDesdeUrl = null;
actoModel:Acto = null;
msg_guardado = '';

cargando = false;

crearActoManual = false;

titulo:string = '';
especialidad:string = '';
fecha_acto_texto:string = '';
hora_acto_texto:string = '';
fecha_acto_texto_dia_semana:string = '';
termini_inscr_texto:string = '';

constructor(
	private datosUrlService:DatosUrlService,
	private actoService:ActosService
) { }

ngOnInit(): void {
	
}


trim(enlace:string){

	if (enlace.includes('?backToSearch')){
		const enlace_arr = enlace.split('?backToSearch');
		this.enlace = enlace_arr[0];
	}else{
		this.enlace = enlace;
	}

}

crear(){

	const datos = [
		this.enlace,
		this.titulo,
		this.especialidad,
		this.fecha_acto_texto,
		this.hora_acto_texto,
		this.fecha_acto_texto_dia_semana,
		this.termini_inscr_texto
	];

	console.log(datos);

	this.cargando = true;

	this.datosUrlService.datosPorInfoManual(datos).subscribe(async (resp:any) => {
		console.log(resp);
			if (!resp) {
				this.error_enlace = 'No se han recibido datos';
				this.cargando = false;
				this.crearActoManual = true;
			} else {
				this.ok_enlace = 'Se reciben datos';
				this.actoModel = resp;
				console.log(this.actoModel);
	
				// await this.crearActo(this.acto_desde_url);
				this.cargando = false;
			}
			
		})

		return this.actoModel;
	
}

async recibirDatos(){

	this.cargando = true;

	this.datosUrlService.actoDatosPorUrl(this.enlace).subscribe(async (resp:Acto) => {
	console.log(resp);
		if (!resp) {
			this.error_enlace = 'No se han recibido datos';
			this.ok_enlace = '';
			this.cargando = false;
			this.crearActoManual = true;
		} else {
			this.ok_enlace = 'Se reciben datos';
			this.error_enlace = '';
			this.actoModel = resp;
			console.log(this.actoModel);

			// await this.crearActo(this.acto_desde_url);
			this.cargando = false;
		}
		
	})

	this.error_enlace = '';

	return this.actoModel;
}




guardarActo(){
	console.log(this.actoModel);
	
	this.actoService.guardarActo(this.actoModel).subscribe(resp => {
		// console.log(resp);

		if (!resp['ok']) {
			// console.log(resp['msg']);
			if (resp['msg'] === 'El acto ya está registrado') {
				const existe = this.actoService.compararActo(resp['acto'],this.actoModel);
				if (!existe) {
					// console.log('Hay que actualizar');
					this.actoService.actualizarActo(resp['acto']['_id'],resp['acto']).subscribe( actual_guard => {
						console.log(resp);
						this.msg_guardado = actual_guard['msg'];
						console.log(this.msg_guardado);
						Swal.fire('Acto Actualizado',`${resp['acto']['titulo']} fue actualizado correctamente`,'success');
					});
				}else{
					console.log('Son iguales');
					this.msg_guardado = resp['msg'];
					console.log(this.msg_guardado);
					Swal.fire('Acto ya registrado',`${resp['acto']['titulo']} no ha sido cambiado`,'info');
				}
			}
				
		}else{
			this.msg_guardado = resp['msg'];
			Swal.fire('Acto guardado',`${resp['acto']['titulo']} ha sido guardado`,'success');
			console.log(resp);

		}
	
		this.actoModel = null;
		this.msg_guardado = '';
		this.error_enlace = '';
		this.ok_enlace = '';

	});


}








}
