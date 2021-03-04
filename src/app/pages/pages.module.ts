import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


// modulos
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';

import { PagesComponent } from './pages.component';

import { Grafica1Component } from './grafica1/grafica1.component';
import { ProgressComponent } from './progress/progress.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountSttingsComponent } from './account-sttings/account-sttings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxJsComponent } from './rx-js/rx-js.component';

import { PerfilComponent } from './perfil/perfil.component';

import { UsuariosComponent } from './mantenimientos/usuarios/usuarios.component';
import { HospitalesComponent } from './mantenimientos/hospitales/hospitales.component';
import { MedicosComponent } from './mantenimientos/medicos/medicos.component';
import { NewslettersComponent } from './mantenimientos/newsletters/newsletters.component';
import { ActosComponent } from './mantenimientos/actos/actos.component';

import { CrearRecComponent } from './crear/crear-rec/crear-rec.component';
import { CrearActCvComponent } from './crear/crear-act-cv/crear-act-cv.component';
import { CrearAgendaComponent } from './crear/crear-agenda/crear-agenda.component';
import { CrearAccioInformaComponent } from './crear/crear-accio-informa/crear-accio-informa.component';

import { ImportarActosComponent } from './agenda/importar-actos/importar-actos.component';
import { AgendaComponent } from './agenda/agenda/agenda.component';
import { NotificacionesComponent } from './agenda/notificaciones/notificaciones.component';
import { CrearActoComponent } from './agenda/crear-acto/crear-acto.component';
import { EditarActoComponent } from './agenda/editar-acto/editar-acto.component';
import { EnviosComponent } from './dashboard/envios/envios.component';
import { RecortarImagenComponent } from './mini-apps/recortar-imagen/recortar-imagen.component';
import { EnviosImportarDetalleComponent } from './dashboard/envios-importar-detalle/envios-importar-detalle.component';







@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    PagesComponent,
    AccountSttingsComponent,
    PromesasComponent,
    RxJsComponent,
    PerfilComponent,
    UsuariosComponent,
    HospitalesComponent,
    MedicosComponent,
    NewslettersComponent,
    CrearRecComponent,
    CrearActCvComponent,
    CrearAgendaComponent,
    CrearAccioInformaComponent,
    ImportarActosComponent,
    AgendaComponent,
    NotificacionesComponent,
    CrearActoComponent,
    ActosComponent,
    EditarActoComponent,
    EnviosComponent,
    RecortarImagenComponent,
    EnviosImportarDetalleComponent
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    PagesComponent,
    AccountSttingsComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule,
    ComponentsModule
  ]
})
export class PagesModule { }
