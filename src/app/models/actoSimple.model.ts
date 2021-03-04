import { BitlyClient } from 'bitly';

export class ActoSimple{

    constructor(

        public enlace:string,
        public fecha_acto_texto?:string,
        

    ){

        this.fecha_acto_texto = '';
        const acto_arr = this.enlace.split('/');

        console.log(acto_arr);
   
        
    }

}