import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Agenda } from '../../models/agenda.model';
import { DomSanitizerPipe } from '../../pipes/dom-sanitizer.pipe';

@Component({
	selector: 'app-shared-agenda',
	templateUrl: './shared-agenda.component.html',
	styleUrls: ['./shared-agenda.component.css']
})
export class SharedAgendaComponent implements OnInit {

	@Input() newsletter: Agenda;

	numero_propers:number;
	mitad_numero_propers:number;
	array_mitad:number[] = [];
	array_total:number[] = [];
	
	@Output() newsletter_retoc: EventEmitter<Agenda> = new EventEmitter();
	@Output() html: EventEmitter<string> = new EventEmitter();

	// @Input() imagenCropped: any;
	// @Input() lista_preview:string[] = null;

	titulo_fecha = '';

	constructor() { }

	ngOnInit(): void {

		this.numero_propers = this.newsletter.propersSeminaris.length;
		this.mitad_numero_propers = this.numero_propers / 2;

		for (let index = 0; index < this.mitad_numero_propers; index++) {
			this.array_mitad.push(index + 1);
		}

		for (let index = 0; index < this.numero_propers; index++) {
			this.array_total.push(index + 1);
		}

		const titulo_fecha_ar1 = this.newsletter.titulo.split(' ');
		const titulo_fecha_ar2 = titulo_fecha_ar1[1].split('/');
		const dia = parseInt(titulo_fecha_ar2[0]);
		var mes = parseInt(titulo_fecha_ar2[1]);
		const anyo = '20' + String(this.newsletter.anyo);

		if (mes === 12) {
			mes = 0;
		}

		const meses = ['de decembre','de gener','de febrer','de març','d’abril','de maig','de juny','de juliol','d’agost','de setembre','d’octubre','de novembre'];

		this.titulo_fecha = dia + ' ' + meses[mes] + ' del ' + anyo;

		console.log(this.titulo_fecha);


	}

	recibirAgenda(agenda_def){
		console.log(agenda_def);
		this.newsletter_retoc.emit(agenda_def);
	}

