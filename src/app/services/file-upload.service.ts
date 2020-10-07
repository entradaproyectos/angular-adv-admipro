import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

const baseUrl = environment.baseUrl;

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  

  constructor() { }

  async actualizarFoto(archivo:File,tipo:'usuarios'|'medicos'|'haospitales', id:string){

    try {

      const url = `${baseUrl}/uploads/${tipo}/${id}`;
      const formData = new FormData();
      formData.append('imagen',archivo);

      const resp = await fetch(url,{
        method:'PUT',
        headers: {
          'x-token':localStorage.getItem('token') || ''
        },
        body: formData
      });

      const data = await resp.json();
      console.log(data);

      if (data.ok) {
        return data.nombreArchivo;
      }else{
        console.log(data.msg);
        return false;
      }

      return 'nombre de la imagen';


    } catch (error) {
      console.log(error);
      return false;
    }

  }
}