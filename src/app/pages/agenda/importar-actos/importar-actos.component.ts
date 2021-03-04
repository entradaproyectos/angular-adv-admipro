import { Component, OnInit } from '@angular/core';

import { DatosUrlService } from '../../../services/datos-url.service';
// import { ActoSimple } from '../../../models/actoSimple.model';
import { actoSimple } from '../../../interfaces/actoSimple.interface';
import { ActosService } from '../../../services/actos.service';

@Component({
  selector: 'app-importar-actos',
  templateUrl: './importar-actos.component.html',
  styleUrls: ['./importar-actos.component.css']
})
export class ImportarActosComponent implements OnInit {

  cargando = false;
  actos:string[] = [];
  actos_def:string[] = [];

  guardarActosOK = false;
  data = [];

  constructor(
    private datos:DatosUrlService,
    private actosService:ActosService
  ) { }

  ngOnInit(): void {
  }

	importar(){
		this.cargando = true;
		this.datos.datosPorUrlAgenda().subscribe(async resp => {
		// console.log(resp);
		// this.actos = resp['datos'];
		this.actos = Object.values(resp['datos']);
		// console.log(this.actos);
		// console.log(this.actos.length);

		// this.actos_def = [];

		for (let index = 0; index < this.actos.length; index++) {

			if (this.actos[index]['fecha'].length !== 10) {
				
				
			}else{
					
				this.actos_def.push(this.actos[index]);
				if(this.actos[index][0]){
					this.actos_def[index]['enlace'] = Object.values(this.actos[index][0]);
					}
					if(this.actos[index][1]){
					this.actos_def[index]['fecha'] = Object.values(this.actos[index][1]);
					}
					// console.log(this.actos[index]);
			}
			
				
			
		}

		const data = await this.actosService.guardarActos(this.actos_def).then(async (datos) => {
			console.log(datos);
			this.cargando = false;
		});

		

		});
	}

	
	
	
  

}
