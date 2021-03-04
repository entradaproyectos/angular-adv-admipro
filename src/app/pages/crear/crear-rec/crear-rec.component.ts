import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

import { BitlyService } from '../../../services/bitly.service';
import { Newsrec } from '../../../models/newsrec.model';
import { NewslettersService } from '../../../services/newsletters.service';
import { ActosService } from '../../../services/actos.service';
import { ActivatedRoute } from '@angular/router';
import { Acto } from '../../../models/acto.model';
import { FileUploadService } from '../../../services/file-upload.service';
import { PremailerService } from '../../../services/premailer.service';
import { HtmlToTextService } from '../../../services/html-to-text.service';

@Component({
  selector: 'app-crear-rec',
  templateUrl: './crear-rec.component.html',
  styleUrls: ['./crear-rec.component.css']
})
export class CrearRecComponent implements OnInit {

  enlace_princ_mini = '';
  acto:Acto = null;

  numero:number;
  utmCampaing:string;
  enlace_chat:string;

  newsRec:Newsrec = null;

  cargando = false;

  urlTxt:string = '';
  urlHtml:string = '';
  urlHtmlText:string = '';

  txtName:string = '';
  htmlName:string = '';
  htmlTextName:string = '';

  htmlBlob;

  msg_guardado = '';

  constructor(
    private fb:FormBuilder,
    private newsService:NewslettersService,
    private bitlyService:BitlyService,
    private actosService:ActosService,
    private route: ActivatedRoute,
    private fileUploadService: FileUploadService,
    private htmlToTextService: HtmlToTextService
  ) { }

  ngOnInit(): void {

    const _id = this.route.snapshot.paramMap.get('id');
    console.log(_id);
    this.actosService.getActoId(_id).subscribe( resp => {
      // console.log(resp);
      this.acto = resp['acto'];
      // console.log(this.acto);
    });

  }

  async generarNews(){

    // console.log(this.enlace_chat);
    // console.log(this.numero);
    // console.log(this.utmCampaing);

    this.newsRec = new Newsrec(this.acto,this.numero,this.utmCampaing,this.enlace_chat);

    // console.log(this.newsRec);

  }

  async recogerHtmlString(html:string){
    // console.log('eiiiiiii');
    // this.cargando = true;
    // console.log(html);
    this.newsRec.html = html;
    
		const texto = await this.htmlToTextService.texto(html).then((textFromHtml:string) => {
			// console.log(textFromHtml);
			this.newsRec.htmlText = textFromHtml;
		})

    this.fileUploadService.guardar_datos_email(this.newsRec).subscribe( resp => {
      console.log(resp);
      if(resp['ok']){
        this.urlTxt = resp['txt'];
        this.urlHtml = resp['html'];
        this.urlHtmlText = resp['htmlText'];

        const arr_name_txt = this.urlTxt.split('/');
        this.txtName = arr_name_txt.pop();

        const arr_name_html = this.urlHtml.split('/');
        this.htmlName = arr_name_html.pop();

        const arr_name_htmlText = this.urlHtmlText.split('/');
			  this.htmlTextName = arr_name_htmlText.pop();

        // console.log(this.urlTxt);
        // console.log(this.txtName);
        
        // console.log(this.urlHtml);
        // console.log(this.htmlName);

      }else{

      }
    });
  }

  // http://localhost/gestion_mails_accio/backend/uploads/5f9050e7e834e64404b5ee05/REC__18112020-1739_5fb4dc3b51a62125e4deeeb1.txt

  // descargar(url:string){
  //   const archivo = new File()
  // }

  descargar(){
    var aFileParts = [this.newsRec.html];
    this.htmlBlob = new Blob(aFileParts, {type : 'text/html'}); // the blob
  }

  guardarRec(){

    this.newsService.guardarRec(this.newsRec).subscribe( resp => {
      // console.log(resp);
      if (!resp['ok']) {
        // console.log(resp['msg']);
        // if (resp['msg'] === 'El REC ya está registrado') {
          console.log('ha habido un error', resp['msg'])
        // }
          
      }else{
        this.msg_guardado = resp['msg'];
        // console.log(resp);
        this.acto.id_rec = resp['rec']['_id'];
        // console.log(this.acto);
        this.actosService.actualizarActo(this.acto._id, this.acto).subscribe(resp2 => {
          // console.log(resp2);
          if (resp2['ok']) {
            Swal.fire('Recordatori guardado y acto actualizado',`${resp['rec']['titulo']} ha sido guardado y acto actualizado`,'success');
          }else{
            Swal.fire('Recordatori guardado pero acto NO actualizado',`${resp['rec']['titulo']} ha sido guardado`,'success');
          }
        })

      }
    
      this.newsRec = null;
      this.msg_guardado = '';

    })

  }





}
