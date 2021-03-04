import { BitlyClient } from 'bitly';
import { Acto } from './acto.model';

export class Newsrec{

    constructor(

        public acto:Acto,
        public numero:number,
        public utmCampaing:string,
        public enlace_chat:string,
        public enlace:string = acto.enlace,
        public _id_acto:string = acto._id,

        public tipo:string = 'REC',

        public enlace_recomana_xxss?:string,
        public enlace_recomana_xxss_mini_sin_http?:string,
        
        public titulo?:string,
        public titulo_amigable?:string,
        public titulo_amigable_short?:string,
        public titulo_percent?:string,
        
        public asunto?:string,
        public asunto_percent?:string,
        
        public preheader?:string,
        public preheader_percent?:string,
        
        public fecha_acto_texto?:string,
        public hora_acto_texto?:string,
        public fecha_acto_texto_dia_semana?:string,
        public fecha_acto?:Date,
        public fecha_acto_anyo?:string,
        public avui?:string,

        public termini_inscr_texto?:string,
        public termini_inscr?:Date,

        public fecha_sale_mail?:Date,

        public responder_mail?:string,

        public filename_html?:string,

        public html?:string,
        public _id?:string,

        public url_html?:string,
        public url_txt?:string,
        public htmlText?:string,

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
            var hora_empieza = hora_empieza_array[0];
            var min_empieza = hora_empieza_array[1];

        }else{
            var hora_empieza = '';
            var min_empieza = '';
        }

        // console.log('hora_empieza',hora_empieza);
        // console.log('min_empieza',min_empieza);

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

// console.log('hora_empieza',Number(hora_empieza));

        if (!this.fecha_sale_mail) {
            if (Number(hora_empieza) > 14) {
                this.fecha_sale_mail = envio_hoy_pronto;
                var envio_mismo_dia = acto.fecha_acto_num;
                this.avui = 'Avui';
                this.fecha_acto_texto_dia_semana = dies[this.fecha_acto.getUTCDay()];
            }else if(Number(hora_empieza) < 15){
                if (this.fecha_acto_texto_dia_semana !== 'Dilluns') {
                    this.fecha_sale_mail = envio_ayer_pronto;
                    var envio_mismo_dia = acto.fecha_acto_num;
                    this.avui = 'Demà';
                }else if (this.fecha_acto_texto_dia_semana === 'Dilluns') {
                    this.fecha_sale_mail = envio_viernes;
                    this.avui = 'Dilluns';
                }
            }
        }

        // console.log(new Date(acto.fecha_acto_num).getTime());
        // console.log(this.fecha_sale_mail.getTime());

        var avui_record:string;

        switch (this.avui) {
            case 'Avui':
                avui_record = "d'avui";
                break;
            case 'Demà':
                avui_record = "de demà";
                break;
        }

        if (Number(new Date(acto.fecha_acto_num).getTime()) === Number(new Date(envio_mismo_dia).getTime())) {
            this.asunto = `Recordatori i enllaç per connectar-te a la sessió ${avui_record}. Comencem a les ${hora_empieza}.${min_empieza} h!`;
        }else if(Number(new Date(acto.fecha_acto_num).getTime()) !== Number(new Date(envio_mismo_dia).getTime())){
            if (this.fecha_sale_mail === envio_ayer_pronto) {
                this.asunto = `Recordatori i enllaç per connectar-te a la sessió ${avui_record}. Comencem a les ${hora_empieza}.${min_empieza} h!`;
            }else {
                this.asunto = `Recordatori i enllaç per connectar-te a la sessió de ${this.fecha_acto_texto_dia_semana.toLowerCase()}. Comencem ${hora_empieza}.${min_empieza} h!`;
            }
        }

        const asunto_percent_0 = (this.asunto.replace("'"," ")) || '';
        this.asunto_percent = encodeURI(asunto_percent_0) || '';

        // _____________________________________________
        // Reemplaza los carácteres especiales | simbolos con un espacio 
        // const amigable = this.titulo.replace(/[`~!@#$%^&*()_\-+=\[\]{};:'"\\|\/,.<>?\s]/g, ' ').toLowerCase();
        
        // Corta los espacios al inicio y al final del sluging 
        // const amigable2 = amigable.replace(/^\s+|\s+$/gm, '');
        
        // Reemplaza el espacio con guión  
        // const amigable3  = amigable2.replace(/\s+/g, '-');

        // Reemplaza acentos
        // this.titulo_amigable  = amigable3.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

        // if (this.titulo_amigable.length > 95) {
        //     this.titulo_amigable_short = this.titulo_amigable.substr(0,95);
        // }else{
        //     this.titulo_amigable_short = this.titulo_amigable;
        // }

        // _____________________________________________

        // const a = '2020-11-11T10:00:00.000Z';
        // const b = new Date(a).getTime();
        // console.log(b);

        // _____________________________________________

        
        this.preheader = `${this.fecha_acto_texto_dia_semana}, ${this.fecha_acto_texto}`;
        // console.log(this.preheader);
        const preheader_percent_0 = this.preheader.replace("'"," ") || '';
        this.preheader_percent = encodeURI(preheader_percent_0) || '';

        this.responder_mail = 'agenda.accio@gencat.cat';

        this.filename_html = `${this.tipo}-${this.fecha_acto_anyo}-${this.numero}-${utmCampaing}_${this.titulo_amigable}`;

        this.enlace_recomana_xxss = `${this.enlace}?utm_source=${this.tipo}&amp;utm_medium=${anyo_empieza_2cifras}-${this.numero}-compartit-recomanacio&amp;utm_campaing=${utmCampaing}`;
        
        // this.init(this.enlace).then((value) => {
        //     this.enlace_princ_mini = value.link.slice(8);
        // });
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