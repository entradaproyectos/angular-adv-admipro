import { EventEmitter, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';

const baseUrl = environment.baseUrl;

@Injectable({
  providedIn: 'root'
})
export class ModelImagenService {

  private _ocultarModal:boolean = true;

  public tipo: 'usuarios' | 'medicos' | 'hospitales';
  public id:string;
  public img:string;

  public nuevaImagen:EventEmitter<string> = new EventEmitter<string>();

  get ocultarModal(){
    return this._ocultarModal;
  }

  constructor() { }

  abrirModal(tipo:'usuarios' | 'medicos' | 'hospitales', id:string, img:string='no-img'){
    this._ocultarModal = false;
    this.tipo = tipo;
    this.id = id;
    //http://localhost:3000/api/uploads/usuarios/no-img
    if (img.includes('https')) {
      this.img = img;
    }else{
      this.img = `${baseUrl}/uploads/${tipo}/${img}`;
      console.log(this.img);
    }

    // this.img = img;
  }

  cerrarModal(){
    this._ocultarModal = true;

  }

}
