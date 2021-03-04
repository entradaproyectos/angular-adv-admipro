import { Routes, RouterModule, CanActivate } from '@angular/router';
import { NgModule } from '@angular/core';

import { AuthGuard } from '../guards/auth.guard';

import { PagesComponent } from './pages.component';

import { DashboardComponent } from './dashboard/dashboard.component';

import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { AccountSttingsComponent } from './account-sttings/account-sttings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxJsComponent } from './rx-js/rx-js.component';
import { PerfilComponent } from './perfil/perfil.component';

//mantenimientos
import { UsuariosComponent } from './mantenimientos/usuarios/usuarios.component';
// import { HospitalesComponent } from './mantenimientos/hospitales/hospitales.component';
// import { MedicosComponent } from './mantenimientos/medicos/medicos.component';
import { NewslettersComponent } from './mantenimientos/newsletters/newsletters.component';
import { ActosComponent } from './mantenimientos/actos/actos.component';

//crear
import { CrearRecComponent } from './crear/crear-rec/crear-rec.component';
import { CrearActCvComponent } from './crear/crear-act-cv/crear-act-cv.component';
import { CrearAgendaComponent } from './crear/crear-agenda/crear-agenda.component';
import { CrearAccioInformaComponent } from './crear/crear-accio-informa/crear-accio-informa.component';

//agenda
import { ImportarActosComponent } from './agenda/importar-actos/importar-actos.component';
import { AgendaComponent } from './agenda/agenda/agenda.component';
import { NotificacionesComponent } from './agenda/notificaciones/notificaciones.component';
import { CrearActoComponent } from './agenda/crear-acto/crear-acto.component';

// no visibles en dashboard
import { EditarActoComponent } from './agenda/editar-acto/editar-acto.component';

import { EnviosComponent } from './dashboard/envios/envios.component';

//mini apps
import { RecortarImagenComponent } from './mini-apps/recortar-imagen/recortar-imagen.component';
import { EnviosImportarDetalleComponent } from './dashboard/envios-importar-detalle/envios-importar-detalle.component';


const routes: Routes = [
    
    { 
        path: 'dashboard', 
        component: PagesComponent ,
        canActivate: [AuthGuard],
        children: [
          { path: 'account-settings', component: AccountSttingsComponent, data: {titulo: 'Ajustes de cuenta'} },
          { path: 'perfil', component: PerfilComponent, data: {titulo: 'Perfil de Usuario'} },
          //dashboard
          { path: '', component: DashboardComponent, data: {titulo: 'Dashboard'} },
          { path: 'grafica1', component: Grafica1Component, data: {titulo: 'Gráfica1'} },
          { path: 'progress', component: ProgressComponent, data: {titulo: 'Progress'} },
          { path: 'promesas', component: PromesasComponent, data: {titulo: 'Promesas'} },
          { path: 'rxjs', component: RxJsComponent, data: {titulo: 'RxJs'} },
          { path: 'envios', component: EnviosComponent, data: {titulo: 'Envíos'} },
          { path: 'envios-importar-detalle', component: EnviosImportarDetalleComponent, data: {titulo: 'Envíos importar Detalle'} },
          //mini apps
          { path: 'recortar-imagen', component: RecortarImagenComponent, data: {titulo: 'Recortar Imagen'} },
          //agenda
          { path: 'crear-acto', component: CrearActoComponent, data: {titulo: 'Crear Acto'} },
          { path: 'importar', component: ImportarActosComponent, data: {titulo: 'Importar Actos desde Agenda'} },
          { path: 'agenda', component: AgendaComponent, data: {titulo: 'Agenda Planificada'} },
          { path: 'notificaciones', component: NotificacionesComponent, data: {titulo: 'Notificaciones'} },
          { path: 'editar-acto/:id', component: EditarActoComponent, data: {titulo: 'Editar Acto'} },
        //mantenimientos
          { path: 'usuarios', component: UsuariosComponent, data: {titulo: 'Mantenimento de Usuarios'} },
          { path: 'newsletters', component: NewslettersComponent, data: {titulo: 'Mantenimento de Newsletter'} },
          { path: 'actos', component: ActosComponent, data: {titulo: 'Mantenimento de Actos'} },
        //crear
            { path: 'crear-rec/:id', component: CrearRecComponent, data: {titulo: 'Crear Recordatori'} },
            { path: 'crear-act-cv/:id', component: CrearActCvComponent, data: {titulo: 'Crear Convocatoria'} },
            { path: 'crear-agenda', component: CrearAgendaComponent, data: {titulo: 'Crear Agenda'} },
            { path: 'crear-accio-informa', component: CrearAccioInformaComponent, data: {titulo: 'Crear Acció Informa'} }
        ]
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
