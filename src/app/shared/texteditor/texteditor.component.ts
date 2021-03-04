import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { Acto } from '../../models/acto.model';

@Component({
	selector: 'app-texteditor',
	templateUrl: './texteditor.component.html',
	styleUrls: ['./texteditor.component.css']
})
export class TexteditorComponent{

	@Input() acto:Acto;
	@Input() utmCampaing:string;
	@Input() numero:number;
	@Input() tipo:string;

	@Output() emitHtml:EventEmitter<string> = new EventEmitter;

	  htmlContent:string;
	  htmlContentTransf:boolean = false;

	editorConfig: AngularEditorConfig = {
		editable: true,
		spellcheck: true,
		height: 'auto',
		minHeight: '0',
		maxHeight: 'auto',
		width: 'auto',
		minWidth: '0',
		translate: 'yes',
		enableToolbar: true,
		showToolbar: true,
		placeholder: 'Pega aquí el texto',
		defaultParagraphSeparator: '',
		defaultFontName: 'Arial,Helvetica,sans-serif;',
		defaultFontSize: '14px',
		fonts: [
			{class: 'arial', name: 'Arial'},
			{class: 'times-new-roman', name: 'Times New Roman'},
			{class: 'calibri', name: 'Calibri'},
			{class: 'comic-sans-ms', name: 'Comic Sans MS'}
		],
		customClasses: [
		{
			name: 'quote',
			class: 'quote',
		},
		{
			name: 'redText',
			class: 'redText'
		},
		{
			name: 'titleText',
			class: 'titleText',
			tag: 'h1',
		},
		],
		uploadUrl: 'v1/image',
		
		uploadWithCredentials: false,
		sanitize: true,
		toolbarPosition: 'top',
		toolbarHiddenButtons: [
		['bold', 'italic'],
		['fontSize']
		]
	};

  constructor() { }

  async transformarHtml(){
	//   console.log(this.htmlContent);

	// if(this.htmlContentTransf){
		
	// }

		const newStr = this.htmlContent.split('<font face="Helvetica, serif">').join('');
		const newStr01 = newStr.split('<font face="Times New Roman, serif">').join('');
		const newStr02 = newStr01.split('<font size="3">').join('');
		const newStr03 = newStr02.split('<font color="#666666">').join('');
		const newStr04 = newStr03.split('<font color="#bf0000">').join('');
		const newStr1 = newStr04.split('<font>').join('');
		const newStr2 = newStr1.split('</font>').join('');
		const newStr3 = newStr2.split('<b>').join('<strong>');
		const newStr4 = newStr3.split('</b>').join('</strong>');
		const newStr5 = newStr4.split('&#10;').join(' ');
		const newStr6 = newStr5.split('<strike>').join('');
		const newStr7 = newStr6.split('</strike>').join('');
		// console.log(newStr7);

		var definitivo = null;
		var existe = false;

		const sinPs = newStr7.split('</p>').join('');
		const newStr_arr = sinPs.split('<p>');
		console.log(newStr_arr);

		for (let index = 0; index < newStr_arr.length; index++) {
			if (newStr_arr[index] === '' || newStr_arr[index] === '<br>  ' ) {
				newStr_arr.splice( index, 1 );
			}else{
				
			}
		}
		console.log(newStr_arr);

		


		const flecha = `
		<p style="line-height: 19px !important; width: 100%; padding: 0px 10px 0px 0px; font-weight: normal; text-align: left; font-size: 14px; font-family: Arial, Helvetica, sans-serif; position: relative;">
			<img data-cke-saved-src="http://enviaments.accio.gencat.cat/ACC1O/cat/docs/enviaments/img/arrow-vermell.png" src="http://enviaments.accio.gencat.cat/ACC1O/cat/docs/enviaments/img/arrow-vermell.png" alt="icona fletxa" style="border-width:0"> `;

		const parrafos_flecha = [];

		for (let index = 0; index < newStr_arr.length; index++) {

			if( newStr_arr[index].startsWith('<strong>') && newStr_arr[index].endsWith('</strong> ') ){
				parrafos_flecha.push(index);
				existe = true;
			}else{
				definitivo = newStr7;
			}
		}

		if (existe) {
			definitivo = newStr7.replace('<p>', flecha);
			for (let index = 1; index < parrafos_flecha.length; index++) {
				definitivo = definitivo.replace('<p>', flecha);
			}
		}

	// console.log(definitivo);
		
		const link_def = `<a href="${enlace}?utm_source=ACT&amp;utm_medium=${this.acto.fecha_acto_anyo}-${this.numero}-txt&amp;utm_campaign=${this.utmCampaing}" target="_blank" class="nodeco" data-linkname="Content : Text" style="text-decoration: none; color: rgb(192, 0, 0);">`;
		const enlaces = [];

		if( newStr7.includes('<a ') ){
			var href_copiado_arr = definitivo.split('href="');
			for (let index = 0; index < href_copiado_arr.length; index++) {
				var indi = href_copiado_arr[index].indexOf('"');
				var enlace = href_copiado_arr[index].slice(0, indi);
				var enlace_copiado = href_copiado_arr[index].slice(0, indi);
				if (enlace.includes('?backToSearch')) {
					var indi2 = href_copiado_arr[index].indexOf('?backToSearch');
					enlace = href_copiado_arr[index].slice(0, indi2);
				}
				if (enlace.startsWith('http')) {
					enlaces.push(enlace);
				}
				var newStr9 = definitivo.split(enlace_copiado).join(`${enlace}?utm_source=${this.tipo}&amp;utm_medium=${this.acto.fecha_acto_anyo}-${this.numero}-txt&amp;utm_campaign=${this.utmCampaing}" target="_blank" class="nodeco" data-linkname="Content : Text" style="text-decoration: none; color: rgb(192, 0, 0);">`);
			}
			
			var definitivo = newStr9.split('">">').join('">');
		}

		for (let index = 0; index < enlaces.length; index++) {

		}

		// console.log(enlaces);

		definitivo = definitivo.split('<p><br> </p>').join('');
		definitivo = definitivo.split('<p>').join('<p style="line-height: 19px !important; width: 100%; padding: 0px 10px 0px 0px; font-weight: normal; text-align: left; font-size: 14px; font-family: Arial, Helvetica, sans-serif; position: relative;">');

		var acentos = ['À','Á','È','É','Ì','Í','Ò','Ó','Ù','Ú','à','á','è','é','ì','í','ò','ó','ù','ú','Ï','ï','Ü','ü','Ñ','ñ','Ç','ç','·','’',];
		var reemplazo =['&#192;','&#193;','&#200;','&#201;','&#204;','&#205;','&#210;','&#211;','&#217;','&#218;','&#2224;','&#225;','&#232;','&#233;','&#236;','&#237;','&#242;','&#243;','&#249;','&#250;','&#207;','&#239;','&#220;','&#252;','&#209;','&#241;','&#199;','&#231;','&#192;','&#8217;'];

		for (let index = 0; index < acentos.length; index++) {
			// definitivo = definitivo.split(reemplazo[index]).join(acentos[index]);
			definitivo = definitivo.replace(new RegExp(reemplazo[index],'g'),acentos[index]);
		}

		// definitivo = definitivo.split('ú').join('');

		console.log(definitivo);
		this.htmlContent = definitivo;

		this.htmlContentTransf = true;

		// console.log('htmlContent textedditor',this.htmlContent);

		this.emitHtml.emit(this.htmlContent);



  }

  

}
