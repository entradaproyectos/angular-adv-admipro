import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Newsletter } from 'src/app/models/newsletter.model';



@Component({
	selector: 'app-rec',
	templateUrl: './rec.component.html',
	styles: [
	]
})
export class RecComponent implements OnInit {

	@Input() newsletter:Newsletter = null;
	@Input() guardar:boolean = false;

	@Output() html: EventEmitter<string> = new EventEmitter();

	// bitly_sin_h:string = '';

	constructor() { }

	ngOnInit(): void {
	
	}

	async emitirHtml(){

			// this.bitly_sin_h = this.newsletter.enlace_princ_mini;

			if (this.newsletter.utmCampaing === 'FIN' || this.newsletter.utmCampaing === 'ES-FIN') {
				this.html.emit(`
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta property="og:image" content="http://enviaments.accio.gencat.cat/ACC1O/cat/docs/enviaments/assets/Actes/ACCIO_logo_header.jpg">
		<title>${this.newsletter.titulo}</title>
		<meta property="og:url" content="http://enviaments.accio.gencat.cat/ACC1O/cat/docs/enviaments/20${this.newsletter.fecha_acto_anyo}/REC/${this.newsletter.tipo}-${this.newsletter.fecha_acto_anyo}-${this.newsletter.numero}-${this.newsletter.utmCampaing}_${this.newsletter.titulo_amigable}.html">
		<meta name="description" [content]="${this.newsletter.preheader}">
		<meta name="og:title" [content]="${this.newsletter.titulo}">
	</head>
	
	
	<body>
		<center class="wrapper clean" style="width:100%;table-layout:fixed;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;">
			<div class="webkit" style="max-width:600px;" id="template" data-name="entrada">
				<!-- BASE TABLE -->
				<!--[if (gte mso 9)|(IE)]>
		<table width="600" align="center" cellpadding="0" cellspacing="0" border="0" style="border-spacing:0;font-family:Arial,Helvetica,sans-serif;color:#333;" >
				<tr>
					<td style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;line-height:19px !important;">
						<![endif]-->
				<table class="outer" style="border-spacing:0;font-family:Arial,Helvetica,sans-serif;color:#333;Margin:0 auto;width:100%;max-width:600px;" align="center">
					<!-- ONE COLUMN LAYOUT -->
					<!-- SEPARATOR -->
					<tbody>
						<tr class="estructura">
							<td style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;line-height:19px !important;" height="5">&nbsp;</td>
						</tr>
						<tr class="estructura">
							<td id="preheader" style="display:none !important;visibility:hidden;mso-hide:all;font-size:1px;color:#ffffff;line-height:1px;max-height:0px;max-width:0px;opacity:0;overflow:hidden;" width="0" height="0">
								${this.newsletter.preheader}
							</td>
						</tr>
						<tr class="estructura">
							<td class="one-column" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;line-height:19px !important;">
								<table style="border-spacing:0;font-family:Arial,Helvetica,sans-serif;color:#333333;" width="100%">
									<tbody>
										<tr class="estructura">
											<td style="font-family:Arial, Helvetica, sans-serif;font-size:11px;color:#000000;text-align:center;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;line-height:19px !important;">
												No veus b&eacute; aquest correu?
												<a data-linkname="Header : web_view" href="http://enviaments.accio.gencat.cat/ACC1O/cat/docs/enviaments/20${this.newsletter.fecha_acto_anyo}/REC/${this.newsletter.tipo}-${this.newsletter.fecha_acto_anyo}-${this.newsletter.numero}-${this.newsletter.utmCampaing}_${this.newsletter.titulo_amigable}.html?utm_source=${this.newsletter.tipo}&amp;utm_medium=${this.newsletter.fecha_acto_anyo}-${this.newsletter.numero}-webview&amp;utm_campaign=${this.newsletter.utmCampaing}"
													target="_blank" title="Veure el correu en format web" style="color:#c00000;text-decoration:none;" id="webview" class="notUtm">
													Fes clic aqu&iacute;
												</a>
											</td>
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
							<td class="two-column al_center" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;line-height:19px !important;font-size:0;text-align:center;">
								<!--[if (gte mso 9)|(IE)]>
								<table width="100%" style="border-spacing:0;font-family:Arial,Helvetica,sans-serif;color:#333;" >
									<tr>
										<td width="50%" valign="bottom" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;line-height:19px !important;" >
								<![endif]-->
	
								<!-- ________ INICI HEADER LOGO ___________________________________________________________________________________________________________________________ -->
	
								<div class="column al_center vbot" style="text-align:center;vertical-align:bottom;width:100%;max-width:300px;display:inline-block;">
									<table style="border-spacing:0;font-family:Arial,Helvetica,sans-serif;color:#333;" width="100%">
										<tbody>
											<tr class="estructura">
												<td class="inner" style="line-height:19px !important;padding-top:0;padding-bottom:0;padding-right:10px;padding-left:10px;">
													<table class="contents" style="border-spacing:0;font-family:Arial,Helvetica,sans-serif;color:#333;width:100%;">
														<tbody>
															<tr class="estructura">
																<td style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;line-height:19px   !important;">
																	<a data-linkname="Header : footer_Accio" href="http://accio.gencat.cat?utm_source=${this.newsletter.tipo}&amp;utm_medium=${this.newsletter.fecha_acto_anyo}-${this.newsletter.numero}-header-accio&amp;utm_campaign=${this.newsletter.utmCampaing}" title="ACCIÓ" target="_blank"
																		style="color: rgb(192, 0, 0); text-decoration: none ;">
																		<img src="http://enviaments.accio.gencat.cat/ACC1O/cat/docs/enviaments/assets/Actes/ACCIO_logo_header.jpg" alt="ACCIÓ" style="border-width:0;">
																	</a>
																</td>
															</tr>
														</tbody>
													</table>
												</td>
											</tr>
											<!-- SEPARATOR -->
											<tr class="estructura">
												<td style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;line-height:19px !important;" height="10">&nbsp;</td>
											</tr>
										</tbody>
									</table>
								</div>
								<!--[if (gte mso 9)|(IE)]>
									</td>
									<td width="50%" valign="bottom" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;line-height:19px !important;" >
								<![endif]-->
	
								<!-- ________ FI HEADER LOGO ___________________________________________________________________________________________________________________________ -->
	
								<!-- ________ INICI HEADER XARXES SOCIALS ___________________________________________________________________________________________________________________________ -->
	
								<div class="column al_center vbot" style="text-align:center;vertical-align:bottom;width:100%;max-width:300px;display:inline-block;">
									<table style="border-spacing:0;font-family:Arial,Helvetica,sans-serif;color:#333;" width="100%">
										<tbody>
											<tr class="estructura">
												<td class="inner" style="line-height:19px !important;padding-top:0;padding-bottom:0;padding-right:10px;padding-left:10px;">
													<table class="contents" style="border-spacing:0;font-family:Arial,Helvetica,sans-serif;color:#333;width:100%;">
														<tbody>
															<tr class="estructura">
																<td class="al_right x14" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;line-height:19px !important;text-align:right;font-size:14px;">
																	<span class="dinblock" style="line-height:19px !important;display:inline-block;">
																		<a data-linkname="Header : share_Facebook" href="https://www.facebook.com/sharer/sharer.php?u=https://${this.newsletter.enlace_recomana_xxss_mini_sin_http}" title="ACCIÓ - Facebook" class="nodeco x14" style="text-decoration: none; font-size: 14px; color: rgb(192, 0, 0);" target="_blank" id="rec-facebook-link">&nbsp;
																			<img src="http://enviaments.accio.gencat.cat/ACC1O/cat/docs/enviaments/assets/Actes/ico_fb.png" alt="Facebook" style="border-width:0;">
																		</a>
																	</span>
																	<span class="dinblock" style="line-height:19px !important;display:inline-block;">
																		<a data-linkname="Header : share_Twitter" href="https://twitter.com/intent/tweet?text=${this.newsletter.titulo_percent}%20https%3a%2f%2f${this.newsletter.enlace_recomana_xxss_mini_sin_http}" target="_blank" title="ACCIÓ - Twitter" class="nodeco x14" style="text-decoration: none; font-size: 14px; color: rgb(192, 0, 0);" id="rec-twitter-link">&nbsp;
																			<img src="http://enviaments.accio.gencat.cat/ACC1O/cat/docs/enviaments/assets/Actes/ico_tw.png" alt="Twitter" style="border-width:0;">
																		</a>
																	</span>
																	<span class="dinblock" style="line-height:19px !important;display:inline-block;">
																		<a data-linkname="Header : share_Linkedin" href="https://www.linkedin.com/shareArticle?mini=true&url=http://${this.newsletter.enlace_recomana_xxss_mini_sin_http}&title=${this.newsletter.titulo_percent}&source=" target="_blank" title="ACCIÓ - LinkedIn" class="nodeco x14" style="text-decoration: none; font-size: 14px; color: rgb(192, 0, 0);" id="rec-linkedin-link">&nbsp;
																			<img src="http://enviaments.accio.gencat.cat/ACC1O/cat/docs/enviaments/assets/Actes/ico_in.png" alt="LinkedIn" style="border-width:0;">
																		</a>
																	</span>
																</td>
															</tr>
														</tbody>
													</table>
												</td>
											</tr>
											<!-- SEPARATOR -->
											<tr class="estructura">
												<td style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;line-height:19px !important;" height="10">&nbsp;</td>
											</tr>
										</tbody>
									</table>
								</div>
	
								<!-- ________ FI HEADER XARXES SOCIALS ___________________________________________________________________________________________________________________________ -->
	
								<!-- ________ INICI COS FONS GRIS ___________________________________________________________________________________________________________________________ -->
	
								<!--[if (gte mso 9)|(IE)]>
										</td>
									</tr>
								</table>
								<![endif]-->
							</td>
						</tr>
						<!-- SEPARATOR LINE -->
						<tr class="estructura">
							<td class="one-column" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;line-height:19px !important;">
								<table style="border-spacing:0;font-family:Arial,Helvetica,sans-serif;color:#333;" width="100%">
									<tbody>
										<tr class="estructura">
											<td class="separator1 bg_brown" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;background-color:#b5aba1;font-size:1px;line-height:1px !important;" height="1">&nbsp;
											</td>
										</tr>
									</tbody>
								</table>
							</td>
						</tr>
						<!-- SEPARATOR -->
						<!-- TWO COLUMN & LEFT SIDEBAR LAYOUT -->
						<tr class="the_row estructura">
							<td style="padding:0;font-size:0;text-align:center">
								<table class="outer" style="border-spacing: 0; font-family: Tahoma, sans-serif; color: #333333; Margin: 0 auto; width: 100%; max-width: 640px;" align="center">
									<tbody>
									</tbody>
								</table>
							</td>
						</tr>
						<tr style="background-color:#efefef;" class="estructura">
							<td class="inner contents al_left x13" style="padding-top:0;padding-bottom:0;padding-right:5%;padding-left:5%;line-height:19px !important;width:100%;text-align:left;font-size:13px;">
								<!-- SEPARATOR -->
								<table style="border-spacing:0;font-family:Arial,Helvetica,sans-serif;color:#333;" width="100%">
									<tbody>
										<tr class="estructura">
											<td style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;line-height:normal!important;" height="20"></td>
										</tr>
									</tbody>
								</table>
								<span class="x13 upper bold titol" style="line-height:19px !important;font-weight:700;text-transform:uppercase;font-size:13px;">
									RECORDATORI
								</span>
								<br style="line-height:19px !important;">
								<br style="line-height:19px !important;">
								<a data-linkname="Content : Titol" href="${this.newsletter.enlace}?utm_source=${this.newsletter.tipo}&amp;utm_medium=${this.newsletter.fecha_acto_anyo}-${this.newsletter.numero}-titol&amp;utm_campaign=${this.newsletter.utmCampaing}" target="_blank" class="nodeco" style="text-decoration: none; color: rgb(192, 0, 0);">
									<span class="x21 green2 bold titolh3" style="line-height:normal!important;font-weight:700;font-size:21px;color:#c00000;">
									${this.newsletter.titulo}
									</span>
								</a>
								<br>
								<br style="line-height:19px !important;"><br style="line-height:19px !important;">
								<span class="x15 data" style="line-height:19px !important;font-size:15px;">
									<span>	
										${this.newsletter.fecha_acto_texto}<br>
										${this.newsletter.hora_acto_texto}
									</span>
								</span>
								<br style="line-height:19px !important;">
								<br style="line-height:19px !important;">
								<span class="x13 green2 upper place" style="line-height:19px !important;text-transform:uppercase;font-size:15px;color:#c00000;" translate="no">
									On-line
								</span>
								<br>
								<!-- SEPARATOR -->
								<table style="border-spacing:0;font-family:Arial,Helvetica,sans-serif;color:#333;" width="100%">
									<tbody>
										<tr class="estructura">
											<td style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;line-height:19px !important;" height="20"></td>
										</tr>
									</tbody>
								</table>
							</td>
						</tr>
	
						<!-- ________ FI COS FONS GRIS ___________________________________________________________________________________________________________________________ -->
	
						<!-- ________ INICI COS TEXTE ABAIX ___________________________________________________________________________________________________________________________ -->
	
						<tr class="estructura">
							<td style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;line-height:19px !important;font-family:Arial,Helvetica,sans-serif;" height="20">&nbsp;</td>
						</tr>
						<tr class="the_row estructura">
							<td style="font-family: Arial, Helvetica, sans-serif; font-size: 14px; font-weight: normal; line-height: 17px;" width="409" valign="top">
								<p style="line-height: 19px !important; width: 100%; padding: 0px 10px 0px 0px; font-weight: normal; text-align: left; font-size: 14px; font-family:Arial, Helvetica, sans-serif; position: relative;">
									${this.newsletter.avui} tindrà lloc la sessió a què et vas inscriure.
								</p>
								<p style="line-height: 19px !important; width: 100%; padding: 0px 10px 0px 0px; font-weight: normal; text-align: left; font-size: 14px; font-family: Arial,Helvetica, sans-serif; position: relative;">
									<a href="${this.newsletter.enlace_chat}" style="color:#c00000;" target="_blank"><strong>Aquest és l'enllaç per accedir-hi</strong></a>. <em>(Aquest enllaç és personal i intransferible)</em>.
								</p>
								<p style="line-height: 19px !important; width: 100%; padding: 0px 10px 0px 0px; font-weight: normal; text-align: left; font-size: 14px; font-family: Arial,Helvetica, sans-serif; position: relative;">
                                	Si us plau, quan et connectis a la sessió especifica el teu nom i cognom; així, en cas que plantegis alguna qüestió en el xat, ens serà més fàcil donar-te resposta.
                            	</p>
	
								<p style="line-height: 19px !important; width: 100%; padding: 0px 10px 0px 0px; font-weight: normal; text-align: left; font-size: 14px; font-family: Arial, Helvetica, sans-serif; position: relative;">
									T'hi esperem!
								</p>
							</td>
						</tr>
	
						<tr class="estructura">
							<td style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;line-height:19px !important;font-family:Arial,Helvetica,sans-serif;" height="20">&nbsp;</td>
						</tr>
	
						<!-- ________ FI COS TEXTE ABAIX ___________________________________________________________________________________________________________________________ -->
	
						<!-- ________ INICI FOOTER ___________________________________________________________________________________________________________________________ -->
	
						<!-- SEPARATOR LINE -->
						<tr class="estructura">
							<td class="one-column" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;line-height:19px !important;">
								<table style="border-spacing:0;font-family:Arial,Helvetica,sans-serif;color:#333;" width="100%">
									<tbody>
										<tr class="estructura">
											<td class="separator1 bg_grey" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;    background-color:#999;font-size:1px;line-height:1px !important;" height="1">&nbsp;</td>
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
																					<a href="https://www.accio.gencat.cat/ca/accio/premsa-comunicacio/butlletins/accio-informa?utm_source=${this.newsletter.tipo}&amp;utm_medium=${this.newsletter.fecha_acto_anyo}-${this.newsletter.numero}-subscripcio-accioinforma&amp;utm_campaign=${this.newsletter.utmCampaing}"
																						target="_blank" title="ACCI&Oacute;Informa">
																						<img src="http://enviaments.accio.gencat.cat/ACC1O/cat/docs/enviaments/img/ico-footer-accioinforma.png" alt="ACCI&Oacute; Informa">
																					</a>
																				</td>
																				<td class="text x11 grey al_left" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;line-height:19px !important;text-align:left;font-size:11px;color:#999;">
																					<a href="https://www.accio.gencat.cat/ca/accio/premsa-comunicacio/butlletins/agenda-accio?utm_source=${this.newsletter.tipo}&amp;utm_medium=${this.newsletter.fecha_acto_anyo}-${this.newsletter.numero}-subscripcio-agenda&amp;utm_campaign=${this.newsletter.utmCampaing}"
																						target="_blank" title="Agenda ACCI&Oacute;">
																						<img src="http://enviaments.accio.gencat.cat/ACC1O/cat/docs/enviaments/img/ico-footer-agenda.png" alt="Agenda ACCI&Oacute;">
																					</a>
																				</td>
																				<td class="text x11 grey al_left" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;line-height:19px !important;text-align:left;font-size:11px;color:#999;">
																					<a target="_blank" title="Butlletí d'Innovació" href="https://www.accio.gencat.cat/ca/accio/premsa-comunicacio/butlletins/radar-accio?utm_source=${this.newsletter.tipo}&amp;utm_medium=${this.newsletter.fecha_acto_anyo}-${this.newsletter.numero}-subscripcio-innovacio&amp;utm_campaign=${this.newsletter.utmCampaing}">
																						<img alt="Butlletí d'Innovació" src="http://enviaments.accio.gencat.cat/ACC1O/cat/docs/enviaments/img/ico-footer-radar.png">
																					</a>
																				</td>
																				<td class="text x11 grey al_left" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;line-height:19px !important;text-align:left;font-size:11px;color:#999;">
																					<a href="https://www.accio.gencat.cat/ca/accio/premsa-comunicacio/butlletins/catalonia-in-business?utm_source=${this.newsletter.tipo}&amp;utm_medium=${this.newsletter.fecha_acto_anyo}-${this.newsletter.numero}-subscripcio-catalonia&amp;utm_campaign=${this.newsletter.utmCampaing}"
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
																	<a href="mailto:?Subject=Vull%20compartir%20amb%20tu%20aquest%20contingut&Body=${this.newsletter.titulo_percent}%20https%3a%2f%2f${this.newsletter.enlace_recomana_xxss_mini_sin_http}" title="" target="_blank" style="text-decoration: none; font-size: 11px; color: rgb(153, 153, 153);"
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
																		</span> Vull deixar de rebre tots els correus comercials d'
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
																	<a data-linkname="Footer : Avis_legal" href="http://www.accio.gencat.cat/ca/avis-legal?utm_source=${this.newsletter.tipo}&amp;utm_medium=${this.newsletter.fecha_acto_anyo}-${this.newsletter.numero}-legal&amp;utm_campaign=${this.newsletter.utmCampaing}" target="_blank"
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
																					<a data-linkname="Footer : footer_Accio" href="http://accio.gencat.cat?utm_source=${this.newsletter.tipo}&amp;utm_medium=${this.newsletter.fecha_acto_anyo}-${this.newsletter.numero}-footer-accio&amp;utm_campaign=${this.newsletter.utmCampaing}" title="ACCIÓ" target="_blank"
																						style="color: rgb(153, 153, 153); text-decoration: none;">
																						<img src="http://enviaments.accio.gencat.cat/ACC1O/cat/docs/enviaments/assets/Actes/footer_accio.png" alt="ACCIÓ" style="border-width:0;height:auto">
																					</a>
																				</td>
																				<td style="padding:0;text-align:right;">
																					<a data-linkname="Footer : footer_Gencat" href="http://www.gencat.cat?utm_source=${this.newsletter.tipo}&amp;utm_medium=${this.newsletter.fecha_acto_anyo}-${this.newsletter.numero}-footer-generalitat&amp;utm_campaign=${this.newsletter.utmCampaing}" title=" Generalitat de Catalunya"
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
																	<a data-linkname="Footer : footer_EEN" href="http://www.een.cat?utm_source=${this.newsletter.tipo}&amp;utm_medium=${this.newsletter.fecha_acto_anyo}-${this.newsletter.numero}-footer-een&amp;utm_campaign=${this.newsletter.utmCampaing}" target="_blank" style="color: rgb(153, 153, 153); text-decoration: none;">
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
</html>`);
				
			}else{

			this.html.emit(`
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta property="og:image" content="http://enviaments.accio.gencat.cat/ACC1O/cat/docs/enviaments/assets/Actes/ACCIO_logo_header.jpg">
		<title>${this.newsletter.titulo}</title>
		<meta property="og:url" content="http://enviaments.accio.gencat.cat/ACC1O/cat/docs/enviaments/20${this.newsletter.fecha_acto_anyo}/REC/${this.newsletter.tipo}-${this.newsletter.fecha_acto_anyo}-${this.newsletter.numero}-${this.newsletter.utmCampaing}_${this.newsletter.titulo_amigable}.html">
		<meta name="description" [content]="${this.newsletter.preheader}">
		<meta name="og:title" [content]="${this.newsletter.titulo}">
	</head>
	
	
	<body>
		<center class="wrapper clean" style="width:100%;table-layout:fixed;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;">
			<div class="webkit" style="max-width:600px;" id="template" data-name="entrada">
				<!-- BASE TABLE -->
				<!--[if (gte mso 9)|(IE)]>
		<table width="600" align="center" cellpadding="0" cellspacing="0" border="0" style="border-spacing:0;font-family:Arial,Helvetica,sans-serif;color:#333;" >
				<tr>
					<td style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;line-height:19px !important;">
						<![endif]-->
				<table class="outer" style="border-spacing:0;font-family:Arial,Helvetica,sans-serif;color:#333;Margin:0 auto;width:100%;max-width:600px;" align="center">
					<!-- ONE COLUMN LAYOUT -->
					<!-- SEPARATOR -->
					<tbody>
						<tr class="estructura">
							<td style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;line-height:19px !important;" height="5">&nbsp;</td>
						</tr>
						<tr class="estructura">
							<td id="preheader" style="display:none !important;visibility:hidden;mso-hide:all;font-size:1px;color:#ffffff;line-height:1px;max-height:0px;max-width:0px;opacity:0;overflow:hidden;" width="0" height="0">
								${this.newsletter.preheader}
							</td>
						</tr>
						<tr class="estructura">
							<td class="one-column" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;line-height:19px !important;">
								<table style="border-spacing:0;font-family:Arial,Helvetica,sans-serif;color:#333333;" width="100%">
									<tbody>
										<tr class="estructura">
											<td style="font-family:Arial, Helvetica, sans-serif;font-size:11px;color:#000000;text-align:center;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;line-height:19px !important;">
												No veus b&eacute; aquest correu?
												<a data-linkname="Header : web_view" href="http://enviaments.accio.gencat.cat/ACC1O/cat/docs/enviaments/20${this.newsletter.fecha_acto_anyo}/REC/${this.newsletter.tipo}-${this.newsletter.fecha_acto_anyo}-${this.newsletter.numero}-${this.newsletter.utmCampaing}_${this.newsletter.titulo_amigable}.html?utm_source=${this.newsletter.tipo}&amp;utm_medium=${this.newsletter.fecha_acto_anyo}-${this.newsletter.numero}-webview&amp;utm_campaign=${this.newsletter.utmCampaing}"
													target="_blank" title="Veure el correu en format web" style="color:#c00000;text-decoration:none;" id="webview" class="notUtm">
													Fes clic aqu&iacute;
												</a>
											</td>
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
							<td class="two-column al_center" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;line-height:19px !important;font-size:0;text-align:center;">
								<!--[if (gte mso 9)|(IE)]>
								<table width="100%" style="border-spacing:0;font-family:Arial,Helvetica,sans-serif;color:#333;" >
									<tr>
										<td width="50%" valign="bottom" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;line-height:19px !important;" >
								<![endif]-->
	
								<!-- ________ INICI HEADER LOGO ___________________________________________________________________________________________________________________________ -->
	
								<div class="column al_center vbot" style="text-align:center;vertical-align:bottom;width:100%;max-width:300px;display:inline-block;">
									<table style="border-spacing:0;font-family:Arial,Helvetica,sans-serif;color:#333;" width="100%">
										<tbody>
											<tr class="estructura">
												<td class="inner" style="line-height:19px !important;padding-top:0;padding-bottom:0;padding-right:10px;padding-left:10px;">
													<table class="contents" style="border-spacing:0;font-family:Arial,Helvetica,sans-serif;color:#333;width:100%;">
														<tbody>
															<tr class="estructura">
																<td style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;line-height:19px   !important;">
																	<a data-linkname="Header : footer_Accio" href="http://accio.gencat.cat?utm_source=${this.newsletter.tipo}&amp;utm_medium=${this.newsletter.fecha_acto_anyo}-${this.newsletter.numero}-header-accio&amp;utm_campaign=${this.newsletter.utmCampaing}" title="ACCIÓ" target="_blank"
																		style="color: rgb(192, 0, 0); text-decoration: none ;">
																		<img src="http://enviaments.accio.gencat.cat/ACC1O/cat/docs/enviaments/assets/Actes/ACCIO_logo_header.jpg" alt="ACCIÓ" style="border-width:0;">
																	</a>
																</td>
															</tr>
														</tbody>
													</table>
												</td>
											</tr>
											<!-- SEPARATOR -->
											<tr class="estructura">
												<td style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;line-height:19px !important;" height="10">&nbsp;</td>
											</tr>
										</tbody>
									</table>
								</div>
								<!--[if (gte mso 9)|(IE)]>
									</td>
									<td width="50%" valign="bottom" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;line-height:19px !important;" >
								<![endif]-->
	
								<!-- ________ FI HEADER LOGO ___________________________________________________________________________________________________________________________ -->
	
								<!-- ________ INICI HEADER XARXES SOCIALS ___________________________________________________________________________________________________________________________ -->
	
								<div class="column al_center vbot" style="text-align:center;vertical-align:bottom;width:100%;max-width:300px;display:inline-block;">
									<table style="border-spacing:0;font-family:Arial,Helvetica,sans-serif;color:#333;" width="100%">
										<tbody>
											<tr class="estructura">
												<td class="inner" style="line-height:19px !important;padding-top:0;padding-bottom:0;padding-right:10px;padding-left:10px;">
													<table class="contents" style="border-spacing:0;font-family:Arial,Helvetica,sans-serif;color:#333;width:100%;">
														<tbody>
															<tr class="estructura">
																<td class="al_right x14" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;line-height:19px !important;text-align:right;font-size:14px;">
																	<span class="dinblock" style="line-height:19px !important;display:inline-block;">
																		<a data-linkname="Header : share_Facebook" href="https://www.facebook.com/sharer/sharer.php?u=https://${this.newsletter.enlace_recomana_xxss_mini_sin_http}" title="ACCIÓ - Facebook" class="nodeco x14" style="text-decoration: none; font-size: 14px; color: rgb(192, 0, 0);" target="_blank" id="rec-facebook-link">&nbsp;
																			<img src="http://enviaments.accio.gencat.cat/ACC1O/cat/docs/enviaments/assets/Actes/ico_fb.png" alt="Facebook" style="border-width:0;">
																		</a>
																	</span>
																	<span class="dinblock" style="line-height:19px !important;display:inline-block;">
																		<a data-linkname="Header : share_Twitter" href="https://twitter.com/intent/tweet?text=${this.newsletter.titulo_percent}%20https%3a%2f%2f${this.newsletter.enlace_recomana_xxss_mini_sin_http}" target="_blank" title="ACCIÓ - Twitter" class="nodeco x14" style="text-decoration: none; font-size: 14px; color: rgb(192, 0, 0);" id="rec-twitter-link">&nbsp;
																			<img src="http://enviaments.accio.gencat.cat/ACC1O/cat/docs/enviaments/assets/Actes/ico_tw.png" alt="Twitter" style="border-width:0;">
																		</a>
																	</span>
																	<span class="dinblock" style="line-height:19px !important;display:inline-block;">
																		<a data-linkname="Header : share_Linkedin" href="https://www.linkedin.com/shareArticle?mini=true&url=http://${this.newsletter.enlace_recomana_xxss_mini_sin_http}&title=${this.newsletter.titulo_percent}&source=" target="_blank" title="ACCIÓ - LinkedIn" class="nodeco x14" style="text-decoration: none; font-size: 14px; color: rgb(192, 0, 0);" id="rec-linkedin-link">&nbsp;
																			<img src="http://enviaments.accio.gencat.cat/ACC1O/cat/docs/enviaments/assets/Actes/ico_in.png" alt="LinkedIn" style="border-width:0;">
																		</a>
																	</span>
																</td>
															</tr>
														</tbody>
													</table>
												</td>
											</tr>
											<!-- SEPARATOR -->
											<tr class="estructura">
												<td style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;line-height:19px !important;" height="10">&nbsp;</td>
											</tr>
										</tbody>
									</table>
								</div>
	
								<!-- ________ FI HEADER XARXES SOCIALS ___________________________________________________________________________________________________________________________ -->
	
								<!-- ________ INICI COS FONS GRIS ___________________________________________________________________________________________________________________________ -->
	
								<!--[if (gte mso 9)|(IE)]>
										</td>
									</tr>
								</table>
								<![endif]-->
							</td>
						</tr>
						<!-- SEPARATOR LINE -->
						<tr class="estructura">
							<td class="one-column" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;line-height:19px !important;">
								<table style="border-spacing:0;font-family:Arial,Helvetica,sans-serif;color:#333;" width="100%">
									<tbody>
										<tr class="estructura">
											<td class="separator1 bg_brown" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;background-color:#b5aba1;font-size:1px;line-height:1px !important;" height="1">&nbsp;
											</td>
										</tr>
									</tbody>
								</table>
							</td>
						</tr>
						<!-- SEPARATOR -->
						<!-- TWO COLUMN & LEFT SIDEBAR LAYOUT -->
						<tr class="the_row estructura">
							<td style="padding:0;font-size:0;text-align:center">
								<table class="outer" style="border-spacing: 0; font-family: Tahoma, sans-serif; color: #333333; Margin: 0 auto; width: 100%; max-width: 640px;" align="center">
									<tbody>
									</tbody>
								</table>
							</td>
						</tr>
						<tr style="background-color:#efefef;" class="estructura">
							<td class="inner contents al_left x13" style="padding-top:0;padding-bottom:0;padding-right:5%;padding-left:5%;line-height:19px !important;width:100%;text-align:left;font-size:13px;">
								<!-- SEPARATOR -->
								<table style="border-spacing:0;font-family:Arial,Helvetica,sans-serif;color:#333;" width="100%">
									<tbody>
										<tr class="estructura">
											<td style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;line-height:normal!important;" height="20"></td>
										</tr>
									</tbody>
								</table>
								<span class="x13 upper bold titol" style="line-height:19px !important;font-weight:700;text-transform:uppercase;font-size:13px;">
									RECORDATORI
								</span>
								<br style="line-height:19px !important;">
								<br style="line-height:19px !important;">
								<a data-linkname="Content : Titol" href="${this.newsletter.enlace}?utm_source=${this.newsletter.tipo}&amp;utm_medium=${this.newsletter.fecha_acto_anyo}-${this.newsletter.numero}-titol&amp;utm_campaign=${this.newsletter.utmCampaing}" target="_blank" class="nodeco" style="text-decoration: none; color: rgb(192, 0, 0);">
									<span class="x21 green2 bold titolh3" style="line-height:normal!important;font-weight:700;font-size:21px;color:#c00000;">
									${this.newsletter.titulo}
									</span>
								</a>
								<br>
								<br style="line-height:19px !important;"><br style="line-height:19px !important;">
								<span class="x15 data" style="line-height:19px !important;font-size:15px;">
									<span>	
										${this.newsletter.fecha_acto_texto}<br>
										${this.newsletter.hora_acto_texto}
									</span>
								</span>
								<br style="line-height:19px !important;">
								<br style="line-height:19px !important;">
								<span class="x13 green2 upper place" style="line-height:19px !important;text-transform:uppercase;font-size:15px;color:#c00000;" translate="no">
									On-line
								</span>
								<br>
								<!-- SEPARATOR -->
								<table style="border-spacing:0;font-family:Arial,Helvetica,sans-serif;color:#333;" width="100%">
									<tbody>
										<tr class="estructura">
											<td style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;line-height:19px !important;" height="20"></td>
										</tr>
									</tbody>
								</table>
							</td>
						</tr>
	
						<!-- ________ FI COS FONS GRIS ___________________________________________________________________________________________________________________________ -->
	
						<!-- ________ INICI COS TEXTE ABAIX ___________________________________________________________________________________________________________________________ -->
	
						<tr class="estructura">
							<td style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;line-height:19px !important;font-family:Arial,Helvetica,sans-serif;" height="20">&nbsp;</td>
						</tr>
						<tr class="the_row estructura">
							<td style="font-family: Arial, Helvetica, sans-serif; font-size: 14px; font-weight: normal; line-height: 17px;" width="409" valign="top">
								<p style="line-height: 19px !important; width: 100%; padding: 0px 10px 0px 0px; font-weight: normal; text-align: left; font-size: 14px; font-family:Arial, Helvetica, sans-serif; position: relative;">
									${this.newsletter.avui} tindrà lloc la sessió a què et vas inscriure.
								</p>
								<p style="line-height: 19px !important; width: 100%; padding: 0px 10px 0px 0px; font-weight: normal; text-align: left; font-size: 14px; font-family: Arial,Helvetica, sans-serif; position: relative;">
									<a href="${this.newsletter.enlace_chat}" style="color:#c00000;" target="_blank"><strong>Aquest és l'enllaç per accedir-hi</strong></a>.<em>(Aquest enllaç és personal i intransferible)</em>.
								</p>
								
								<p style="line-height: 19px !important; width: 100%; padding: 0px 10px 0px 0px; font-weight: normal; text-align: left; font-size: 14px; font-family: Arial, Helvetica, sans-serif; position: relative;">
									T'hi esperem!
								</p>
							</td>
						</tr>
	
						<tr class="estructura">
							<td style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;line-height:19px !important;font-family:Arial,Helvetica,sans-serif;" height="20">&nbsp;</td>
						</tr>
	
						<!-- ________ FI COS TEXTE ABAIX ___________________________________________________________________________________________________________________________ -->
	
						<!-- ________ INICI FOOTER ___________________________________________________________________________________________________________________________ -->
	
						<!-- SEPARATOR LINE -->
						<tr class="estructura">
							<td class="one-column" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;line-height:19px !important;">
								<table style="border-spacing:0;font-family:Arial,Helvetica,sans-serif;color:#333;" width="100%">
									<tbody>
										<tr class="estructura">
											<td class="separator1 bg_grey" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;    background-color:#999;font-size:1px;line-height:1px !important;" height="1">&nbsp;</td>
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
																					<a href="https://www.accio.gencat.cat/ca/accio/premsa-comunicacio/butlletins/accio-informa?utm_source=${this.newsletter.tipo}&amp;utm_medium=${this.newsletter.fecha_acto_anyo}-${this.newsletter.numero}-subscripcio-accioinforma&amp;utm_campaign=${this.newsletter.utmCampaing}"
																						target="_blank" title="ACCI&Oacute;Informa">
																						<img src="http://enviaments.accio.gencat.cat/ACC1O/cat/docs/enviaments/img/ico-footer-accioinforma.png" alt="ACCI&Oacute; Informa">
																					</a>
																				</td>
																				<td class="text x11 grey al_left" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;line-height:19px !important;text-align:left;font-size:11px;color:#999;">
																					<a href="https://www.accio.gencat.cat/ca/accio/premsa-comunicacio/butlletins/agenda-accio?utm_source=${this.newsletter.tipo}&amp;utm_medium=${this.newsletter.fecha_acto_anyo}-${this.newsletter.numero}-subscripcio-agenda&amp;utm_campaign=${this.newsletter.utmCampaing}"
																						target="_blank" title="Agenda ACCI&Oacute;">
																						<img src="http://enviaments.accio.gencat.cat/ACC1O/cat/docs/enviaments/img/ico-footer-agenda.png" alt="Agenda ACCI&Oacute;">
																					</a>
																				</td>
																				<td class="text x11 grey al_left" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;line-height:19px !important;text-align:left;font-size:11px;color:#999;">
																					<a target="_blank" title="Butlletí d'Innovació" href="https://www.accio.gencat.cat/ca/accio/premsa-comunicacio/butlletins/radar-accio?utm_source=${this.newsletter.tipo}&amp;utm_medium=${this.newsletter.fecha_acto_anyo}-${this.newsletter.numero}-subscripcio-innovacio&amp;utm_campaign=${this.newsletter.utmCampaing}">
																						<img alt="Butlletí d'Innovació" src="http://enviaments.accio.gencat.cat/ACC1O/cat/docs/enviaments/img/ico-footer-radar.png">
																					</a>
																				</td>
																				<td class="text x11 grey al_left" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;line-height:19px !important;text-align:left;font-size:11px;color:#999;">
																					<a href="https://www.accio.gencat.cat/ca/accio/premsa-comunicacio/butlletins/catalonia-in-business?utm_source=${this.newsletter.tipo}&amp;utm_medium=${this.newsletter.fecha_acto_anyo}-${this.newsletter.numero}-subscripcio-catalonia&amp;utm_campaign=${this.newsletter.utmCampaing}"
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
																	<a href="mailto:?Subject=Vull%20compartir%20amb%20tu%20aquest%20contingut&Body=${this.newsletter.titulo_percent}%20https%3a%2f%2f${this.newsletter.enlace_recomana_xxss_mini_sin_http}" title="" target="_blank" style="text-decoration: none; font-size: 11px; color: rgb(153, 153, 153);"
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
																		</span> Vull deixar de rebre tots els<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;correus comercials d'
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
																	<a data-linkname="Footer : Avis_legal" href="http://www.accio.gencat.cat/ca/avis-legal?utm_source=${this.newsletter.tipo}&amp;utm_medium=${this.newsletter.fecha_acto_anyo}-${this.newsletter.numero}-legal&amp;utm_campaign=${this.newsletter.utmCampaing}" target="_blank"
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
																					<a data-linkname="Footer : footer_Accio" href="http://accio.gencat.cat?utm_source=${this.newsletter.tipo}&amp;utm_medium=${this.newsletter.fecha_acto_anyo}-${this.newsletter.numero}-footer-accio&amp;utm_campaign=${this.newsletter.utmCampaing}" title="ACCIÓ" target="_blank"
																						style="color: rgb(153, 153, 153); text-decoration: none;">
																						<img src="http://enviaments.accio.gencat.cat/ACC1O/cat/docs/enviaments/assets/Actes/footer_accio.png" alt="ACCIÓ" style="border-width:0;height:auto">
																					</a>
																				</td>
																				<td style="padding:0;text-align:right;">
																					<a data-linkname="Footer : footer_Gencat" href="http://www.gencat.cat?utm_source=${this.newsletter.tipo}&amp;utm_medium=${this.newsletter.fecha_acto_anyo}-${this.newsletter.numero}-footer-generalitat&amp;utm_campaign=${this.newsletter.utmCampaing}" title=" Generalitat de Catalunya"
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
																	<a data-linkname="Footer : footer_EEN" href="http://www.een.cat?utm_source=${this.newsletter.tipo}&amp;utm_medium=${this.newsletter.fecha_acto_anyo}-${this.newsletter.numero}-footer-een&amp;utm_campaign=${this.newsletter.utmCampaing}" target="_blank" style="color: rgb(153, 153, 153); text-decoration: none;">
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
</html>`);
			
			}
	}

}
