import { Component, OnInit } from '@angular/core';
import { DatosUrlService } from '../../../services/datos-url.service';

@Component({
	selector: 'app-envios',
	templateUrl: './envios.component.html',
	styleUrls: ['./envios.component.css']
})

export class EnviosComponent implements OnInit {

	constructor(
		private datosUrlService:DatosUrlService
	) { }

	ngOnInit(): void {

		


	}








}
