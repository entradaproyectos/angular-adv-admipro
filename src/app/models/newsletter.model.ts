import { BitlyClient } from 'bitly';

export class Newsletter{

    constructor(

        public enlace:string,
        public tipo:string,
        public numero:number,
        public utmCampaing:string,
        public titulo:string,
        public fecha_acto_texto:string,
        public hora_acto_texto:string,
        public termini_inscr_texto:string,
        
        public enlace_princ_mini?:string,
        public enlace_mini_sin_http?:string,

        public enlace_recomana_xxss?:string,
        public enlace_recomana_xxss_mini_sin_http?:string,

        public enlace_chat?:string,

        public titulo_amigable?:string,
        public titulo_amigable_short?:string,
        public titulo_percent?:string,
        public asunto?:string,
        public asunto_percent?:string,
        public preheader?:string,
        public preheader_percent?:string,
        public responder_nombre?:string,
        public responder_mail?:string,
        public fecha_acto_texto_dia_semana?:string,
        public fecha_acto?:Date,
        public fecha_acto_anyo?:string,
        public avui?:string,
        public termini_inscr?:Date,
        public fecha_sale_mail?:Date,
        public html?:string,
        public texto?:string,
        public _id?:string,
        public bitly = new BitlyClient('a5f7e0198e2a6d7f7f7528d8184dfd53b18871fd', {})

    ){

        // console.log(enlace);
        // console.log(tipo);
        // console.log(numero);
        // console.log(utmCampaing);
        // console.log(titulo);
        // console.log(fecha_acto_texto);
        // console.log(hora_acto_texto);
        // console.log(termini_inscr_texto);

        const titulo_percent_0 = titulo.replace("'"," ");
        this.titulo_percent = encodeURI(titulo_percent_0);

        const hora_array = hora_acto_texto.split(' ');
        const hora_empieza_array = hora_array[1].split('.');
        const hora_empieza = hora_empieza_array[0];
        const min_empieza = hora_empieza_array[1];

        const fecha_array = fecha_acto_texto.split(' ');
        // console.log(fecha_array);

        var mes = '';
        var anyo_empieza = '';
        var anyo_empieza_2cifras = '';

        if (fecha_array.length === 4) {
            mes = fecha_array[1].slice(2);
            this.fecha_acto_anyo = fecha_array[3].slice(2);
            anyo_empieza = fecha_array[3];
            anyo_empieza_2cifras = anyo_empieza.slice(2);

            
            // console.log(mes);
        }else{
            mes = fecha_array[2];
            this.fecha_acto_anyo = fecha_array[4].slice(2);
            anyo_empieza = fecha_array[4];
            anyo_empieza_2cifras = anyo_empieza.slice(2);

        }

        // console.log(mes);
        
		var dies = ["Diumenge","Dilluns", "Dimarts", "Dimecres", "Dijous", "Divendres", "Dissabte"];
        var mesos = ["gener", "febrer", "març", "abril", "maig", "juny", "juliol", "agost", "setembre", "octubre", "novembre","desembre"];
        
		this.fecha_acto = new Date(Number(anyo_empieza),mesos.indexOf(mes),Number(fecha_array[0]),Number(hora_empieza),Number(min_empieza),0);
        this.fecha_acto_texto_dia_semana = dies[this.fecha_acto.getUTCDay()];

        const DIA_EN_MILISEGUNDOS = 24*60*60*1000;
        const ayer_a = new Date(this.fecha_acto.getTime() - DIA_EN_MILISEGUNDOS);
        const ayer_anyo = ayer_a.getFullYear();
        const ayer_mes = ayer_a.getMonth();
        const ayer_dia = ayer_a.getDate();
        const viernes_anterior_a = new Date(this.fecha_acto.getTime() - (DIA_EN_MILISEGUNDOS*3));
        const viernes_anterior_anyo = viernes_anterior_a.getFullYear();
        const viernes_anterior_mes = viernes_anterior_a.getMonth();
        const viernes_anterior_dia = viernes_anterior_a.getDate();

        const envio_hoy_pronto = new Date(Number(anyo_empieza),mesos.indexOf(mes),Number(fecha_array[0]),7,0,0);
        const envio_ayer_pronto = new Date(ayer_anyo,ayer_mes,ayer_dia,7,0,0);

        const envio_viernes = new Date(viernes_anterior_anyo,viernes_anterior_mes,viernes_anterior_dia,7,0,0);


        if (!this.fecha_sale_mail) {
            if (Number(hora_empieza) > 14) {
                this.fecha_sale_mail = envio_hoy_pronto;
                this.fecha_acto_texto_dia_semana = dies[this.fecha_acto.getUTCDay()];
            }else if(Number(hora_empieza) < 15){
                if (this.fecha_acto_texto_dia_semana !== 'Dilluns') {
                    this.fecha_sale_mail = envio_ayer_pronto;
                }else if (this.fecha_acto_texto_dia_semana === 'Dilluns') {
                    this.fecha_sale_mail = envio_viernes;
                }
            }
        }
        
        if (this.fecha_acto.getDate() === this.fecha_sale_mail.getDate()) {
            this.asunto = `Recordatori i enllaç per connectar-te a la sessió d'avui. Comencem a les ${hora_empieza}.${min_empieza} h!`;
            this.avui = 'Avui';
        }else if(this.fecha_acto.getDate() !== this.fecha_sale_mail.getDate()){
            if (this.fecha_sale_mail === envio_ayer_pronto) {
                this.asunto = `Recordatori i enllaç per connectar-te a la sessió de demà. Comencem a les ${hora_empieza}.${min_empieza} h!`;
                this.avui = 'Demà';
            }else {
                this.asunto = `Recordatori i enllaç per connectar-te a la sessió de ${this.fecha_acto_texto_dia_semana.toLowerCase()}. Comencem ${hora_empieza}.${min_empieza} h!`;
                this.avui = 'Dilluns';
            }
        }



        const asunto_percent_0 = (this.asunto.replace("'"," ")) || '';
        this.asunto_percent = encodeURI(asunto_percent_0) || '';

        // _____________________________________________
        // Reemplaza los carácteres especiales | simbolos con un espacio 
        const amigable = this.titulo.replace(/[`~!@#$%^&*()_\-+=\[\]{};:'"\\|\/,.<>?\s]/g, ' ').toLowerCase();
        
        // Corta los espacios al inicio y al final del sluging 
        const amigable2 = amigable.replace(/^\s+|\s+$/gm, '');
        
        // Reemplaza el espacio con guión  
        const amigable3  = amigable2.replace(/\s+/g, '-');

        // Reemplaza acentos
        this.titulo_amigable  = amigable3.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

        if (this.titulo_amigable.length > 95) {
            this.titulo_amigable_short = this.titulo_amigable.substr(0,95);
        }else{
            this.titulo_amigable_short = this.titulo_amigable;
        }

        // _____________________________________________

        if (this.tipo === 'REC') {
            this.preheader = `${this.fecha_acto_texto_dia_semana}, ${this.fecha_acto_texto}`;
            // console.log(this.preheader);
            const preheader_percent_0 = this.preheader.replace("'"," ") || '';
            this.preheader_percent = encodeURI(preheader_percent_0) || '';
            this.responder_mail = 'agenda.accio@gencat.cat';
        }

        this.enlace_recomana_xxss = `${this.enlace}?utm_source=${this.tipo}&amp;utm_medium=${anyo_empieza_2cifras}-${this.numero}-compartit-recomanacio&amp;utm_campaing=${utmCampaing}`;

        this.init(this.enlace).then((value) => {
            this.enlace_princ_mini = value.link.slice(8);
        });
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