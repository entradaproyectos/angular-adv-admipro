import { Injectable } from '@angular/core';

@Injectable({
providedIn: 'root'
})
export class PremailerService {

	constructor() { }

	// premailer(email:string){

	// 	var premailer = require('premailer-api');

	// 	var emailTemplate = `
	// 	<html>
	// 		<head>
	// 			<title>My Email</title>
	// 			<style type="text/css">a { color: #336699; }</style>
	// 		</head>
	// 		<body>
	// 			Styles inlined with
	// 			<a href="http://premailer.dialect.ca">Premailer</a> via
	// 			<a href="https://github.com/JedWatson/node-premailer">node-premailer</a>.
	// 		</body>
	// 	<html>`;

	// 	return premailer.prepare({html: emailTemplate }, (res, email) => {
	// 		res.send(email.html);
	// 	  });
	// }

}




