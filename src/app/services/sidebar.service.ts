import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu:any[] = 
  [
    {
      titulo:'Dashboard!!!',
      icono:'mdi mdi-gauge',
      submenu: 
      [
        {titulo:'Main',url:'/'},
        {titulo:'Importar envios Página',url:'envios'},
        {titulo:'Importar envios Detalle',url:'envios-importar-detalle'}
        // {titulo:'ProgressBar',url:'progress'},
        // {titulo:'Gráficas',url:'grafica1'},
        // {titulo:'Promesas',url:'promesas'},
        // {titulo:'rxJs',url:'rxjs'}
      ]
    },
    {
      titulo:'Mini Apps',
      icono:'fa fa-rocket',
      submenu: 
      [
        {titulo:'Recortar Imagen',url:'recortar-imagen'}
      ]
    },
    {
      titulo:'Agenda',
      icono:'mdi mdi-book-multiple',
      submenu: 
      [
        {titulo:'Crear Acto',url:'crear-acto'},
        {titulo:'Importar Actos',url:'importar'},
        {titulo:'Agenda Planificada',url:'agenda'},
        {titulo:'Notificaciones',url:'notificaciones'}
      ]
    },
    {
      titulo:'Crear',
      icono:'mdi mdi-creation',
      submenu: 
      [
        // {titulo:'Recordatori',url:'crear-rec'},
        // {titulo:'Convocatoria',url:'crear-act-cv'},
        {titulo:'Agenda',url:'crear-agenda'},
        {titulo:'Acció Informa',url:'crear-accio-informa'}
      ]
    },
    {
      titulo:'Mantenimiento',
      icono:'mdi mdi-folder-lock-open',
      submenu: 
      [
        {titulo:'Actos',url:'actos'},
        {titulo:'Newsletters',url:'newsletters'},
        // {titulo:'Médicos',url:'medicos'}
        {titulo:'Usuarios',url:'usuarios'},
      ]
    }
  ]

  constructor() { }
}
