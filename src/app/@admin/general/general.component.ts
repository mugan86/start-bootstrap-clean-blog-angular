import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/@core/services/config.service';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { ApiService } from 'src/app/@graphql/services/api.service';
import { AuthService } from 'src/app/@core/services/auth.service';

@Component({
  selector: 'blog-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {
  file;
  imageChangedEvent: any = '';
  croppedImage: any = '';
  constructor(private config: ConfigService, private api: ApiService, private auth: AuthService) {
    this.config.updateInPost(true);
  }

  ngOnInit() {
      this.auth.start();
  }

  onFileChange(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.file = file;
    }
  }

  save() {
    console.log(this.file);
    this.api.addPhoto(this.file).subscribe(({ data }) => {
      console.log(data);
    });
  }

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }
  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
    // console.log(event.file);
    this.file = event.file;
  }
  imageLoaded() {
    // show cropper
  }
  cropperReady() {
    // cropper ready
  }
  loadImageFailed() {
    // show message
  }

}
