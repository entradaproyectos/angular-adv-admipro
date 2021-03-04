import { agendaDestaquem, agendaPropers } from '../interfaces/agenda.interface';
import { BitlyClient } from 'bitly';




export class Agenda{

    constructor(

        public titulo:string,
        public numero:number,
        public anyo:number,
        public destacats:agendaDestaquem,
        public propersSeminaris:agendaPropers[],
        public enlace:string,
        public sacaba?:agendaPropers[],
        public obert?:agendaPropers[],
        public enlace_bit?:string,
        public bitly = new BitlyClient('a5f7e0198e2a6d7f7f7528d8184dfd53b18871fd', {})
        
    ){

        
        this.init(this.enlace).then((value) => {
            this.enlace_bit = value.link.slice(8);
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