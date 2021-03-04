import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ImageCropperModule } from 'ngx-image-cropper';


import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';
import { AuthModule } from './auth/auth.module';

import { AppComponent } from './app.component';

import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { DomSanitizerPipe } from './pipes/dom-sanitizer.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NopagefoundComponent,
    DomSanitizerPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    AuthModule,
    ImageCropperModule
    ],
  providers: [DomSanitizerPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
