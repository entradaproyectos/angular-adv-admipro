import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

import { BitlyService } from '../../../services/bitly.service';
import { Newsletter } from '../../../models/newsletter.model';
import { NewslettersService } from '../../../services/newsletters.service';
import { ActosService } from '../../../services/actos.service';
import { CargarActos } from '../../../interfaces/cargar-actos.interface';
import { Acto } from '../../../models/acto.model';

@Component({
  selector: 'app-newsletters',
  templateUrl: './newsletters.component.html',
  styles: [
  ]
})
export class NewslettersComponent implements OnInit {

  public crear:boolean = true;
  public formSubmitted = false;

  public guardar = false;

  public newsletter:Newsletter = null;

  public actos:Acto[] = [];



  // @Output() public newsletter_send : EventEmitter = new EventEmitter();

  public enlace: string;
  public tipo: string;
  public numero: number;
  public utmCampaing: string;

  public titulo: string;
  public titulo_amigable: string;
  public titulo_percent: string;
  public fecha_acto: Date;
  public fecha_acto_texto: string;
  public fecha_acto_texto_dia_semana: string;
  public hora_acto_texto: string;
  public termini_inscr_texto: string;
  public preheader: string;
  public preheader_percent: string;
  public asunto: string;
  public asunto_percent: string;

  public enlace_princ_mini:string;
  public enlace_mini_sin_http:string;


  public btnGenerarOK: boolean = false;

  public acto_dia:number;
  public acto_mes:number;
  public acto_anyo:number;
  public acto_hora_empieza:number;
  public acto_min_empieza:number;
  public acto_hora_acaba:number;
  public acto_min_acaba:number;

  public mail_sale_dia:number;
  public mail_sale_mes:number;
  public mail_sale_anyo:number;

  public responder_mail:string;
  public responder_nombre:string;

  public html:string;
 
  public newsForm = this.fb.group({
	  enlace:['http://agenda.accio.gencat.cat/cercador/-/actes/2020/11/02/1220492/marketplace-de-solucions-d-industria-4-0',Validators.required],
	  tipo:['REC',Validators.required],
	  numero:['139',Validators.required],
	  utmCampaign:['INN',Validators.required],
	  enlace_chat:[''],
	  titulo:['',Validators.required],
	  enlace_bitly:['',Validators.required],
	  asunto:['',Validators.required],
	  preheader:['',Validators.required],
	  responder_mail:['',Validators.required],
	  responder_nombre:['',Validators.required],
	  acto_dia:['',Validators.required],
	  acto_mes:['',Validators.required],
	  acto_anyo:['',Validators.required],
	  acto_hora_emp:['',Validators.required],
	  acto_min_emp:['',Validators.required],
	  acto_hora_acab:['',Validators.required],
	  acto_min_acab:['',Validators.required],
	  envio_dia:['',Validators.required],
	  envio_mes:['',Validators.required],
	  envio_anyo:['',Validators.required],
	  texto:['',Validators.required],
  });

  constructor(
    private fb:FormBuilder,
    private newsService:NewslettersService,
    private bitlyService:BitlyService,
    private actosService:ActosService
  ) { }

  ngOnInit(): void {

    
  }
  
  Crear(){
    this.crear = true;
  }

  async generarNews(enlace:string,tipo:string,numero:number,utmCampaing:string){

	  this.btnGenerarOK = true;

  //   await this.newsService.datosPorUrl(enlace,tipo,numero,utmCampaing).subscribe( (resp:any) => {

	// 	// console.log(this.enlace_princ_mini);

  //   console.log(resp);
    
	// 	this.btnGenerarOK = false;
  //   this.newsletter = resp;
    
	// 	// console.log(this.newsletter);

	// 	this.titulo = this.newsletter.titulo;
	// 	this.titulo_amigable = this.newsletter.titulo_amigable;
	// 	this.titulo_percent = this.newsletter.titulo_percent;
	// 	this.enlace = this.newsletter.enlace;
	// 	this.enlace_princ_mini = this.newsletter.enlace_princ_mini;
	// 	this.tipo = this.newsletter.tipo;
	// 	this.utmCampaing = this.newsletter.utmCampaing;
	// 	this.numero = this.newsletter.numero;
	// 	this.asunto = this.newsletter.asunto;
	// 	this.asunto_percent = this.newsletter.asunto_percent;
	// 	this.preheader = this.newsletter.preheader;
  //   this.preheader_percent = this.newsletter.preheader_percent;
    
	// 	this.responder_mail = this.newsletter.responder_mail;
	// 	this.responder_nombre = this.newsletter.responder_nombre;

	// 	// console.log(this.asunto);

	// 	this.acto_dia = this.newsletter.fecha_acto.getDate();
	// 	this.acto_mes = this.newsletter.fecha_acto.getMonth();
	// 	this.acto_anyo = this.newsletter.fecha_acto.getFullYear();
	// 	this.acto_hora_empieza = this.newsletter.fecha_acto.getHours();
	// 	this.acto_min_empieza = this.newsletter.fecha_acto.getMinutes();

	// 	this.mail_sale_dia = this.newsletter.fecha_sale_mail.getDate();
	// 	this.mail_sale_mes = this.newsletter.fecha_sale_mail.getMonth();
  //   this.mail_sale_anyo = this.newsletter.fecha_sale_mail.getFullYear();

	// });
	

  }

  crearNews(){

  }

  recogerHtmlString(html:string){
    console.log('eiiiiiii');
    console.log(html);
    this.newsletter.html = html;
  }

}
