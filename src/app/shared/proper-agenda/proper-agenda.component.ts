import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { agendaPropers } from 'src/app/interfaces/agenda.interface';
import { Agenda } from '../../models/agenda.model';


@Component({
  	selector: 'app-proper-agenda',
  	templateUrl: './proper-agenda.component.html',
  	styleUrls: ['./proper-agenda.component.css']
})

export class ProperAgendaComponent implements OnInit {

	@Input() index: number;
	@Input() newsletter: Agenda;
	@Input() item: agendaPropers;

	@Input() para_news: string;
	@Input() tipo: string;

	@Output() newsletter_def: EventEmitter<Agenda> = new EventEmitter();

	  
	editando:boolean = false;


  	constructor() { }

  	ngOnInit(): void {

		console.log(this.index);
		console.log(this.item);

	  }
	  
	  editar(){
		this.editando = true;
	  }

	  guardar(){
		this.editando = false;

		if (this.para_news = 'agenda') {

			if (this.tipo = 'proper') {
				this.newsletter.propersSeminaris[this.index] = this.item;
				console.log(this.item);
				console.log(this.newsletter);
				this.newsletter_def.emit(this.newsletter);
			}else if(this.tipo = 'sacaba'){
				this.newsletter.sacaba[this.index] = this.item;
				console.log(this.item);
				console.log(this.newsletter);
				this.newsletter_def.emit(this.newsletter);
			}else if(this.tipo = 'obert'){

			}

		}
		
	  }

}
