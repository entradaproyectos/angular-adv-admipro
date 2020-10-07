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


const routes: Routes = [
    
    { 
        path: 'dashboard', 
        component: PagesComponent ,
        canActivate: [AuthGuard],
        children: [
          { path: '', component: DashboardComponent, data: {titulo: 'Dashboard'} },
          { path: 'account-settings', component: AccountSttingsComponent, data: {titulo: 'Ajustes de cuenta'} },
          { path: 'grafica1', component: Grafica1Component, data: {titulo: 'Gráfica1'} },
          { path: 'progress', component: ProgressComponent, data: {titulo: 'Progress'} },
          { path: 'promesas', component: PromesasComponent, data: {titulo: 'Promesas'} },
          { path: 'rxjs', component: RxJsComponent, data: {titulo: 'RxJs'} },
          { path: 'perfil', component: PerfilComponent, data: {titulo: 'Perfil de Usuario'} }
        ]
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
