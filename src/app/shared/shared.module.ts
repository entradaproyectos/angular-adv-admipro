import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { ImageCropperModule } from 'ngx-image-cropper';
import { AngularEditorModule } from '@kolkov/angular-editor';
// https://www.skypack.dev/view/@kolkov/angular-editor?from=pika

import { CropimageComponent } from './cropimage/cropimage.component';
import { TexteditorComponent } from './texteditor/texteditor.component';

import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';

import { RecComponent } from './rec/rec.component';
import { ActcvComponent } from './actcv/actcv.component';

import { CropimageTodosComponent } from './cropimage-todos/cropimage-todos.component';
import { Cropimage180Component } from './cropimage180/cropimage180.component';
import { Cropimage278x128Component } from './cropimage278x128/cropimage278x128.component';
import { Cropimage600x117Component } from './cropimage600x117/cropimage600x117.component';
import { Cropimage270x154Component } from './cropimage270x154/cropimage270x154.component';
import { Cropimage600x258Component } from './cropimage600x258/cropimage600x258.component';
import { Cropimage600x300Component } from './cropimage600x300/cropimage600x300.component';
import { TextEditorAgendaComponent } from './text-editor-agenda/text-editor-agenda.component';
import { SharedAgendaComponent } from './shared-agenda/shared-agenda.component';
import { DestacatAgendaComponent } from './destacat-agenda/destacat-agenda.component';
import { ProperAgendaComponent } from './proper-agenda/proper-agenda.component';
import { TexteditorEnviospagComponent } from './texteditor-enviospag/texteditor-enviospag.component';
import { TexteditorEnviosDetalleComponent } from './texteditor-envios-detalle/texteditor-envios-detalle.component';





@NgModule({
  declarations: [
    BreadcrumbsComponent,
    SidebarComponent,
    HeaderComponent,
    RecComponent,
    CropimageComponent,
    ActcvComponent,
    TexteditorComponent,
    CropimageTodosComponent,
    Cropimage180Component,
    Cropimage278x128Component,
    Cropimage600x117Component,
    Cropimage270x154Component,
    Cropimage600x258Component,
    Cropimage600x300Component,
    TextEditorAgendaComponent,
    SharedAgendaComponent,
    DestacatAgendaComponent,
    ProperAgendaComponent,
    TexteditorEnviospagComponent,
    TexteditorEnviosDetalleComponent
  ],
  exports: [
    BreadcrumbsComponent,
    SidebarComponent,
    HeaderComponent,
    RecComponent,
    CropimageComponent,
    CropimageTodosComponent,
    Cropimage180Component,
    Cropimage270x154Component,
    Cropimage278x128Component,
    Cropimage600x117Component,
    Cropimage600x258Component,
    Cropimage600x300Component,
    ActcvComponent,
    TexteditorComponent,
    TextEditorAgendaComponent,
    SharedAgendaComponent,
    AngularEditorModule,
    HttpClientModule,
    FormsModule,
    TexteditorEnviospagComponent,
    TexteditorEnviosDetalleComponent


  ],
  imports: [
    CommonModule,
    RouterModule,
    ImageCropperModule,
    AngularEditorModule,
    HttpClientModule,
    FormsModule

  ]
})
export class SharedModule { }
