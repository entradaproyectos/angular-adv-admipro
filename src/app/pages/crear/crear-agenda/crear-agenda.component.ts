import { Component, OnInit } from '@angular/core';
import { agendaDestacat, agendaDestaquem, agendaPropers } from '../../../interfaces/agenda.interface';
import { Agenda } from '../../../models/agenda.model';
import { DatosUrlService } from '../../../services/datos-url.service';
import { actoDesdeUrl } from '../../../interfaces/actoDesdeUrl.interface';
import { Acto } from '../../../models/acto.model';
import { AgendadatosService } from '../../../services/agendadatos.service';


@Component({
	selector: 'app-crear-agenda',
	templateUrl: './crear-agenda.component.html',
	styleUrls: ['./crear-agenda.component.css']
})


export class CrearAgendaComponent implements OnInit {

	total_arr : any[] = [];
	numero : number = null;
	texto:string;

	destaquem:agendaDestaquem = null;
	propersSeminaris_a:agendaPropers[] = [];
	propersSeminaris:agendaPropers[] = [];
	sacaba_a:agendaPropers[] = [];
	sacaba:agendaPropers[] = [];
	obert:agendaPropers[] = [];

	destacat1_obj:agendaDestacat = null;
	destacat2_obj:agendaDestacat = null;

	proper_obj:agendaPropers = null;

	agenda:Agenda = null;

	titulo:string;
	fecha:Date;
	anyo:number;
	enlace:string;
	enlace_bit:string;

	especialidad:string = '';
	especialidadDestacat1:string = '';
	especialidadDestacat2:string = '';

	empiezaDestaquem:number;
	empiezaPropers:number;
	empiezaSacaba:number = null;
	empiezaObert:number = null;

	texto_oculto:boolean = false;

	agenda_retoc:Agenda;
	html_agenda:string = '';

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

	cargandoImagen = false;

	imagenSubir: File;
	imagenSubirOriginal: File;
	imgTemp:any | ArrayBuffer = null;

	constructor(
		private datosUrlService:DatosUrlService,
		private agendadatosService: AgendadatosService
	) { }

	ngOnInit(): void {
	}

	async recibirTexto(event:any){

		this.total_arr = this.agendadatosService.tratarTexto(event);

		this.total_arr = this.agendadatosService.trimearYborrar(this.total_arr);

		this.titulo = this.agendadatosService.titulo(this.total_arr);
		console.log('titulo',this.titulo);

		this.anyo = this.agendadatosService.recibirFecha(this.titulo);
		console.log('anyo',this.anyo);

		var respIndices = this.agendadatosService.empiezanIndices(this.total_arr);
		console.log('empiezanIndices',respIndices);

		this.destacat1_obj = await this.agendadatosService.destacat1(this.total_arr);
		console.log('destacat1',this.destacat1_obj);

		this.destacat2_obj = await this.agendadatosService.destacat2(this.total_arr);
		console.log('destacat2',this.destacat2_obj);

		this.propersSeminaris = await this.agendadatosService.propers(this.total_arr);
		console.log('propersSeminaris',this.propersSeminaris);

		this.sacaba = await this.agendadatosService.sacaba_arr(this.total_arr);
		console.log('sacaba',this.sacaba);

		this.agenda = await this.agendadatosService.agenda_obj(this.anyo,this.numero);
		console.log('agenda',this.agenda);


	}

	recogerAgendaRetoc(event:Agenda){
		console.log(event);
		this.agenda = event;
	}

	recogerHtmlString(event:string){
		console.log('html agenda',event);
		this.html_agenda = event;

	}


	


}
