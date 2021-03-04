import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { FileUploadService } from '../../services/file-upload.service';
// https://github.com/Mawi137/ngx-image-cropper


	@Component({
	selector: 'app-cropimage',
	templateUrl: './cropimage.component.html',
	styleUrls: ['./cropimage.component.css']
	})

export class CropimageComponent implements OnInit {

	imageChangedEvent: any = '';
	croppedImage: any = '';
	originalImage: any = '';
	

	@Input() resizeToWidth:number;
	@Input() resizeToHeight:number;
	@Input() aspectRatio:string;

	@Output() imagenCortada: EventEmitter<any> = new EventEmitter();

	@Output() imagenOriginal: EventEmitter<any> = new EventEmitter();

	constructor(
		private fileUploadService: FileUploadService
	) { }

	ngOnInit(): void {
	}

	fileChangeEvent(event: any): void {
		this.imageChangedEvent = event;
		this.originalImage = event.target.files[0];
	}

	imageCropped(event: ImageCroppedEvent) {
		this.croppedImage = event.base64;
		this.imagenCortada.emit(this.croppedImage);
		this.imagenOriginal.emit(this.originalImage);
	}

	imageLoaded() {
		// imageLoaded(image: HTMLImageElement) {
		// show cropper
	}

	cropperReady() {
		// cropper ready
	}

	loadImageFailed() {
		// show message
	}



}
