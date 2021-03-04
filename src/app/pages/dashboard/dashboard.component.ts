import { Component, OnInit } from '@angular/core';
import { EnviosService } from '../../services/envios.service';
import { EnvioDePag, CargarEnvios } from '../../interfaces/envios.interface';
import { Envio } from '../../models/envio.model';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styles: [
	]
})
export class DashboardComponent implements OnInit {

	cargando = false;
	totalActos:number = 0;
	desde:number = null;
	envios:Envio[] = [];
	enviosTemp:Envio[] = [];
	totalEnvios:number = 0;
	fecha_actual : number;



	constructor(
		private enviosService:EnviosService
	) { }

	ngOnInit(): void {
		this.cargarEnvios();
		const d = new Date();
		this.fecha_actual = d.getTime();
	}

	cargarEnvios(){
		this.cargando = true;
		this.enviosService.cargarEnvios(this.desde).subscribe( (resp:any) => {
			this.envios = resp.envios;
			this.enviosTemp = resp.envios;
			this.totalEnvios = resp.total;
			console.log(this.envios);
			this.cargando = false;
		})
	}
	
	

}
