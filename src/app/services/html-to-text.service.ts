import { Injectable } from '@angular/core';
import htmlToText from '@blac-sheep/html-to-text';




@Injectable({
	providedIn: 'root'
})
export class HtmlToTextService {

	html:string;
	html1:string;
	htmlToText:string;

	constructor() { }

	async texto(texto:string){
		this.html = texto;
		this.html1 = await htmlToText(this.html);

		this.htmlToText = this.html1.replace(/\n|\r/g, "")

		return this.htmlToText;
	}



}
