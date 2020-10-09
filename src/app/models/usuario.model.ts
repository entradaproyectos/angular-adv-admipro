import { environment } from '../../environments/environment';
const base_url = environment.baseUrl;
export class Usuario{

    constructor(
        public nombre:string,
        public email:string,
        public password:string,
        public img?:string,
        public google?:boolean,
        public role?:string,
        public uid?:string
    ){};

    get imagenUrl(){
        // console.log(this.img);
        if (!this.img) {
            return `${base_url}/uploads/usuarios/no-img`;
        }else if (this.img.includes('https')) {
            return this.img;
        }else if(this.img){
            return `${base_url}/uploads/usuarios/${this.img}`;
        }else{
            // console.log(`${base_url}/uploads/no-img.png`);
            return `${base_url}/uploads/usuarios/no-img`;
        }

    }
}