	async emitirHtml(){

		// this.bitly_sin_h = this.newsletter.enlace_princ_mini;

		
		const part_header = `
			<html>
			<head>
				<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
				<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
				<meta http-equiv="X-UA-Compatible" content="IE=edge">
				<meta name="viewport" content="width=device-width, initial-scale=1.0">
				<meta property="og:image" content="http://enviaments.accio.gencat.cat/ACC1O/cat/docs/enviaments/assets/Actes/ACCIO_logo_header.jpg">
				<title>Consulta l'Agenda destacada amb els seminaris web</title>
				<meta property="og:url" content="http://enviaments.accio.gencat.cat/ACC1O/cat/docs/enviaments/20${this.newsletter.anyo}/agenda/agenda-${this.newsletter.numero}.html">
				<meta name="description" [content]="Agenda ACCI&Oacute;: Activitats per a empreses i professionals">
				<meta name="og:title" [content]="Consulta l'Agenda destacada amb els seminaris web">
			</head>


			<body>
				<center style="width:100%;table-layout:fixed;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%">
					<div style="max-width:600px">
						<!--[if (gte mso 9)|(IE)]>
							<table width="600" align="center" cellpadding="0" cellspacing="0" border="0" style="border-spacing:0;font-family:Arial;color:#333">
								<tr>
									<td style="padding:0;">
						<![endif]-->
						<table style="border-spacing:0;font-family:Arial;color:#333;Margin:0 auto;width:100%;max-width:600px" id="demo" cellspacing="0" cellpadding="0" border="0" align="center">
							<tbody>
								<tr>
									<td class="one-column" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;line-height:normal !important;">
										<table style="border-spacing:0;font-family:Arial,Helvetica,sans-serif;color:#333;" width="100%" cellspacing="0" cellpadding="0" border="0">
								<!-- ONE COLUMN LAYOUT -->
								<!-- SEPARATOR -->
									<tbody>
										<tr class="estructura">
											<td id="preheader" style="display:none !important;visibility:hidden;mso-hide:all;font-size:1px;color:#ffffff;line-height:1px;max-height:0px;max-width:0px;opacity:0;overflow:hidden;" width="0" height="0">
												Agenda ACCI&Oacute;: Activitats per a empreses i professionals
											</td>
										</tr>
										<tr>
											<td style="padding:0;" height="5"></td>
										</tr>
										<tr>
											<td style="padding:0;">
												<table style="border-spacing:0;font-family:Arial;color:#333" width="100%" cellspacing="0" cellpadding="0" border="0">
													<tbody>
														<tr>
															<td style="padding:0;width:100%;text-align:center">
																<p style="margin: 0px 0px 10px; font-size: 9px; color: rgb(51, 51, 51); position: relative;" id="10946">
																	No veus b&eacute; aquest correu? <a style="color:#c00000;text-decoration:none;" href="http://enviaments.accio.gencat.cat/ACC1O/cat/docs/enviaments/20${this.newsletter.anyo}/agenda/agenda-${this.newsletter.numero}.html?utm_source=AG&amp;utm_medium=${this.newsletter.numero}-webview&amp;utm_campaign=enviament-agenda"target="_blank">Fes clic aqu&iacute; </a> | Traducci&oacute;n autom&aacute;tica al <a style="color:#c00000;text-decoration:none;" href="https://translate.google.com/translate?sl=ca&tl=es&js=y&prev=_t&hl=ca&ie=UTF-8&u=http://enviaments.accio.gencat.cat/ACC1O/cat/docs/enviaments/20${this.newsletter.anyo}/agenda/agenda-${this.newsletter.numero}.html?utm_source=AG&amp;utm_medium=${this.newsletter.numero}-castellano&amp;utm_campaign=enviament-agenda" target="_blank">castellano</a> | Automatic translation to <a style="color:#c00000;text-decoration:none;" href="https://translate.google.com/translate?sl=ca&tl=en&js=y&prev=_t&hl=ca&ie=UTF-8&u=http://enviaments.accio.gencat.cat/ACC1O/cat/docs/enviaments/20${this.newsletter.anyo}/agenda/agenda-${this.newsletter.numero}.html?utm_source=AG&amp;utm_medium=${this.newsletter.numero}-english&amp;utm_campaign=enviament-agenda" target="_blank">English</a>
																</p>
															</td>
														</tr>
													</tbody>
												</table>
											</td>
										</tr>
										<tr>
											<td style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;line-height:5px !important;background:#222;" height="10">&nbsp;</td>
										</tr>

										<!-- ________ INICI HEADER TITULO Y REDES_______________________________________________________________ -->

										<!-- ONE COLUMN LAYOUT -->
										<tr>
											<td class="one-column" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;line-height:normal !important;background:#333;">
												<table style="border-spacing:0;font-family:Arial,Helvetica,sans-serif;color:#222;" width="100%" cellspacing="0" cellpadding="0" border="0">
													<tbody>
														<tr>
															<td class="al_left" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:25px;line-height:normal !important;text-align:left;background:#222;">
																<span class="x12 bold brown" style="Margin:0;line-height:normal !important;font-weight:700;font-size:10px;color:#ffffff;margin-bottom:10px;">
																	${this.titulo_fecha}
																</span>
															</td>
															<td class="al_right" style="background:#222;padding-top:0;padding-bottom:0;padding-right:25px;padding-left:0;line-height:normal !important;text-align:right;">
																<span class="dinblock" style="line-height:normal !important;display:inline-block;">
																	<a class="nodeco" href="https://www.facebook.com/sharer/sharer.php?u=https://${this.newsletter.enlace_bit}" style="text-decoration: none; font-weight: normal; font-size: 14px; color: rgb(192, 0, 0);" target="_blank" title="Facebook" id="facebook-link">
																		<img alt="Facebook" src="http://enviaments.accio.gencat.cat/ACC1O/cat/docs/enviaments/assets/Agenda/ico_fb_white.png" style="border-width:0;">
																	</a>
																</span>
																<span class="dinblock" style="line-height:normal !important;display:inline-block;">
																	<a class="nodeco" href="https://twitter.com/intent/tweet?text=Consulta%20l%27Agenda%20destacada%20amb%20els%20seminaris%20web%20d%27aquesta%20setmana%20https%3a%2f%2f${this.newsletter.enlace_bit}" style="text-decoration: none; font-weight: normal; font-size: 14px; color: rgb(192, 0, 0);" target="_blank" title="Twitter" id="twitter-link">
																		<img alt="Twitter" src="http://enviaments.accio.gencat.cat/ACC1O/cat/docs/enviaments/assets/Agenda/ico_tw_white.png" style="border-width:0;">
																	</a>
																</span>
																<span class="dinblock" style="line-height:normal !important;display:inline-block;">
																	<a class="nodeco" href="https://www.linkedin.com/shareArticle?mini=true&amp;url=https://${this.newsletter.enlace_bit}&amp;title=Consulta%20l%27Agenda%20destacada%20amb%20els%20seminaris%20web%20d%27aquesta%20setmana&amp;summary=Activitats%20per%20a%20empreses%20i%20professionals" style="text-decoration: none; font-weight: normal; font-size: 14px; color: rgb(192, 0, 0);" target="_blank" title="Linkedin" id="linkedin-link">
																		<img alt="LinkedIn" src="http://enviaments.accio.gencat.cat/ACC1O/cat/docs/enviaments/assets/Agenda/ico_in_white.png" style="border-width:0;">
																	</a>
																</span>
															</td>
														</tr>
													</tbody>
												</table>
											</td>
										</tr>
										<tr>
											<td style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;line-height:3px !important;background:#222; font-size:1px;" height="10">&nbsp;</td>
										</tr>
									</tbody>
								</table>
							</td>
						</tr>
					</tbody>
				</table>

				<!-- ________ FIN HEADER TITULO Y REDES_______________________________________________________________ -->

				<!-- ________ INICI HEADER CABECERA_______________________________________________________________ -->

				<table style="border-spacing:0;font-family:Arial;color:#333;Margin:0 auto;width:100%;max-width:600px" id="demo" cellspacing="0" cellpadding="0" border="0" align="center">
					<tbody>
						<tr>
							<td class=" noticia full-width-image" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;line-height:normal !important;text-align:center;">
								<a class="nodeco" style="text-decoration: none;" target="_blank" title=" " href="http://accio.gencat.cat?utm_source=AG&amp;utm_medium=${this.newsletter.numero}-header&amp;utm_campaign=enviament-agenda">
									<img alt="" style="border-width:0;width:100%;height:auto;margin:auto;" class="" src="http://enviaments.accio.gencat.cat/ACC1O/cat/docs/enviaments/assets/Agenda/capcalera_agenda20.jpg">
								</a>
							</td>
						</tr>
					</tbody>
				</table>
				<table style="border-spacing:0;font-family:Arial;color:#333;Margin:0 auto;width:100%;max-width:600px" id="demo" cellspacing="0" cellpadding="0" border="0" align="center">
					<tbody>
						<tr> 
							<td class="one-column" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;line-height:normal !important;">
								<table style="border-spacing:0;font-family:Arial,Helvetica,sans-serif;color:#333;" width="100%" cellspacing="0" cellpadding="0" border="0">
									<tbody>   

										<!-- ________ FIN HEADER CABECERA_______________________________________________________________ -->

										<!-- ________ INICI DESTAQUEM_______________________________________________________________ -->

										<!--	CAP Destaquem	-->
										<tr>
											<td style="padding:0;background:#f5f5f5;" height="20"></td>
										</tr>
										<tr>
											<td class="one-column" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;line-height:normal !important;height:28px;background:#ffefbf;color:#333333;font-size:20px;text-align:center;padding-left:25px;">
												Destaquem
											</td>
										</tr>

										<tr>
											<td style="padding:0;background:#f5f5f5;" height="20"></td>
										</tr>
										<!--	DESTACATS X2	-->				
										
		`;

		const destacats = `
			<tr class="row">
				<td style="padding:0;font-size:0;text-align:center;background:#f5f5f5;">
					<!--[if (gte mso 9)|(IE)]>
						<table width="100%" style="border-spacing:0;font-family: Arial, Helvetica, sans-serif;color:#333">
							<tr>
								<td width="50%" valign="top" style="padding:0;">
					<![endif]-->
					<div class="destacats" style="width:100%;max-width:300px;display:inline-block;vertical-align:top">
						<table style="border-spacing:0;font-family:   Arial, Helvetica, sans-serif;color:#333;text-align:center;width:100%;max-width:300px;display:inline-block;vertical-align:top" cellspacing="0" cellpadding="0" border="0">
							<tbody>
								<tr>
									<td style="padding-top:0;padding:0 10px;text-align:center;mso-table-lspace: 0pt !important;mso-table-rspace: 0pt !important;display: block !important;">
										<table style="border-width:1px;border-style:solid;border-color:#ddd;background-color:#ffffff;border-spacing:0;font-family: Arial, sans-serif;color:#333;width:100%" cellspacing="0" cellpadding="0" border="0">
											<tbody>
												<tr>
													<td style="padding:0;text-align:center;mso-table-lspace: 0pt !important;display: block !important;mso-table-rspace: 0pt !important;">
														<a data-utm-medium="img" href="${this.newsletter.destacats.destacat1.link}?utm_source=AG&amp;utm_medium=${this.newsletter.numero}-destacat_1_img&amp;utm_campaign=enviament-agenda"
															style="font-weight:700;text-decoration:none;font-size:12px;color:#000;mso-table-rspace: 0pt !important;" target="_blank" title="" data-utm="acte_02_img">
															<img alt="" src="http://enviaments.accio.gencat.cat/ACC1O/cat/docs/enviaments/img/agenda/${this.newsletter.numero}-destacat1.jpg" style="border-width:0;height:auto;width:100%; margin:0; padding:0;mso-table-rspace: 0pt !important;">
														</a>
													</td>
												</tr>
												<tr>
													<td style="font-size:5px;padding:0" height="10">&nbsp;</td>
												</tr>
												<tr>
													<td style="font-size:5px;padding:0" height="5">&nbsp;</td>
												</tr>
												<tr>
													<td style="padding:0;">
														<table style="border-spacing:0;font-family: Arial, sans-serif;color:#333" width="100%" cellspacing="0" cellpadding="0" border="0">
															<tbody>
																<tr>
																	<td style="padding:0;">
																		<table style="border-spacing:0;font-family:  Arial, sans-serif;color:#333" width="100%" cellspacing="0" cellpadding="0" border="0">
																			<tbody>
																				<tr>
																					<td style="padding:0;" width="14"></td>
																					<td style="padding:0;text-align:center;font-size:14px;color:#000" width="250" valign="top" height="50">
																						<a data-utm="acte_02_title" href="${this.newsletter.destacats.destacat1.link}?utm_source=AG&amp;utm_medium=${this.newsletter.numero}-destacat_1_titol&amp;utm_campaign=enviament-agenda"
																							style="text-decoration: none; font-weight: normal; font-size: 14px; color: rgb(192, 0, 0);" target="_blank" title="">
																							<span class="titolh3">
																								<strong>${this.newsletter.destacats.destacat1.titulo}</strong>
																							</span>
																						</a>
																					</td>
																					<td style="padding:0;" width="14"></td>
																				</tr>
																			</tbody>
																		</table>
																	</td>
																</tr>
															</tbody>
														</table>
													</td>
												</tr>
												<tr>
													<td style="font-size:5px;padding:0" height="10">&nbsp;</td>
												</tr>
												<tr>
													<td style="padding:0;text-align:center;font-size:14px;color:#333333">
														<img src="http://enviaments.accio.gencat.cat/ACC1O/cat/docs/enviaments/assets/Agenda/calendar-grey-18.png" style="border-width:0;height:16px"> &nbsp;
														<span class="data">${this.newsletter.destacats.destacat1.fecha}</span>
													</td>
												</tr>
												<tr>
													<td style="padding:0;text-align:center;font-size:14px">
														<img alt="" src="http://enviaments.accio.gencat.cat/ACC1O/cat/docs/enviaments/assets/Agenda/map-grey-18.png" style="border-width:0;height:16"> &nbsp; En línia
													</td>
												</tr>
												<tr>
													<td style="padding:0;" height="10"></td>
												</tr>
												<tr>
													<td style="padding:0;" width="278" height="20"></td>
												</tr>
											</tbody>
										</table>
									</td>
								</tr>
								<tr>
									<td style="padding:0;" height="20"></td>
								</tr>
							</tbody>
						</table>
					</div>
					<!--[if (gte mso 9)|(IE)]>
							</td>
						<td width="50%" valign="top" style="padding:0;">
						<![endif]-->
					<div class="destacats" style="width:100%;max-width:300px;display:inline-block;vertical-align:top">
						<table style="border-spacing:0;font-family: Arial, Helvetica, sans-serif;color:#333;text-align:center;width:100%;max-width:300px;display:inline-block;vertical-align:top" cellspacing="0" cellpadding="0" border="0">
							<tbody>
								<tr>
									<td style="padding-top:0;padding:0 10px;text-align:center;mso-table-lspace: 0pt !important;mso-table-rspace: 0pt !important;display: block !important;">
										<table style="border-width:1px;border-style:solid;border-color:#ddd;background-color:#ffffff;border-spacing:0;font-family: Arial, sans-serif;color:#333;width:100%" cellspacing="0" cellpadding="0" border="0">
											<tbody>
												<tr>
													<td style="padding:0;text-align:center;mso-table-lspace: 0pt !important;display: block !important;mso-table-rspace: 0pt !important;">
														<a data-utm-medium="img" href="${this.newsletter.destacats.destacat2.link}?utm_source=AG&amp;utm_medium=${this.newsletter.numero}-destacat_2_img&amp;utm_campaign=enviament-agenda" style="font-weight:700;text-decoration:none;font-size:12px;color:#000;mso-table-rspace: 0pt !important;"
															target="_blank" title="" data-utm="acte_02_img">
															<img alt="" src="http://enviaments.accio.gencat.cat/ACC1O/cat/docs/enviaments/img/agenda/${this.newsletter.numero}-destacat2.jpg" style="border-width:0;height:auto;width:100%; margin:0; padding:0;mso-table-rspace: 0pt !important;">
														</a>
													</td>
												</tr>
												<tr>
													<td style="font-size:5px;padding:0" height="10">&nbsp;</td>
												</tr>
												<tr>
													<td style="font-size:5px;padding:0" height="5">&nbsp;</td>
												</tr>
												<tr>
													<td style="padding:0;">
														<table style="border-spacing:0;font-family: Arial, sans-serif;color:#333" width="100%" cellspacing="0" cellpadding="0" border="0">
															<tbody>
																<tr>
																	<td style="padding:0;">
																		<table style="border-spacing:0;font-family:  Arial, sans-serif;color:#333" width="100%" cellspacing="0" cellpadding="0" border="0">
																			<tbody>
																				<tr>
																					<td style="padding:0;" width="14"></td>
																					<td style="padding:0;text-align:center;font-size:14px;color:#000" width="250" valign="top" height="50">
																						<a data-utm="acte_02_title" href="${this.newsletter.destacats.destacat2.link}?utm_source=AG&amp;utm_medium=${this.newsletter.numero}-destacat_2_titol&amp;utm_campaign=enviament-agenda" style="text-decoration: none; font-weight: normal; font-size: 14px; color: rgb(192, 0, 0);" target="_blank" title="">
																							<span class="titolh3"><strong>${this.newsletter.destacats.destacat2.titulo}</strong></span>
																						</a>
																					</td>
																					<td style="padding:0;" width="14"></td>
																				</tr>
																			</tbody>
																		</table>
																	</td>
																</tr>
															</tbody>
														</table>
													</td>
												</tr>
												<tr>
													<td style="font-size:5px;padding:0" height="10">&nbsp;</td>
												</tr>
												<tr>
													<td style="padding:0;text-align:center;font-size:14px;color:#333333">
														<img src="http://enviaments.accio.gencat.cat/ACC1O/cat/docs/enviaments/assets/Agenda/calendar-grey-18.png" style="border-width:0;height:16px"> &nbsp;
														<span class="data">${this.newsletter.destacats.destacat2.fecha}</span>
													</td>
												</tr>
												<tr>
													<td style="padding:0;text-align:center;font-size:14px">
														<img alt="" src="http://enviaments.accio.gencat.cat/ACC1O/cat/docs/enviaments/assets/Agenda/map-grey-18.png" style="border-width:0;height:16"> &nbsp; En línia
													</td>
												</tr>
												<tr>
													<td style="padding:0;" height="10"></td>
												</tr>
												<tr>
													<td style="padding:0;" width="278" height="20"></td>
												</tr>
											</tbody>
										</table>
									</td>
								</tr>
								<tr>
									<td style="padding:0;" height="20"></td>
								</tr>
							</tbody>
						</table>
					</div>
					<!--[if (gte mso 9)|(IE)]>
								</td>
							</tr>
					</table>
					<![endif]-->
				</td>
			</tr>

			<!-- ________ FIN DESTAQUEM_______________________________________________________________ -->
		
		`;

		const inici_propers = `

			<!-- ________ INICI PROPERS SEMINARIS _______________________________________________________________ -->

			<tr>
				<td style="padding:0;" height="20"></td>
			</tr>
			<tr>
				<td class="one-column" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;line-height:normal !important;">
					<table style="border-spacing:0;font-family:Arial,Helvetica,sans-serif;color:#333;" width="100%" cellspacing="0" cellpadding="0" border="0">
						<tbody>
							<tr>
								<td style="height:28px;background:#ffefbf;color:#333333;font-size:20px;text-align:center;">
									Propers seminaris
								</td>
							</tr>
						</tbody>
					</table>
				</td>
			</tr>
			<tr>
				<td style="padding:0;" height="20"></td>
			</tr>
			
		`;

		var propersSeminaris_ar:string[] = [];

		var propers_empieza_row = `
		<tr class="row">
			<td style="padding:0;font-size:0;text-align:center">
				<!--[if (gte mso 9)|(IE)]>
						<table width="100%" style="border-spacing:0;font-family:Arial;color:#333">
							<tr>
								<td width="50%" valign="top" style="padding:0;">
					<![endif]-->
		`;

		var propers_outlook_medio = `
			<!--[if (gte mso 9)|(IE)]>
				</td>
				<td width="50%" valign="top" style="padding:0;">
			<![endif]-->
		`;
		var propers_outlook_salto_linea = `
			<!--[if (gte mso 9)|(IE)]>
						</td>
					</tr>
				</table>
			<![endif]-->
				</td>
			</tr>
			<tr class="row">
				<td style="padding:0;font-size:0;text-align:center">
				<!--[if (gte mso 9)|(IE)]>
					<table width="100%" style="border-spacing:0;font-family:Arial;color:#333">
						<tr>
							<td width="50%" valign="top" style="padding:0;">
				<![endif]-->
		`;
		var propers_fin = `
					<!--[if (gte mso 9)|(IE)]>
									</td>
								</tr>
						</table>
					<![endif]-->
				</td>
			</tr>

			<!-- ________ FIN PROPERS SEMINARIS _______________________________________________________________ -->

		`;

		propersSeminaris_ar.push(inici_propers);
		propersSeminaris_ar.push(propers_empieza_row);

		for (let index = 0; index < this.newsletter.propersSeminaris.length; index++) {

			var propers_item = '';
			
			propers_item = `
				<div class="Obre" style="width:100%;max-width:300px;display:inline-block;vertical-align:top">
					<table style="border-spacing:0;font-family:Arial;color:#333;text-align:center;width:100%;max-width:300px;display:inline-block;vertical-align:top" cellspacing="0" cellpadding="0" border="0">
						<tbody>
							<tr>
								<td style="padding-top:0;padding:0 10px;text-align:center">
									<table style="border-width:1px;border-style:solid;border-color:#ddd;background-color:#fcfcfc;border-spacing:0;font-family:Arial;color:#333;width:100%" cellspacing="0" cellpadding="0" border="0">
										<tbody>
											<tr>
												<td style="font-size:5px;padding:0" height="10">&nbsp;</td>
											</tr>
											<tr>
												<td class="titol" style="padding: 0px; text-align: center; font-size: 14px; color: #000000;">
													${this.newsletter.propersSeminaris[index].especialidad}
												</td>
											</tr>
											<tr>
												<td style="font-size:5px;padding:0" height="5">&nbsp;</td>
											</tr>
											<tr>
												<td style="padding:0;">
													<table style="border-spacing:0;font-family:Arial;color:#333" width="100%" cellspacing="0" cellpadding="0" border="0">
														<tbody>
															<tr>
																<td style="padding:0;" width="14"></td>
																<td style="padding:0;font-weight:700;text-align:center;font-size:14px;color:#000" width="250" valign="top" height="50">
																	<a href="${this.newsletter.propersSeminaris[index].link}?utm_source=AG&amp;utm_medium=${this.newsletter.numero}-Properes_${index + 1}&amp;utm_campaign=enviament-agenda" style="text-decoration: none; font-weight: normal; font-size: 14px; color: rgb(192, 0, 0);" target="_blank" title="">
																		<span class="titolh3">
																			<strong>${this.newsletter.propersSeminaris[index].titulo}</strong>
																		</span>
																	</a>
																</td>
																<td style="padding:0;" width="14"></td>
															</tr>
														</tbody>
													</table>
												</td>
											</tr>
											<tr>
												<td style="font-size:5px;padding:0" height="10">&nbsp;</td>
											</tr>
											<tr>
												<td style="padding:0;font-weight:700;text-align:center;font-size:12px;color:#066">
													<img src="http://enviaments.accio.gencat.cat/ACC1O/cat/docs/enviaments/assets/Agenda/calendar-grey-18.png" style="border-width:0;height:auto" width="14"> &nbsp;
													<span class="data" style="font-weight: normal; font-size: 14px; color: rgb(0, 0, 0);">
														${this.newsletter.propersSeminaris[index].fecha}
													</span>
												</td>
											</tr>
											<tr>
												<td style="padding:0;text-align:center;font-size:12px">
													<img src="http://enviaments.accio.gencat.cat/ACC1O/cat/docs/enviaments/assets/Agenda/map-grey-18.png" style="border-width:0;height:auto" width="14">
													<span class="lloc" style="font-weight: normal; font-size: 14px; color: rgb(0, 0, 0); text-align: center;">
														En línia
													</span>
												</td>
											</tr>
											<tr>
												<td style="padding:0;" width="278" height="30"></td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
							<tr>
								<td style="padding:0;" height="20"></td>
							</tr>
						</tbody>
					</table>
				</div>
			`;

			if (index%2 === 0) {
				propersSeminaris_ar.push(propers_item);
				propersSeminaris_ar.push(propers_outlook_medio);
			}else if (index%2 !== 0 && index !== this.newsletter.propersSeminaris.length - 1){
				propersSeminaris_ar.push(propers_item);
				propersSeminaris_ar.push(propers_outlook_salto_linea);
			}else if (index%2 !== 0 && index === this.newsletter.propersSeminaris.length - 1){
				propersSeminaris_ar.push(propers_item);
				propersSeminaris_ar.push(propers_fin);
			}
			
		}

		var propersSeminaris = propersSeminaris_ar.join('');

		// _______________

		var sacaba_ar:string[] = [];
		var sacaba:string = '';
		
		if (this.newsletter.sacaba.length > 0) {
			
			var inici_sacaba = `

				<!-- ________ INICI SACABA TERMINI _______________________________________________________________ -->

				<tr>
					<td style="padding:0;" height="20"></td>
				</tr>
				<tr>
					<td class="one-column" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;line-height:normal !important;">
						<table style="border-spacing:0;font-family:Arial,Helvetica,sans-serif;color:#333;" width="100%" cellspacing="0" cellpadding="0" border="0">
							<tbody>
								<tr>
									<td style="height:28px;background:#ffefbf;color:#333333;font-size:20px;text-align:center;">
										S’acaba el termini per inscriure’t
									</td>
								</tr>
							</tbody>
						</table>
					</td>
				</tr>
				<tr>
					<td style="padding:0;" height="20"></td>
				</tr>
				
			`;

			sacaba_ar.push(inici_sacaba);

			var sacaba_empieza_row = `
				<tr class="row">
					<td style="padding:0;font-size:0;text-align:center">
						<!--[if (gte mso 9)|(IE)]>
							<table width="100%" style="border-spacing:0;font-family:Arial;color:#333">
								<tr>
									<td width="50%" valign="top" style="padding:0;">
						<![endif]-->
			`;

			sacaba_ar.push(sacaba_empieza_row);

			var sacaba_outlook_medio = `
				<!--[if (gte mso 9)|(IE)]>
					</td>
					<td width="50%" valign="top" style="padding:0;">
				<![endif]-->
			`;

			var sacaba_outlook_salto_linea = `
					<!--[if (gte mso 9)|(IE)]>
								</td>
							</tr>
						</table>
					<![endif]-->
					</td>
				</tr>
				<tr class="row">
					<td style="padding:0;font-size:0;text-align:center">
						<!--[if (gte mso 9)|(IE)]>
							<table width="100%" style="border-spacing:0;font-family:Arial;color:#333">
								<tr>
									<td width="50%" valign="top" style="padding:0;">
						<![endif]-->
			`;

			var sacaba_fin = `
					<!--[if (gte mso 9)|(IE)]>
									</td>
								</tr>
						</table>
					<![endif]-->
				</td>
			</tr>

			<!-- ________ FIN SACABA TERMINIS _______________________________________________________________ -->

			`;

			for (let index = 0; index < this.newsletter.sacaba.length; index++) {

				var sacaba_item = '';
				
				sacaba_item = `
					<div class="Obre" style="width:100%;max-width:300px;display:inline-block;vertical-align:top">
						<table style="border-spacing:0;font-family:Arial;color:#333;text-align:center;width:100%;max-width:300px;display:inline-block;vertical-align:top" cellspacing="0" cellpadding="0" border="0">
							<tbody>
								<tr>
									<td style="padding-top:0;padding:0 10px;text-align:center">
										<table style="border-width:1px;border-style:solid;border-color:#ddd;background-color:#fcfcfc;border-spacing:0;font-family:Arial;color:#333;width:100%" cellspacing="0" cellpadding="0" border="0">
											<tbody>
												<tr>
													<td style="font-size:5px;padding:0" height="10">&nbsp;</td>
												</tr>
												<tr>
													<td class="titol" style="padding: 0px; text-align: center; font-size: 14px; color: #000000;">
														${this.newsletter.sacaba[index].especialidad}
													</td>
												</tr>
												<tr>
													<td style="font-size:5px;padding:0" height="5">&nbsp;</td>
												</tr>
												<tr>
													<td style="padding:0;">
														<table style="border-spacing:0;font-family:Arial;color:#333" width="100%" cellspacing="0" cellpadding="0" border="0">
															<tbody>
																<tr>
																	<td style="padding:0;" width="14"></td>
																	<td style="padding:0;font-weight:700;text-align:center;font-size:14px;color:#000" width="250" valign="top" height="50">
																		<a href="${this.newsletter.sacaba[index].link}?utm_source=AG&amp;utm_medium=${this.newsletter.numero}-Properes_${index + 1}&amp;utm_campaign=enviament-agenda" style="text-decoration: none; font-weight: normal; font-size: 14px; color: rgb(192, 0, 0);" target="_blank" title="">
																			<span class="titolh3">
																				<strong>${this.newsletter.sacaba[index].titulo}</strong>
																			</span>
																		</a>
																	</td>
																	<td style="padding:0;" width="14"></td>
																</tr>
															</tbody>
														</table>
													</td>
												</tr>
												<tr>
													<td style="font-size:5px;padding:0" height="10">&nbsp;</td>
												</tr>
												<tr>
													<td style="padding:0;font-weight:700;text-align:center;font-size:12px;color:#066">
														<img src="http://enviaments.accio.gencat.cat/ACC1O/cat/docs/enviaments/assets/Agenda/calendar-grey-18.png" style="border-width:0;height:auto" width="14"> &nbsp;
														<span class="data" style="font-weight: normal; font-size: 14px; color: rgb(0, 0, 0);">
															${this.newsletter.sacaba[index].fecha}
														</span>
													</td>
												</tr>
												<tr>
													<td style="padding:0;text-align:center;font-size:12px">
														<img src="http://enviaments.accio.gencat.cat/ACC1O/cat/docs/enviaments/assets/Agenda/map-grey-18.png" style="border-width:0;height:auto" width="14">
														<span class="lloc" style="font-weight: normal; font-size: 14px; color: rgb(0, 0, 0); text-align: center;">
															En línia
														</span>
													</td>
												</tr>
												<tr>
													<td style="padding:0;" width="278" height="30"></td>
												</tr>
											</tbody>
										</table>
									</td>
								</tr>
								<tr>
									<td style="padding:0;" height="20"></td>
								</tr>
							</tbody>
						</table>
					</div>
				`;
	
				if (index%2 === 0) {
					sacaba_ar.push(sacaba_item);
					sacaba_ar.push(sacaba_outlook_medio);
				}else if (index%2 !== 0 && index !== this.newsletter.sacaba.length - 1){
					sacaba_ar.push(sacaba_item);
					sacaba_ar.push(sacaba_outlook_salto_linea);
				}else if (index%2 !== 0 && index === this.newsletter.sacaba.length - 1){
					sacaba_ar.push(sacaba_item);
					sacaba_ar.push(sacaba_fin);
				}
				
			}

			sacaba = sacaba_ar.join('');
			
		}

		// _______________

		var obert_ar:string[] = [];
		var obert:string = '';
		
		if (this.newsletter.obert.length > 0) {
			
			var inici_obert = `

				<!-- ________ INICI OBERT INSCRIPCIONS _______________________________________________________________ -->

				<tr>
					<td style="padding:0;" height="20"></td>
				</tr>
				<tr>
					<td class="one-column" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;line-height:normal !important;">
						<table style="border-spacing:0;font-family:Arial,Helvetica,sans-serif;color:#333;" width="100%" cellspacing="0" cellpadding="0" border="0">
							<tbody>
								<tr>
									<td style="height:28px;background:#ffefbf;color:#333333;font-size:20px;text-align:center;">
										Ja s'han obert les inscripcions
									</td>
								</tr>
							</tbody>
						</table>
					</td>
				</tr>
				<tr>
					<td style="padding:0;" height="20"></td>
				</tr>
				
			`;

			obert_ar.push(inici_obert);

			var obert_empieza_row = `
				<tr class="row">
					<td style="padding:0;font-size:0;text-align:center">
						<!--[if (gte mso 9)|(IE)]>
							<table width="100%" style="border-spacing:0;font-family:Arial;color:#333">
								<tr>
									<td width="50%" valign="top" style="padding:0;">
						<![endif]-->
			`;

			obert_ar.push(obert_empieza_row);

			var obert_outlook_medio = `
				<!--[if (gte mso 9)|(IE)]>
					</td>
					<td width="50%" valign="top" style="padding:0;">
				<![endif]-->
			`;

			var obert_outlook_salto_linea = `
					<!--[if (gte mso 9)|(IE)]>
								</td>
							</tr>
						</table>
					<![endif]-->
					</td>
				</tr>
				<tr class="row">
					<td style="padding:0;font-size:0;text-align:center">
						<!--[if (gte mso 9)|(IE)]>
							<table width="100%" style="border-spacing:0;font-family:Arial;color:#333">
								<tr>
									<td width="50%" valign="top" style="padding:0;">
						<![endif]-->
			`;

			var obert_fin = `
					<!--[if (gte mso 9)|(IE)]>
									</td>
								</tr>
						</table>
					<![endif]-->
				</td>
			</tr>

			<!-- ________ FIN OBERT INSCRIPCION _______________________________________________________________ -->

			`;

			for (let index = 0; index < this.newsletter.obert.length; index++) {

				var obert_item = '';
				
				obert_item = `
					<div class="Obre" style="width:100%;max-width:300px;display:inline-block;vertical-align:top">
						<table style="border-spacing:0;font-family:Arial;color:#333;text-align:center;width:100%;max-width:300px;display:inline-block;vertical-align:top" cellspacing="0" cellpadding="0" border="0">
							<tbody>
								<tr>
									<td style="padding-top:0;padding:0 10px;text-align:center">
										<table style="border-width:1px;border-style:solid;border-color:#ddd;background-color:#fcfcfc;border-spacing:0;font-family:Arial;color:#333;width:100%" cellspacing="0" cellpadding="0" border="0">
											<tbody>
												<tr>
													<td style="font-size:5px;padding:0" height="10">&nbsp;</td>
												</tr>
												<tr>
													<td class="titol" style="padding: 0px; text-align: center; font-size: 14px; color: #000000;">
														${this.newsletter.obert[index].especialidad}
													</td>
												</tr>
												<tr>
													<td style="font-size:5px;padding:0" height="5">&nbsp;</td>
												</tr>
												<tr>
													<td style="padding:0;">
														<table style="border-spacing:0;font-family:Arial;color:#333" width="100%" cellspacing="0" cellpadding="0" border="0">
															<tbody>
																<tr>
																	<td style="padding:0;" width="14"></td>
																	<td style="padding:0;font-weight:700;text-align:center;font-size:14px;color:#000" width="250" valign="top" height="50">
																		<a href="${this.newsletter.obert[index].link}?utm_source=AG&amp;utm_medium=${this.newsletter.numero}-Properes_${index + 1}&amp;utm_campaign=enviament-agenda" style="text-decoration: none; font-weight: normal; font-size: 14px; color: rgb(192, 0, 0);" target="_blank" title="">
																			<span class="titolh3">
																				<strong>${this.newsletter.obert[index].titulo}</strong>
																			</span>
																		</a>
																	</td>
																	<td style="padding:0;" width="14"></td>
																</tr>
															</tbody>
														</table>
													</td>
												</tr>
												<tr>
													<td style="font-size:5px;padding:0" height="10">&nbsp;</td>
												</tr>
												<tr>
													<td style="padding:0;font-weight:700;text-align:center;font-size:12px;color:#066">
														<img src="http://enviaments.accio.gencat.cat/ACC1O/cat/docs/enviaments/assets/Agenda/calendar-grey-18.png" style="border-width:0;height:auto" width="14"> &nbsp;
														<span class="data" style="font-weight: normal; font-size: 14px; color: rgb(0, 0, 0);">
															${this.newsletter.obert[index].fecha}
														</span>
													</td>
												</tr>
												<tr>
													<td style="padding:0;text-align:center;font-size:12px">
														<img src="http://enviaments.accio.gencat.cat/ACC1O/cat/docs/enviaments/assets/Agenda/map-grey-18.png" style="border-width:0;height:auto" width="14">
														<span class="lloc" style="font-weight: normal; font-size: 14px; color: rgb(0, 0, 0); text-align: center;">
															En línia
														</span>
													</td>
												</tr>
												<tr>
													<td style="padding:0;" width="278" height="30"></td>
												</tr>
											</tbody>
										</table>
									</td>
								</tr>
								<tr>
									<td style="padding:0;" height="20"></td>
								</tr>
							</tbody>
						</table>
					</div>
				`;
	
				if (index%2 === 0) {
					obert_ar.push(obert_item);
					obert_ar.push(obert_outlook_medio);
				}else if (index%2 !== 0 && index !== this.newsletter.obert.length - 1){
					obert_ar.push(obert_item);
					obert_ar.push(obert_outlook_salto_linea);
				}else if (index%2 !== 0 && index === this.newsletter.obert.length - 1){
					obert_ar.push(obert_item);
					obert_ar.push(obert_fin);
				}
				
			}

			obert = obert_ar.join('');
			
		}
		

		const footer = `
			<!-- ________ INICI FOOTER _________________________________________________________________________ -->

			<!-- SEPARATOR LINE -->
			<tr class="estructura">
				<td class="one-column" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;line-height:19px !important;">
					<table style="border-spacing:0;font-family:Arial,Helvetica,sans-serif;color:#333;" width="100%">
						<tbody>
							<tr class="estructura">
								<td class="separator1 bg_grey" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0; background-color:#999;font-size:1px;line-height:1px !important;" height="1">&nbsp;</td>
							</tr>
						</tbody>
					</table>
				</td>
			</tr>
			<!-- SEPARATOR -->
			<tr class="estructura">
				<td style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;line-height:19px !important;" height="20">&nbsp;</td>
			</tr>
			<!-- TWO COLUMN LAYOUT -->
			<tr class="estructura">
				<td style="padding:0;font-size:0;text-align:center;background:white;" class="footer">
					<!--[if (gte mso 9)|(IE)]>
						<table width="100%" style="border-spacing:0;font-family:Arial;color:#333333;">
							<tr>
								<td width="50%" valign="top" style="padding:0;">
					<![endif]-->
					<div style="text-align:center;vertical-align:top;width:100%;max-width:300px;display:inline-block;">
						<table style="border-spacing:0;font-family:Arial,Helvetica,sans-serif;color:#333333;" width="100%">
							<tbody>
								<tr class="estructura">
									<td style="line-height:19px !important;padding-top:0;padding-bottom:0;padding-right:10px;padding-left:10px;">
										<table style="border-spacing:0;font-family:Arial,Helvetica,sans-serif;color:#333333;width:100%;">
											<!-- SEPARATOR -->
											<tbody>
												<tr class="estructura">
													<td style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;line-height:19px !important;font-weight:700;text-align:left;font-size:12px;color:#999999;">
														Generalitat de Catalunya
													</td>
												</tr>
												<tr class="estructura">
													<td style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;line-height:19px!important;text-align:left;font-size:11px;color:#999999;">Ag&egrave;ncia per la competitivitat de l'empresa -
														<span translate="no">ACCI&Oacute;</span>
													</td>
												</tr>
												<!-- SEPARATOR -->
												<tr>
													<td style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;line-height:5px !important;" height="5">&nbsp;
													</td>
												</tr>
												<tr>
													<td style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;line-height:5x !important;" height="5">
														<table width="100%" border="0" style="max-width:300px;">
															<tbody>
																<tr>
																	<td class="text x11 grey al_left" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;line-height:19px !important;text-align:left;font-size:11px;color:#999;">
																		Subscriu-te als nostres butlletins
																	</td>
																	<td class="text x11 grey al_left" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;line-height:19px !important;text-align:left;font-size:11px;color:#999;">
																		<a href="https://www.accio.gencat.cat/ca/accio/premsa-comunicacio/butlletins/accio-informa?utm_source=AG&amp;utm_medium=${this.newsletter.numero}-subscripcio-accioinforma&amp;utm_campaign=enviament-agenda"
																			target="_blank" title="ACCI&Oacute;Informa">
																			<img src="http://enviaments.accio.gencat.cat/ACC1O/cat/docs/enviaments/img/ico-footer-accioinforma.png" alt="ACCI&Oacute; Informa">
																		</a>
																	</td>
																	<td class="text x11 grey al_left" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;line-height:19px !important;text-align:left;font-size:11px;color:#999;">
																		<a href="https://www.accio.gencat.cat/ca/accio/premsa-comunicacio/butlletins/agenda-accio?utm_source=AG&amp;utm_medium=${this.newsletter.numero}-subscripcio-agenda&amp;utm_campaign=enviament-agenda"
																			target="_blank" title="Agenda ACCI&Oacute;">
																			<img src="http://enviaments.accio.gencat.cat/ACC1O/cat/docs/enviaments/img/ico-footer-agenda.png" alt="Agenda ACCI&Oacute;">
																		</a>
																	</td>
																	<td class="text x11 grey al_left" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;line-height:19px !important;text-align:left;font-size:11px;color:#999;">
																		<a target="_blank" title="Butlletí d'Innovació" href="https://www.accio.gencat.cat/ca/accio/premsa-comunicacio/butlletins/radar-accio?utm_source=AG&amp;utm_medium=${this.newsletter.numero}-subscripcio-innovacio&amp;utm_campaign=enviament-agenda">
																			<img alt="Butlletí d'Innovació" src="http://enviaments.accio.gencat.cat/ACC1O/cat/docs/enviaments/img/ico-footer-radar.png">
																		</a>
																	</td>
																	<td class="text x11 grey al_left" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;line-height:19px !important;text-align:left;font-size:11px;color:#999;">
																		<a href="https://www.accio.gencat.cat/ca/accio/premsa-comunicacio/butlletins/catalonia-in-business?utm_source=AG&amp;utm_medium=${this.newsletter.numero}-subscripcio-catalonia&amp;utm_campaign=enviament-agenda"
																			target="_blank" title="Catalonia in Business">
																			<img src="http://enviaments.accio.gencat.cat/ACC1O/cat/docs/enviaments/img/ico-footer-catalonia.png" alt="Catalonia in Business">
																		</a>
																	</td>
																</tr>
															</tbody>
														</table>
													</td>
												</tr>
												<tr>
													<td style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;line-height:5x !important;" height="5">&nbsp;</td>
												</tr>

												<!-- _ _ _ _ _ _ INICI RECOMANA _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ -->

												<tr class="estructura">
													<td style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;line-height:19px !important;text-align:left;font-size:11px;color:#999999;">
														<a href="mailto:?Subject=Vull%20compartir%20amb%20tu%20aquest%20contingut&Body=Consulta%20l%27Agenda%20destacada%20amb%20els%20seminaris%20web%20d%27aquesta%20setmana%20https%3a%2f%2f${this.newsletter.enlace_bit}" title="" target="_blank" style="text-decoration: none; font-size: 11px; color: rgb(153, 153, 153);"
															id="mail-link" class="notUtm">
															<span style="line-height:19px !important;display:inline-block;vertical-align:middle;">
																<img src="http://enviaments.accio.gencat.cat/ACC1O/cat/docs/enviaments/assets/Actes/footer_recomana.png" alt="" style="border-width:0;">&nbsp;&nbsp;
															</span>Recomana
														</a>
													</td>
												</tr>

												<!-- _ _ _ _ _ _ FI RECOMANA _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ -->

												<tr class="estructura">
													<td style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;line-height:19px !important;text-align:left;font-size:11px;color:#999999;">
														<a href="mailto:dades.accio@gencat.cat?Subject=Vull%20deixar%20de%20rebre%20tots%20els%20correus%20d%27ACCI%c3%93.%20Adreça:%20[email]" target="_blank" style="text-decoration: none; font-size: 11px; color: rgb(153, 153, 153);" id="baixa-link" class="notUtm">
															<span style="line-height:19px !important;display:inline-block;vertical-align:middle;">
																<img src="http://enviaments.accio.gencat.cat/ACC1O/cat/docs/enviaments/assets/Actes/footer_norebremes.png" alt="" style="border-width:0;">&nbsp;&nbsp;
															</span> Vull deixar de rebre tots<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;correus comercials d'
															<span translate="no">
																ACCIÓ
															</span>
														</a>
													</td>
												</tr>
												<!-- SEPARATOR -->
												<tr class="estructura">
													<td style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;line-height:19px !important;text-align:left;font-size:11px;color:#999999;">
														<a href="mailto:dades.accio@gencat.cat?Subject=Vull%20modificar%20les%20meves%20dades&amp;Body=Vull%20modificar%20les%20meves%20dades" title="" target="_blank" style="text-decoration: none; font-size: 11px; color: rgb(153, 153, 153);" id="mail-link" class="notUtm">
															<span style="line-height:19px !important;display:inline-block;vertical-align:middle;">
																<img src="http://enviaments.accio.gencat.cat/ACC1O/cat/docs/enviaments/assets/Actes/footer_mail.png" alt="" style="border-width:0;">&nbsp;&nbsp;
															</span> Vull modificar les meves dades
														</a>
													</td>
												</tr>
												<!-- SEPARATOR -->
												<tr class="estructura">
													<td style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;line-height:19px !important;text-align:left;font-size:11px;color:#999999;">
														<a data-linkname="Footer : Avis_legal" href="http://www.accio.gencat.cat/ca/avis-legal?utm_source=AG&amp;utm_medium=${this.newsletter.numero}-legal&amp;utm_campaign=enviament-agenda" target="_blank"
															style="text-decoration:none; font-size: 11px; color: rgb(153, 153, 153);">
															<span style="line-height:19px !important;display:inline-block;vertical-align:middle;">
																<img src="http://enviaments.accio.gencat.cat/ACC1O/cat/docs/enviaments/assets/Actes/footer_informacio.png" alt="" style="border-width:0;">&nbsp;&nbsp;
															</span> Informaci&oacute; legal
														</a>
													</td>
												</tr>
												<!-- SEPARATOR -->
												<tr class="estructura">
													<td style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;line-height:19px !important;" height="20">&nbsp;</td>
												</tr>
											</tbody>
										</table>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<!--[if (gte mso 9)|(IE)]>
						</td>
						<td width="50%" valign="top" style="padding:0;">
					<![end if]-->
					<div style="text-align:center;width:100%;max-width:300px;display:inline-block;vertical-align:top">
						<table style="border-spacing:0;font-family:Arial;color:#333333;" width="100%">
							<tbody>
								<tr class="estructura">
									<td style="padding:0 10px">
										<table style="border-spacing:0;font-family:Arial;color:#333333;width:100%">
											<tbody>
												<tr class="estructura">
													<td style="padding:0;text-align:right">
														<table style="border-spacing:0;font-family:Arial;color:#333333;" width="100%">
															<tbody>
																<tr class="estructura">
																	<td style="padding:0;text-align:right;">
																		<a data-linkname="Footer : footer_Accio" href="http://accio.gencat.cat?utm_source=AG&amp;utm_medium=${this.newsletter.numero}-footer-accio&amp;utm_campaign=enviament-agenda" title="ACCIÓ" target="_blank"
																			style="color: rgb(153, 153, 153); text-decoration: none;">
																			<img src="http://enviaments.accio.gencat.cat/ACC1O/cat/docs/enviaments/assets/Actes/footer_accio.png" alt="ACCIÓ" style="border-width:0;height:auto">
																		</a>
																	</td>
																	<td style="padding:0;text-align:right;">
																		<a data-linkname="Footer : footer_Gencat" href="http://www.gencat.cat?utm_source=AG&amp;utm_medium=${this.newsletter.numero}-footer-generalitat&amp;utm_campaign=enviament-agenda" title=" Generalitat de Catalunya"
																			target="_blank" style="color: rgb(153, 153, 153); text-decoration: none;">
																			<img src="http://enviaments.accio.gencat.cat/ACC1O/cat/docs/enviaments/assets/Actes/footer_gencat.png" alt="Generalitat  de Catalunya" style="border-width:0;height:auto">
																		</a>
																	</td>
																</tr>
															</tbody>
														</table>
													</td>
												</tr>
												<tr class="estructura">
													<td style="padding:0;" height="5"></td>
												</tr>
												<tr class="estructura">
													<td style="padding:0;text-align:right">
														<a data-linkname="Footer : footer_EEN" href="http://www.een.cat?utm_source=AG&amp;utm_medium=${this.newsletter.numero}-footer-een&amp;utm_campaign=enviament-agenda" target="_blank" style="color: rgb(153, 153, 153); text-decoration: none;">
															<img src="http://enviaments.accio.gencat.cat/ACC1O/cat/docs/enviaments/assets/Actes/footer_een.png" alt="Enterprise Europe Network" style="border-width:0;height:auto">
														</a>
														<a data-linkname="Footer : footer_EC" href="http://ec.europa.eu/index_en.htm" target="_blank" style="color: rgb(153, 153, 153); text-decoration: none;">
															<img src="http://enviaments.accio.gencat.cat/ACC1O/cat/docs/enviaments/assets/Actes/footer_ce.png" alt="European Commission" style="border-width:0;height:auto">
														</a>
													</td>
												</tr>
												<tr class="estructura">
													<td style="padding:0;" height="20"></td>
												</tr>
											</tbody>
										</table>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<!--[if (gte mso 9)|(IE)]>
								</td>
							</tr>
						</table>    
					<![endif]-->
				</td>
			</tr>
			<tr class="estructura">
				<td class="inner contents x14 bold al_left contenido" style="line-height: 19px !important; width: 100%; padding: 0px 10px 0px 0px; font-weight: normal; text-align: left; font-size: 9px; font-family: Arial, Helvetica, sans-serif; color: rgb(153, 153, 153);"
					id="clausulaLegal">
					<p style="line-height: 19px !important; width: 100%; padding: 0px 10px 0px 0px; font-weight: normal; text-align: left; font-size: 9px; font-family: Arial, Helvetica, sans-serif; color: rgb(153, 153, 153); position: relative;" id="10038">
						La normativa aplicable autoritza la nostra entitat, l'Ag&egrave;ncia per a la Competitivitat de l'Empresa (d'ara endavant, “
						<span translate="no">ACCI&Oacute;</span>”), amb domicili al Passeig de Gr&agrave;cia, 129, CP 08008, Barcelona, a remetre per mitjans electr&ograve;nics informaci&oacute; i comunicacions comercials amb la finalitat de mantenir-lo
						informat sobre activitats i serveis d'<span translate="no">ACCI&Oacute;</span> d'id&egrave;ntica o similar naturalesa respecte dels que vost&egrave; ha mostrat inter&egrave;s, participat o contractat amb la nostra entitat.
						Si vost&egrave; no vol rebre m&eacute;s comunicacions de la nostra organitzaci&oacute; pot exercir els seus drets d'acc&eacute;s, rectificaci&oacute;, supressi&oacute;, portabilitat, limitaci&oacute; i/o oposici&oacute;
						al tractament, a trav&eacute;s de l'adre&ccedil;a de correu electr&ograve;nic
						<a href="mailto:dades.accio@gencat.cat" style="font-size: 9px; font-family: Arial, Helvetica, sans-serif; color:#c00000;">
							dades.accio@gencat.cat
						</a> o de l'adre&ccedil;a postal indicada anteriorment.
					</p>
				</td>
			</tr>
			</tbody>
			</table>
			<!--[if (gte mso 9)|(IE)]>
					</td>
				</tr>   
			</table>
			<![endif]-->
			</div>
			</center>
			</body>
			</html>
		`;

		this.html.emit(part_header + destacats +  propersSeminaris + sacaba + obert + footer);
			
		
}

	

	




}
