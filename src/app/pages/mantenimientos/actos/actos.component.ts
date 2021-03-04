import { Component, OnInit } from '@angular/core';
import { Acto } from '../../../models/acto.model';
import { ActosService } from '../../../services/actos.service';
import { CargarActos } from '../../../interfaces/cargar-actos.interface';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';


@Component({
	selector: 'app-actos',
	templateUrl: './actos.component.html',
	styles: [
	]
})

export class ActosComponent implements OnInit {

	public totalActos:number = 0;
	cargando = false;

	public desde:number = null;

	public actos:Acto[] = [];
	public actosTemp:Acto[]=[];

	constructor(
		private actosService:ActosService,
		private router:Router
		) { }

	ngOnInit(): void {

		this.CargarActos();


	}


	CargarActos(){
	this.cargando = true;
		this.actosService.cargarActos(this.desde).subscribe(  (resp:CargarActos) => {

		this.actos = resp.actos;
		this.actosTemp = resp.actos;
		this.totalActos = resp.total;
		// console.log(this.actos);
		this.cargando = false;
		})
	}

	borrar(_id:string){

		Swal.fire({
			title: 'Seguro que quieres borrar este Acto?',
			showCancelButton: true,
			confirmButtonText: `Borrar`,
		  }).then((result) => {
			/* Read more about isConfirmed, isDenied below */
			if (result.isConfirmed) {

				this.actosService.borrarActo(_id).subscribe( resp => {
					// console.log(resp);
					var index:number = this.actos.indexOf(this.actos.find(x => x._id == _id));
					this.actos.splice(index, 1);
				});
				  Swal.fire('Acto Borrado', '', 'success');

				  
			} else if (result.isDenied) {
			  	Swal.fire('Acto NO Borrado', '', 'info')
			}
		  })

	}

	editar(_id:string){
	// console.log(_id);
		Swal.fire({
			title: 'Quieres editar este Acto?',
			showCancelButton: true,
			confirmButtonText: `Editar`,
		  }).then((result) => {
			/* Read more about isConfirmed, isDenied below */
			if (result.isConfirmed) {
				this.router.navigateByUrl(`/dashboard/editar-acto/${_id}`);
				
			}
		  })
	}

	cambiarPagina(valor:number){
		this.desde += valor;
		if (this.desde < 0) {
		this.desde = 0;
		}else if(this.desde >= this.totalActos){
		this.desde -= valor;
		}
		this.CargarActos();
	}


	crearRec(_id:string){
		// console.log(_id);
		this.router.navigateByUrl(`/dashboard/crear-rec/${_id}`);
		
	}

	crearCV(_id:string){
		// console.log(_id);
		this.router.navigateByUrl(`/dashboard/crear-act-cv/${_id}`);
	}

	crearPost(){
		
	}




	editarRec(){

	}
	editarCV(){
		
	}
	editarPost(){
		
	}

	borrarRec(){

	}
	borrarCV(){
		
	}
	borrarPost(){
		
	}




}
