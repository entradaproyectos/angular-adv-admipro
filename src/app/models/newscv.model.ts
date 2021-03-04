import { BitlyClient } from 'bitly';
import { Acto } from './acto.model';


export class Newscv{

    constructor(

        public acto:Acto,
        public numero:number,
        public utmCampaing:string,
        public responder_nombre:string,
        public responder_mail:string,
        public asunto:string,
        public preheader:string,
// 
        public inscriu:string,

        public parrafos:string,

        public tel1?:string,
        
        public responder_nombre2?:string,
        public responder_mail2?:string,
        public tel2?:string,

        public colabora_nombre1?:string,
        public colabora_enlace1?:string,
        public colabora_imagen1?:string,

        public colabora_nombre2?:string,
        public colabora_enlace2?:string,
        public colabora_imagen2?:string,

        public coorganitzat_nombre1?:string,
        public coorganitzat_enlace1?:string,
        public coorganitzat_imagen1?,
        
        public coorganitzat_nombre2?:string,
        public coorganitzat_enlace2?:string,
        public coorganitzat_imagen2?:string,

        public enlaces_nombre1?:string,
        public enlaces_enlace1?:string,
        public enlaces_nombre2?:string,
        public enlaces_enlace2?:string,
        public enlaces_nombre3?:string,
        public enlaces_enlace3?:string,

        public img?:File,

        public enlace:string = acto.enlace,
        public _id_acto:string = acto._id,

        public tipo:string = 'ACT',

        public enlace_recomana_xxss?:string,
        public enlace_recomana_xxss_mini_sin_http?:string,
        
        public titulo?:string,
        public titulo_amigable?:string,
        public titulo_amigable_short?:string,
        public titulo_percent?:string,
        
        public asunto_percent?:string,
        
        public preheader_percent?:string,
        
        public fecha_acto_texto?:string,
        public hora_acto_texto?:string,
        public fecha_acto_texto_dia_semana?:string,
        public fecha_acto?:Date,
        public fecha_acto_anyo?:string,

        public termini_inscr_texto?:string,
        public termini_inscr?:Date,

        public filename_html?:string,

        public html?:string,
        public htmlText?:string,

        public _id?:string,
        public bitly = new BitlyClient('a5f7e0198e2a6d7f7f7528d8184dfd53b18871fd', {})
        
        ){

        this.titulo = acto.titulo;
        this.titulo_amigable = acto.titulo_amigable;
        this.titulo_amigable_short = acto.titulo_amigable_short;
        this.titulo_percent = acto.titulo_percent;

        this.fecha_acto_texto = acto.fecha_acto_texto;
        this.hora_acto_texto = acto.hora_acto_texto;
        this.fecha_acto_texto_dia_semana = acto.fecha_acto_texto_dia_semana;
        this.fecha_acto_anyo = acto.fecha_acto_anyo;

//avui

if (this.hora_acto_texto) {
    const hora_array = this.hora_acto_texto.split(' ');
    // console.log('en modelo',hora_array);
    const hora_empieza_array = hora_array[1].split('.');
    const hora_empieza = hora_empieza_array[0];
    const min_empieza = hora_empieza_array[1];
}

        const fecha_array = this.fecha_acto_texto.split(' ');

        var mes = '';
        var anyo_empieza = '';
        var anyo_empieza_2cifras = '';

        if (fecha_array.length === 4) {
            mes = fecha_array[1].slice(2);
            // this.fecha_acto_anyo = fecha_array[3].slice(2);
            anyo_empieza = fecha_array[3];
            anyo_empieza_2cifras = anyo_empieza.slice(2);

            
            // console.log(mes);
        }else{
            mes = fecha_array[2];
            // this.fecha_acto_anyo = fecha_array[4].slice(2);
            anyo_empieza = fecha_array[4];
            anyo_empieza_2cifras = anyo_empieza.slice(2);

        }

        // console.log(mes);
        
		var dies = ["Diumenge","Dilluns", "Dimarts", "Dimecres", "Dijous", "Divendres", "Dissabte"];
        var mesos = ["gener", "febrer", "març", "abril", "maig", "juny", "juliol", "agost", "setembre", "octubre", "novembre","desembre"];
        
		this.fecha_acto = new Date(acto.fecha_acto_num);
        this.fecha_acto_texto_dia_semana = acto.fecha_acto_texto_dia_semana;

        const DIA_EN_MILISEGUNDOS = 24*60*60*1000;

        const fecha_acto_mili = new Date(acto.fecha_acto_num).getTime(); 

        const ayer_a = new Date(fecha_acto_mili - DIA_EN_MILISEGUNDOS);

        const ayer_anyo = ayer_a.getFullYear();
        const ayer_mes = ayer_a.getMonth();
        const ayer_dia = ayer_a.getDate();
        const viernes_anterior_a = new Date(Number(acto.fecha_acto_num) - (DIA_EN_MILISEGUNDOS*3));
        const viernes_anterior_anyo = viernes_anterior_a.getFullYear();
        const viernes_anterior_mes = viernes_anterior_a.getMonth();
        const viernes_anterior_dia = viernes_anterior_a.getDate();

        const envio_hoy_pronto = new Date(Number(anyo_empieza),mesos.indexOf(mes),Number(fecha_array[0]),7,0,0);
        const envio_ayer_pronto = new Date(ayer_anyo,ayer_mes,ayer_dia,7,0,0);

        const envio_viernes = new Date(viernes_anterior_anyo,viernes_anterior_mes,viernes_anterior_dia,7,0,0);


        // console.log(new Date(acto.fecha_acto_num).getTime());

        if (this.asunto) {
            const asunto_percent_0 = (this.asunto.replace("'"," ")) || '';
            this.asunto_percent = encodeURI(asunto_percent_0) || '';
        }
        if (this.preheader) {
            const preheader_percent_0 = this.preheader.replace("'"," ") || '';
            this.preheader_percent = encodeURI(preheader_percent_0) || '';
        }

        this.filename_html = `${this.tipo}-${this.fecha_acto_anyo}-${this.numero}-${utmCampaing}_${this.titulo_amigable}`;

        this.enlace_recomana_xxss = `${this.enlace}?utm_source=${this.tipo}&amp;utm_medium=${anyo_empieza_2cifras}-${this.numero}-compartit-recomanacio&amp;utm_campaing=${utmCampaing}`;

        // console.log(this.enlace_recomana_xxss);
        
        this.init(this.enlace_recomana_xxss).then((value) => {
            this.enlace_recomana_xxss_mini_sin_http = value.link.slice(8);
        });
        
    }

    async init(url:string) {
        let result;
        try {
          result = await this.bitly.shorten(url);
        } catch (e) {
          throw e;
        }
        return result;
      }
      
}