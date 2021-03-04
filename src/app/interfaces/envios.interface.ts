import { Envio } from '../models/envio.model';


export interface EnvioDePag{
    nom_enviament:string,
    campanya:string,
    estat:string,
    enviaments_fets:number,
    tipo:string,
    numero:number,
    anyo?:number,
    anyo_codi?:number,
    data_inici:number,
    data_enviament?:number,
    id_email?:string,
    data_primeres_dades?:number,
    data_estimada?:number,
    primera_gravacio?:boolean,
    segona_gravacio?:boolean,
    data_10dies?:number,
    primeres_dades?:{
        enviaments_total:number,
        enviaments_fets:number,
        enviaments_no_fets:number,
        enviaments_retornats:number,
        enviaments_oberts:number,
        enviaments_click_unic:number,
        enviaments_click_contactes:number
    },
    segones_dades?:{
        enviaments_total:number,
        enviaments_fets:number,
        enviaments_no_fets:number,
        enviaments_retornats:number,
        enviaments_oberts:number,
        enviaments_click_unic:number,
        enviaments_click_contactes:number
    }
}

export interface CargarEnvios{
    total:number;
    envios:Envio[];
}