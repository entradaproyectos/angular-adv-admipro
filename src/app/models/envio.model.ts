
export class Envio{

    constructor(

        public nom_enviament:string,
        public campanya:string,
        public estat:string,
        public data_inici:number,
        public data_enviament:number,
        public enviaments_fets:number,
        public tipo?:string,
        public numero?:number,
        public anyo_codi?:number,
        public anyo?:number,
        public id_email?:string,
        public data_primeres_dades?:number,
        public primera_gravacio?:boolean,
        public segona_gravacio?:boolean,
        public data_10dies?:number,
        public primeres_dades?: {
            enviaments_total:number,
            enviaments_fets:number,
            enviaments_no_fets:number,
            enviaments_retornats:number,
            enviaments_oberts:number,
            enviaments_click_unic:number,
            enviaments_click_contactes:number
        },
        public segones_dades?:{
            enviaments_total:number,
            enviaments_fets:number,
            enviaments_no_fets:number,
            enviaments_retornats:number,
            enviaments_oberts:number,
            enviaments_click_unic:number,
            enviaments_click_contactes:number
        },
        public data_estimada?:number,
        
        
        ){

//tipo
//REC-21-19-DGI_
//ACT-21-17-ES-FIN_
//ACCIOinforma_num_277
//agenda-324
//AL-21-7-cluster_
//POST-21-3-ES-FIN_
//RA-005_
//REC-21-19-DGI_

            var tipo_v = '';
            var numero_v = 0;
            var anyo_codi_v = 0;

            if (this.nom_enviament.includes('ACCIOinforma')) {
                const nom_env_arr = this.nom_enviament.split('_');
                tipo_v = 'ACCIOinforma';
                numero_v = parseInt(nom_env_arr[2]);
            }else if (this.nom_enviament.includes('agenda')){
                const nom_env_arr = this.nom_enviament.split('-');
                tipo_v = nom_env_arr[0];
                numero_v = parseInt(nom_env_arr[2]);
            }else if (this.nom_enviament.includes('RA-')){
                const nom_env_arr = this.nom_enviament.split('-');
                tipo_v = 'RADAR';
                numero_v = parseInt(nom_env_arr[1]);
            }else{
                const nom_env_arr = this.nom_enviament.split('_');
                const codi = nom_env_arr[0];
                const codi_ar = codi.split('-');
                tipo_v = codi_ar[0];
                anyo_codi_v = parseInt(codi_ar[1]);
                numero_v = parseInt(codi_ar[2]);

            }
            this.tipo = tipo_v;
            this.numero = numero_v;
            this.anyo_codi = anyo_codi_v;
            this.anyo = parseInt('20' + anyo_codi_v);

            this.data_10dies = this.data_inici + 864000000;

            

        }

        

        


      
}