import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Agenda } from '../../models/agenda.model';
import { agendaDestacat } from '../../interfaces/agenda.interface';
import { FileUploadService } from '../../services/file-upload.service';
import { ActosService } from '../../services/actos.service';



@Component({
	selector: 'app-destacat-agenda',
	templateUrl: './destacat-agenda.component.html',
	styleUrls: ['./destacat-agenda.component.css']
})
export class DestacatAgendaComponent implements OnInit {

	@Input() agenda: Agenda;
	@Input() destacat: agendaDestacat;
	@Input() num_dest: number;
	// @Output() html: EventEmitter<string> = new EventEmitter();
	// @Input() imagenCropped: any;
    // @Input() lista_preview:string[] = null;
    
    resizeToWidth:number = 278;
	resizeToHeight:number = 128;
	aspectRatio:number = 278/128;
	imagenCropped:any = null;
	
	imagenSubir: File;
	imagenSubirOriginal: File;
	
	widthImagen:number = 278;
	heightImagen:number = 128;

	editando:boolean = false;

	id_acto:string;
	id_acto_accio:string;

	url_anyo:number;
	url_mes:number;
	url_dia:number;

	constructor(
		private fileUploadService:FileUploadService,
		private actosService:ActosService
    ) { }

	ngOnInit(): void {

		// const acto_accio_arr = this.destacat.link.split('/');
		// console.log(acto_accio_arr);
		// this.id_acto_accio = acto_accio_arr[9];
		// this.url_anyo = parseInt(acto_accio_arr[6]);
		// this.url_mes = parseInt(acto_accio_arr[7]);
		// this.url_dia = parseInt(acto_accio_arr[8]);

		// this.actosService.getActosTituloAmigable(acto_accio_arr[10]).subscribe ( resp => {
		// 	console.log(resp);
		// 	if (resp['msg'] !== 'Acto no encontrado') {
		// 		const enlace_resp = resp['actos'][0]['enlace'];
		// 		// console.log(enlace_resp);
		// 		const resp_acto_accio_arr = enlace_resp.split('/');
		// 		// console.log(resp_acto_accio_arr);
		// 		var resp_id_acto_accio = resp_acto_accio_arr[9];
		// 		var resp_url_anyo = parseInt(resp_acto_accio_arr[6]);
		// 		var resp_url_mes = parseInt(resp_acto_accio_arr[7]);
		// 		var resp_url_dia = parseInt(resp_acto_accio_arr[8]);
				
		// 		if (resp_url_anyo === this.url_anyo && resp_url_mes === this.url_mes && resp_url_dia === this.url_dia && resp['actos'][0]['id_cv'] !== 'oooo') {
		// 			console.log('si que es');
					
		// 		}
		// 	}
		// });
		
			
		

		
		// this.actosService.getActo()
        

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

	editar(){
		this.editando = true;
	}

	guardar(){
		this.editando = false;
	}

	
    


}
