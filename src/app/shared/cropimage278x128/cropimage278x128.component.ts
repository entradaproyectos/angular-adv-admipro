import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { FileUploadService } from '../../services/file-upload.service';
// https://github.com/Mawi137/ngx-image-cropper

@Component({
  selector: 'app-cropimage278x128',
  templateUrl: './cropimage278x128.component.html',
  styleUrls: ['./cropimage278x128.component.css']
})
export class Cropimage278x128Component implements OnInit {

  imageChangedEvent: any = '';
	croppedImage: any = '';
	originalImage: any = '';
	

	@Input() resizeToWidth:number;
	@Input() resizeToHeight:number;
  @Input() aspectRatio:number;
  
	@Output() imagenCortada: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
    this.originalImage = event.target.files[0];
    
    // console.log(this.fileChangeEvent);
    // console.log(this.originalImage);
    console.log(this.resizeToWidth);
    console.log(this.resizeToHeight);
    console.log(this.aspectRatio);
  }

  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
    this.imagenCortada.emit(this.croppedImage);
    // console.log(this.croppedImage);

  }

  imageLoaded() {
    // imageLoaded(image: HTMLImageElement) 
    // show cropper
  }

  cropperReady() {
    // cropper ready
  }

  loadImageFailed() {
    // show message
  }

  

}
