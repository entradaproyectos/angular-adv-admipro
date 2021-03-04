import { Component, OnInit } from '@angular/core';
import { ActosService } from '../../../services/actos.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';



import { Acto } from '../../../models/acto.model';

@Component({
  selector: 'app-editar-acto',
  templateUrl: './editar-acto.component.html',
  styleUrls: ['./editar-acto.component.css']
})
export class EditarActoComponent implements OnInit {

  acto:Acto = null;

  constructor(
    private actosService:ActosService,
    private route: ActivatedRoute,
		private router:Router
    
  ) { }

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');

		this.actosService.getActoId(id).subscribe( resp => {
		console.log(resp);
		this.acto = resp['acto'];
		console.log(this.acto);
    });
  }


  trim(enlace:string){

    if (enlace.includes('?backToSearch')){
      const enlace_arr = enlace.split('?backToSearch');
      this.acto.enlace = enlace_arr[0];
    }else{
      this.acto.enlace = enlace;
    }
  
  }


  actualizarActo(){

    Swal.fire({
			title: 'Quieres guardar este Acto?',
			showCancelButton: true,
			confirmButtonText: `Guardar`,
		  }).then((result) => {
			/* Read more about isConfirmed, isDenied below */
			if (result.isConfirmed) {
        this.actosService.actualizarActo(this.acto._id, this.acto).subscribe( resp => {
          if (resp['ok']) {
            this.router.navigateByUrl(`/dashboard/actos`);
            Swal.fire(`Guardado acto ${this.acto.titulo}`, '', 'success');
          }else{
            Swal.fire('Error, no se ha guardado', '', 'error');
          }
        })
			}else{
        Swal.fire('Cancelado', '', 'info');
      }
      })
      
  }


}


