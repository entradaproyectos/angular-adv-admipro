import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Newscv } from '../../models/newscv.model';
import { DomSanitizerPipe } from '../../pipes/dom-sanitizer.pipe';

@Component({
  selector: 'app-actcv',
  templateUrl: './actcv.component.html',
  styleUrls: ['./actcv.component.css']
})
export class ActcvComponent implements OnInit {

    @Input() newsletter: Newscv;
    @Output() html: EventEmitter<string> = new EventEmitter();
    @Input() imagenCropped: any;
    @Input() lista_preview:string[] = null;

    hola = 'hola';
    
    lista:string = '';
    
    constructor(
        
    ) { }

    ngOnInit(): void {
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
          <title>${this.newsletter.titulo}</title>
          <meta property="og:url" content="http://enviaments.accio.gencat.cat/ACC1O/cat/docs/enviaments/20${this.newsletter.fecha_acto_anyo}/actes/${this.newsletter.tipo}-${this.newsletter.fecha_acto_anyo}-${this.newsletter.numero}-${this.newsletter.utmCampaing}_${this.newsletter.titulo_amigable}.html">
          <meta name="description" content="${this.newsletter.preheader}">
          <meta name="og:title" content="${this.newsletter.titulo}">
      </head>
      
      <body>
          <center class="wrapper clean" style="width:100%;table-layout:fixed;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;">
              <div class="webkit" style="max-width:600px;" id="template" data-name="entrada">
              <!-- BASE TABLE -->
              <!--[if (gte mso 9)|(IE)]>
              <table width="600" align="center" cellpadding="0" cellspacing="0" border="0" style="border-spacing:0;font-family:Arial,Helvetica,sans-serif;color:#333333;" >
                <tr>
                  <td style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;line-height:19px !important;" >
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
                                                  <a data-linkname="Header : web_view" href="http://enviaments.accio.gencat.cat/ACC1O/cat/docs/enviaments/20${this.newsletter.fecha_acto_anyo}/actes/${this.newsletter.tipo}-${this.newsletter.fecha_acto_anyo}-${this.newsletter.numero}-${this.newsletter.utmCampaing}_${this.newsletter.titulo_amigable}.html?utm_source=${this.newsletter.tipo}&amp;utm_medium=${this.newsletter.fecha_acto_anyo}-${this.newsletter.numero}-webview&amp;tm_campaign=${this.newsletter.utmCampaing}"
                                                      target="_blank" title="Veure el correu en format web" style="color:#c00000;text-decoration:none;" id="webview" class="notUtm">
                                                      Fes clic aqu&iacute;
                                                  </a> | Traducci&oacute;n autom&aacute;tica al
                                                  <a data-linkname="Header : gtrans_cas" target="_blank" title="Traducción automática al castellano" href="https://translate.google.com/translate?sl=ca&tl=es&js=y&prev=_t&hl=ca&ie=UTF-8&u=http://enviaments.accio.gencat.cat/ACC1O/cat/docs/enviaments/20${this.newsletter.fecha_acto_anyo}/actes/${this.newsletter.tipo}-${this.newsletter.fecha_acto_anyo}-${this.newsletter.numero}-${this.newsletter.utmCampaing}_${this.newsletter.titulo_amigable}.html?utm_source=${this.newsletter.tipo}&amp;utm_medium=${this.newsletter.fecha_acto_anyo}-${this.newsletter.numero}-castellano&amp;tm_campaign=${this.newsletter.utmCampaing}"
                                                      style="color:#c00000;text-decoration:none;" id="trans-cast" class="notUtm">
                                                      castellano
                                                  </a> | Automatic translation to 
                                                  <a data-linkname="Header : gtrans_eng" target="_blank" title="Automatic translation to English" href="https://translate.google.com/translate?sl=ca&tl=en&js=y&prev=_t&hl=ca&ie=UTF-8&u=http://enviaments.accio.gencat.cat/ACC1O/cat/docs/enviaments/20${this.newsletter.fecha_acto_anyo}/actes/${this.newsletter.tipo}-${this.newsletter.fecha_acto_anyo}-${this.newsletter.numero}-${this.newsletter.utmCampaing}_${this.newsletter.titulo_amigable}.html?utm_source=${this.newsletter.tipo}&amp;utm_medium=${this.newsletter.fecha_acto_anyo}-${this.newsletter.numero}-english&amp;tm_campaign=${this.newsletter.utmCampaing}"
                                                      style="color:#c00000;text-decoration:none;" id="trans-eng" class="notUtm">
                                                      English
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
      
                                  <!-- ________ INICI HEADER LOGO ___________________________________________________________________________________________________________________________ -->

                                  <!-- BASE TABLE -->
                                  <!--[if (gte mso 9)|(IE)]>
                                  <table width="600" align="center" cellpadding="0" cellspacing="0" border="0" style="border-spacing:0;font-family:Arial,Helvetica,sans-serif;color:#333333;" >
                                    <tr>
                                      <td style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;line-height:19px !important;" >
                                        <![endif]-->
      
                                  <div class="column al_center vbot" style="text-align:center;vertical-align:bottom;width:100%;max-width:300px;display:inline-block;">
                                      <table style="border-spacing:0;font-family:Arial,Helvetica,sans-serif;color:#333;" width="100%">
                                          <tbody>
                                              <tr class="estructura">
                                                  <td class="inner" style="line-height:19px !important;padding-top:0;padding-bottom:0;padding-right:10px;padding-left:10px;">
                                                      <table class="contents" style="border-spacing:0;font-family:Arial,Helvetica,sans-serif;color:#333;width:100%;">
                                                          <tbody>
                                                              <tr class="estructura">
                                                                  <td style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;line-height:19px   !important;">
                                                                      <a data-linkname="Header : footer_Accio" href="http://accio.gencat.cat?utm_source=${this.newsletter.tipo}&amp;utm_medium=${this.newsletter.fecha_acto_anyo}-${this.newsletter.numero}-header-accio&amp;tm_campaign=${this.newsletter.utmCampaing}" title="ACCIÓ" target="_blank"
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
                                                                          <a data-linkname="Header : share_Linkedin" href="https://www.linkedin.com/shareArticle?mini=true&url=http://${this.newsletter.enlace_recomana_xxss_mini_sin_http}&title=${this.newsletter.titulo_percent}&amp;summary=${this.newsletter.preheader_percent}&amp;source=" target="_blank" title="ACCIÓ - LinkedIn" class="nodeco x14" style="text-decoration: none; font-size: 14px; color: rgb(192, 0, 0);" id="rec-linkedin-link">&nbsp;
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
                                  
                                      <!--[if (gte mso 9)|(IE)]>
                                      </td>
                                    </tr>
                                  </table>
                                  <![endif]-->
      
                                  <!-- ________ FI HEADER XARXES SOCIALS ___________________________________________________________________________________________________________________________ -->
      
                                  
                                  </td>
                                </tr>
                          
      `;

      const cuerpo_gris = `
      <!-- ________ INICI COS FONS GRIS ___________________________________________________________________________________________________________________________ -->
                          <!-- SEPARATOR LINE -->
                          <tr class="estructura">
                              <td style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;line-height:19px !important;">
                                  <table style="border-spacing:0;font-family:Arial,Helvetica,sans-serif;color:#333333;" width="100%">
                                      <tbody>
                                          <tr class="estructura">
                                              <td class="separator1 bg_brown" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;background-color:#b5aba1;font-size:1px;line-height:1px !important;" height="1">&nbsp;</td>
                                          </tr>
                                      </tbody>
                                  </table>
                              </td>
                          </tr>
                          <!-- SEPARATOR -->
                          <tr>
                              <td style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;line-height:19px !important;" height="15"></td>
                          </tr>
                          <!-- TWO COLUMN & LEFT SIDEBAR LAYOUT -->
                          <tr>
                              <td style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;line-height:19px !important;font-size:0;text-align:center;">
                                <!--[if (gte mso 9)|(IE)]>
                                <table width="100%" style="border-spacing:0;font-family:Arial,Helvetica,sans-serif;color:#333333;" >
                                  <tr>
                                    <td width="400" valign="top" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;line-height:19px !important;" >
                                      <![endif]-->
                                  <table style="border-spacing:0;font-family:Arial,Helvetica,sans-serif;color:#333333;text-align:center;width:100%;display:inline-block;vertical-align:top;max-width:400px;">
                                      <tbody>
                                          <tr style="background-color:#efefef;" class="estructura">
                                              <td class="inner contents al_left x13" style="padding-top:0;padding-bottom:0;padding-right:5%;padding-left:5%;line-height:19px !important;width:100%;text-align:left;font-size:13px;">
                                                  <!-- SEPARATOR -->
                                                  <table style="border-spacing:0;font-family:Arial,Helvetica,sans-serif;color:#333333;" width="100%">
                                                      <tbody>
                                                          <tr class="estructura">
                                                              <td style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;line-height:normal!important;" height="20"></td>
                                                          </tr>
                                                      </tbody>
                                                  </table>
                                                  <span style="line-height:19px !important;font-weight:700;text-transform:uppercase;font-size:13px;">
                                                      ${this.newsletter.acto.especialidad}
                                                  </span>
                                                  <br style="line-height:19px !important;">
                                                  <br style="line-height:19px !important;">
                                                  <a data-linkname="Content : Titol" href="${this.newsletter.acto.enlace}?utm_source=ACT&amp;utm_medium=${this.newsletter.acto.fecha_acto_anyo}-${this.newsletter.numero}-titol&amp;utm_campaign=${this.newsletter.utmCampaing}" target="_blank"
                                                      class="nodeco" style="text-decoration: none; color: rgb(192, 0, 0);">
                                                      <span class="x21 green2 bold titolh3" style="line-height:normal!important;font-weight:700;font-size:21px;color:#c00000;">
                                                          ${this.newsletter.acto.titulo}
                                                      </span>
                                                  </a>
                                                  <br style="line-height:19px !important;"><br style="line-height:19px !important;">
                                                  <span class="x15 data" style="line-height:19px !important;font-size:15px; ">
                                                      <span>
                                                          ${this.newsletter.acto.fecha_acto_texto_dia_semana}, ${this.newsletter.acto.fecha_acto_texto}
                                                          <br>
                                                          ${this.newsletter.hora_acto_texto}
                                                      </span>
                                                  </span>
                                                  <br style="line-height:19px !important;"><br style="line-height:19px !important;">
      
                                                  <span class="x13 green2 upper place" style="line-height:19px !important;text-transform:uppercase;font-size:15px;color:#c00000;" translate="no">
                                                          Online
                                                      </span>
      
                                                  <br style="line-height:19px !important;"><br style="line-height:19px !important;">
                                                  <div>
                                                  <!--[if mso]>
                                                      <v:roundrect  xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="${this.newsletter.enlace}?utm_source=${this.newsletter.tipo}&amp;utm_medium=${this.newsletter.fecha_acto_anyo}-${this.newsletter.numero}-inscripcions-outlook&amp;utm_campaign=${this.newsletter.utmCampaing}" arcsize="25%" stroke="f" fillcolor="#c20e00" style="height:40px;v-text-anchor:middle;width:150px;" >
                                                      <w:anchorlock></w:anchorlock>
                                                      <center>
                                                    <![endif]-->
                                                      <a data-linkname="Content : btn inscripcions" href="${this.newsletter.enlace}?utm_source=${this.newsletter.tipo}&amp;utm_medium=${this.newsletter.fecha_acto_anyo}-${this.newsletter.numero}-inscripcions&amp;utm_campaign=${this.newsletter.utmCampaing}"
                                                          target="_blank" style="background-color: rgb(194, 14, 0); border-radius: 10px; color: rgb(255, 255, 255); display: inline-block; font-family: sans-serif; font-size: 15px; font-weight: normal; line-height: 40px; text-align: center; text-decoration: none; width: 150px; -moz-text-size-adjust: none;"
                                                          class="btn-inscripcion">
                                                          INSCRIPCIONS
                                                      </a>
                                                      <!--[if mso]>
                                                          </center>
                                                        </v:roundrect>
                                                      <![endif]-->
                                                  </div>
                                                  <!-- SEPARATOR -->
                                                  <table style="border-spacing:0;font-family:Arial,Helvetica,sans-serif;color:#333333;" width="100%">
                                                      <tbody>
                                                          <tr class="estructura">
                                                              <td style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;line-height:19px !important;" height="20"></td>
                                                          </tr>
                                                      </tbody>
                                                  </table>
                                              </td>
                                          </tr>
                                        
      `;

        const parrafos_ini = `
        <!-- SEPARATOR -->
        <tr class="estructura">
            <td style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;line-height:19px !important;" height="20"></td>
        </tr>

        <tr class="estructura">
            <td class="inner contents x14 bold al_left contenido" style="line-height:19px !important;width:100%;padding-top:0;padding-bottom:0;padding-right:10px;padding-left:0px;font-weight:normal;text-align:left;font-size:14px;font-family:Arial,Helvetica,sans-serif;">`;

      const parrafos = this.newsletter.parrafos;

      const parrafos_fin = `
        </td>
      </tr>
      <!-- SEPARATOR -->
      <tr class="estructura">
          <td style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;line-height:19px !important;" height="30"></td>
      </tr>`;

      const parte_inscriu = `
      <tr class="estructura">
        <td class="al_left" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;line-height:19px !important;text-align:left;">
            <a data-linkname="Content : txt apunt-t'hi" href="${this.newsletter.enlace}?utm_source=${this.newsletter.tipo}&amp;utm_medium=${this.newsletter.fecha_acto_anyo}-${this.newsletter.numero}-insciu-thi&amp;utm_campaign=${this.newsletter.utmCampaing}"
                target="_blank" style="color: rgb(192, 0, 0); font-size: 21px; text-decoration: none;">
            ${this.newsletter.inscriu}
            </a>
        </td>
    </tr>

    <!-- SEPARATOR -->
    <tr class="estructura">
        <td style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;line-height:19px !important;" height="30"></td>
    </tr>
</tbody>
</table>
      
                                      
      `;

      const imatge = `
      <!--[if (gte mso 9)|(IE)]>
        </td>
        <td width="200"  valign="top" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;line-height:19px !important;" >
        <![endif]-->
            <table class="column right al_center" style="border-spacing:0;font-family:Arial,Helvetica,sans-serif;color:#333333;text-align:center;width:100%;display:inline-block;vertical-align:top;max-width:200px;">
                <tbody>
                    <tr class="estructura">
                        <td class="inner contents x13 al_center" style="line-height:19px !important;width:100%;padding-top:0;padding-bottom:0;padding-right:10px;padding-left:10px;text-align:center;font-size:13px;">
                            <a data-linkname="RightColum : Imatge" href="${this.newsletter.enlace}?utm_source=${this.newsletter.tipo}&amp;utm_medium=${this.newsletter.fecha_acto_anyo}-${this.newsletter.numero}-imatge&amp;utm_campaign=${this.newsletter.utmCampaing}"
                                title="" target="_blank" class="nodeco" style="text-decoration: none; color: rgb(192, 0, 0);" id="img">
                                <img style="border-width:0; width:180; height:auto" src="http://enviaments.accio.gencat.cat/ACC1O/cat/docs/enviaments/img/actes/${this.newsletter.filename_html}.jpg">
                            </a>
                        </td>
                    </tr>
                    <!-- SEPARATOR -->
                    <tr class="estructura">
                        <td style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;line-height:19px !important;" height="30"></td>
                    </tr>
                    <tr class="estructura">
                        <td class="inner contents x13 al_center" style="line-height:19px !important;width:100%;padding-top:0;padding-bottom:0;padding-right:10px;padding-left:10px;text-align:center;font-size:13px;">
                            <img src="http://enviaments.accio.gencat.cat/ACC1O/cat/docs/enviaments/assets/Actes/mes-informacio-grey.png" alt="Més informació" style="border-width:0;">
                        </td>
                    </tr>
                    <!-- SEPARATOR -->
                    <tr class="estructura">
                        <td style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;line-height:19px !important;" height="10"></td>
                    </tr>
      `;

            var col_der_info_start = `
            <tr class="therow estructura">
                <td style="padding: 0px 0px 0px 15px; line-height: 19px !important; font-size: 13px; text-align: left; text-decoration: none;" class="responde" target="_blank">
                    <table style="border-spacing:0;font-family:Arial,Helvetica,sans-serif;color:#333333;" width="100%">
                        <tbody>
                            <tr class="inner contents estructura" style="width:100%;padding-top:0;padding-bottom:0;padding-right:10px;padding-left:10px;">
                                <td class="x13 al_right" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;line-height:19px !important;text-align:left;font-size:13px;" width="13" valign="top">
                                    <img src="http://enviaments.accio.gencat.cat/ACC1O/cat/docs/enviaments/assets/Actes/arrow-vermell.png" alt="icona fletxa" style="border-width:0;">
                                    <span class="x13" style="line-height:19px !important;font-size:13px;">
                                        <a data-linkname="RightColum : contacte" class="notranslate" href="mailto:${this.newsletter.responder_mail}" style="text-decoration:none;font-size:13px;color:#c00000;" target="_blank" translate="no">
                                            <strong>&nbsp;${this.newsletter.responder_nombre}</strong>
                                        </a>
                                    </span>
                                </td>
                            </tr>`;

            if (this.newsletter.tel1) {
                var tel1 = `
                <br>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tel: ${this.newsletter.tel1}</span>
                `;
                col_der_info_start = col_der_info_start.split('</span>').join(`</span>
                ${tel1}
                `);
            };

            var responder2 = '';

            if (this.newsletter.responder_nombre2) {

                responder2 = `
                <tr class="inner contents estructura" style="width:100%;padding-top:0;padding-bottom:0;padding-right:10px;padding-left:10px;">
                    <td class="x13 al_right" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;line-height:19px !important;text-align:left;font-size:13px;" width="13" valign="top">
                        <img src="http://enviaments.accio.gencat.cat/ACC1O/cat/docs/enviaments/assets/Actes/arrow-vermell.png" alt="icona fletxa" style="border-width:0;">
                        <span class="x13" style="line-height:19px !important;font-size:13px;">
                            <a data-linkname="RightColum : contacte" class="notranslate" href="mailto:${this.newsletter.responder_mail2}" style="text-decoration:none;font-size:13px;color:#c00000;" target="_blank" translate="no">
                                <strong>&nbsp;${this.newsletter.responder_nombre2}</strong>
                            </a>
                        </span>
                    </td>
                </tr>
                `;

                if (this.newsletter.tel2) {
                    var tel2 = `
                <br>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tel: ${this.newsletter.tel2}</span>
                `;
                responder2 = responder2.split('</span>').join(`</span>
                ${tel2}
                `);
                }
                
            };

            var colabora_nombre1 = '';

            if (this.newsletter.colabora_nombre1) {

                colabora_nombre1 = `
                <!-- SEPARATOR -->
                <tr class="estructura">
                    <td style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;line-height:19px !important;" height="30"></td>
                </tr>
                <tr>
                    <td>
                        <span class="x13" style="line-height:19px !important;font-size:13px;"><br>
                            Colabora:
                        </span>
                        <br>
                        <br>
                        <span class="x13" style="line-height:19px !important;font-size:13px;">
                            <a data-linkname="RightColum : link" href="${this.newsletter.colabora_enlace1}?utm_source=ACT&amp;utm_medium=${this.newsletter.acto.fecha_acto_anyo}-${this.newsletter.numero}-content-inscriuthi&amp;utm_campaign=${this.newsletter.utmCampaing}" title="${this.newsletter.colabora_nombre1}" target="_blank" class="nodeco" style="text-decoration: none;color:#333333;text-align: left;">
                                <strong>${this.newsletter.colabora_nombre1}</strong>
                            </a>
                        </span>`;

                var colabora_nombre2 = '';

                if (this.newsletter.colabora_nombre2) {
                    colabora_nombre2 = `
                        <br>
                        <br>
                        <span class="x13" style="line-height:19px !important;font-size:13px;">
                            <a data-linkname="RightColum : link" href="${this.newsletter.colabora_enlace2}?utm_source=ACT&amp;utm_medium=${this.newsletter.acto.fecha_acto_anyo}-${this.newsletter.numero}-content-inscriuthi&amp;utm_campaign=${this.newsletter.utmCampaing}" title="${this.newsletter.colabora_nombre2}" target="_blank" class="nodeco" style="text-decoration: none;color:#333333;text-align: left;">
                                <strong>${this.newsletter.colabora_nombre2}</strong>
                            </a>
                        </span>
                    </td>
                </tr>
                `;

                 }
            }

            var coorganitzat_nombre1 = '';

            if (this.newsletter.coorganitzat_nombre1) {

                coorganitzat_nombre1 = `
                <tr>
                    <td>
                        <span class="x13" style="line-height:19px !important;font-size:13px;"><br>
                            Coorganitzat amb:
                        </span>
                        <br>
                        <br>
                        <span class="x13" style="line-height:19px !important;font-size:13px;">
                            <a data-linkname="RightColum : link" href="${this.newsletter.coorganitzat_enlace1}?utm_source=ACT&amp;utm_medium=${this.newsletter.acto.fecha_acto_anyo}-${this.newsletter.numero}-content-inscriuthi&amp;utm_campaign=${this.newsletter.utmCampaing}" title="${this.newsletter.coorganitzat_nombre1}" target="_blank" class="nodeco" style="text-decoration: none;color:#333333;text-align: left;">
                                <strong>${this.newsletter.coorganitzat_nombre1}</strong>
                            </a>
                        </span>`;

                var coorganitzat_nombre2 = '';

                if (this.newsletter.coorganitzat_nombre2) {
                    coorganitzat_nombre2 = `
                        <br>
                        <br>
                        <span class="x13" style="line-height:19px !important;font-size:13px;">
                            <a data-linkname="RightColum : link" href="${this.newsletter.coorganitzat_enlace2}?utm_source=ACT&amp;utm_medium=${this.newsletter.acto.fecha_acto_anyo}-${this.newsletter.numero}-content-inscriuthi&amp;utm_campaign=${this.newsletter.utmCampaing}" title="${this.newsletter.coorganitzat_nombre2}" target="_blank" class="nodeco" style="text-decoration: none;color:#333333;text-align: left;">
                                <strong>${this.newsletter.coorganitzat_nombre2}</strong>
                            </a>
                        </span>
                    </td>
                </tr>
                `;

                 }
            }

            var enlaces_1 = '';

            if (this.newsletter.enlaces_nombre1) {

                enlaces_1 = `
                    
                    <!-- SEPARATOR -->
                    <tr>
                        <td style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;line-height:10px !important; font-size:10px;" height="10">&nbsp;</td>
                    </tr>
                    <tr class="estructura">
                        <td style ="padding_ 0px 0px 0px 15px;line-height 19px !important; font-size:13px;text-align:left;text-decoration:none;" target:"_blank;">
                            <table style="border-spacing:0; font-family:Arial,Helvetica,sans-serif;color:#333333;" width="100% ">
                                <tbody>
                                    <tr class="inner contents estructura" style="width:100%;padding-top:0;padding-bottom:0;padding-right:10px;padding-left:10px;">
                                        <td class="x13 al_right" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;line-height:19px !important;text-align:left;font-size:13px;" width="13" valign="top">
                                            <img src="http://enviaments.accio.gencat.cat/ACC1O/cat/docs/enviaments/assets/Actes/arrow-vermell.png" alt="icona fletxa" style="border-width:0;position:relative;top:4px;">
                                        </td>
                                        <td class="x13 al_left inner " style="line-height:19px !important;padding-top:0;padding-bottom:0;padding-right:0px;padding-left:0px;text-align:left;font-size:13px;" valign="top">
                                            <span class="x13" style="line-height:19px !important;font-size:13px;">
                                                <a data-linkname="RightColum : link1" class="notranslate" href="${this.newsletter.enlaces_enlace1}?utm_source=ACT&amp;utm_medium=${this.newsletter.acto.fecha_acto_anyo}-${this.newsletter.numero}-content-link1&amp;utm_campaign=${this.newsletter.utmCampaing}" style="text-decoration:none;font-size:13px;color:#c00000;" target="_blank" translate="no">
                                                    <strong>${this.newsletter.enlaces_nombre1}</strong>
                                                </a>
                                            </span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    `;
            }

            var enlaces_2 = '';

            if (this.newsletter.enlaces_nombre2) {

                enlaces_2 = `
                    <!-- SEPARATOR -->
                    <tr>
                        <td style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;line-height:10px !important; font-size:10px;" height="10">&nbsp;</td>
                    </tr>
                    <tr class="estructura">
                        <td style ="padding_ 0px 0px 0px 15px;line-height 19px !important; font-size:13px;text-align:left;text-decoration:none;" target:"_blank;">
                            <table style="border-spacing:0; font-family:Arial,Helvetica,sans-serif;color:#333333;" width="100% ">
                                <tbody>
                                    <tr class="inner contents estructura" style="width:100%;padding-top:0;padding-bottom:0;padding-right:10px;padding-left:10px;">
                                        <td class="x13 al_right" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;line-height:19px !important;text-align:left;font-size:13px;" width="13" valign="top">
                                            <img src="http://enviaments.accio.gencat.cat/ACC1O/cat/docs/enviaments/assets/Actes/arrow-vermell.png" alt="icona fletxa" style="border-width:0;position:relative;top:4px;">
                                        </td>
                                        <td class="x13 al_left inner " style="line-height:19px !important;padding-top:0;padding-bottom:0;padding-right:0px;padding-left:0px;text-align:left;font-size:13px;" valign="top">
                                            <span class="x13" style="line-height:19px !important;font-size:13px;">
                                                <a data-linkname="RightColum : link1" class="notranslate" href="${this.newsletter.enlaces_enlace2}?utm_source=ACT&amp;utm_medium=${this.newsletter.acto.fecha_acto_anyo}-${this.newsletter.numero}-content-link2&amp;utm_campaign=${this.newsletter.utmCampaing}" style="text-decoration:none;font-size:13px;color:#c00000;" target="_blank" translate="no">
                                                <strong>${this.newsletter.enlaces_nombre2}</strong>
                                                </a>
                                            </span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                `;
            }
            var enlaces_3 = '';

            if (this.newsletter.enlaces_nombre3) {

                enlaces_3 = `

                <!-- SEPARATOR -->
                <tr>
                    <td style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;line-height:10px !important; font-size:10px;" height="10">&nbsp;</td>
                </tr>
                <tr class="inner contents estructura" style="width:100%;padding-top:0;padding-bottom:0;padding-right:10px;padding-left:10px;">
                    <td class="x13 al_right" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;line-height:19px !important;text-align:left;font-size:13px;" width="13" valign="top">
                        <img src="http://enviaments.accio.gencat.cat/ACC1O/cat/docs/enviaments/assets/Actes/arrow-vermell.png" alt="icona fletxa" style="border-width:0;">
                    </td>
                    <td class="x13 al_left inner " style="line-height:19px !important;padding-top:0;padding-bottom:0;padding-right:0px;padding-left:0px;text-align:left;font-size:13px;" valign="top">
                        <span class="x13" style="line-height:19px !important;font-size:13px;">
                            <a data-linkname="RightColum : link1" class="notranslate" href="${this.newsletter.enlaces_enlace3}?utm_source=ACT&amp;utm_medium=${this.newsletter.acto.fecha_acto_anyo}-${this.newsletter.numero}-content-link3&amp;utm_campaign=${this.newsletter.utmCampaing}" style="text-decoration:none;font-size:13px;color:#c00000;" target="_blank" translate="no">
                                ${this.newsletter.enlaces_nombre3}
                            </a>
                        </span>
                    </td>
                </tr>
                `;
            }
            

                const col_der_info_ends = `
                        </tbody>
                    </table>
                </td>
            </tr>
        </tbody>
    </table>
                    <!--[if (gte mso 9)|(IE)]>
                    </td>
                    </tr>
                    </table>
                    <![endif]-->
      `;

      const footer  = `
      <!-- ________ INICI FOOTER ___________________________________________________________________________________________________________________________ -->
	
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
</html>
      `;
    

    this.html.emit(part_header + cuerpo_gris + parrafos_ini + parrafos + parrafos_fin + parte_inscriu + imatge + col_der_info_start + responder2 + colabora_nombre1 + colabora_nombre2 + coorganitzat_nombre1 + coorganitzat_nombre2 + enlaces_1 + enlaces_2 + enlaces_3 + col_der_info_ends + footer);

    
}

}
