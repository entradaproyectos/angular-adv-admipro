import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { Acto } from '../../models/acto.model';

@Component({
	selector: 'app-text-editor-agenda',
	templateUrl: './text-editor-agenda.component.html',
	styleUrls: ['./text-editor-agenda.component.css']
})
export class TextEditorAgendaComponent implements OnInit {

	@Input() numero:number;
	
	@Output() emitTexto:EventEmitter<string> = new EventEmitter;

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

	ngOnInit(): void {
	}

	async transformarHtml(){
		//   console.log(this.htmlContent);
	
		// if(this.htmlContentTransf){
			
		// }
	
			// const newStr = this.htmlContent.split('<font face="Helvetica, serif">').join('');
	
			this.emitTexto.emit(this.htmlContent);
	
	
	
	  }



}
