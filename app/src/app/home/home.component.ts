import { Component, OnInit } from '@angular/core';
import {  FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';

const URL = 'http://localhost:8080/api-pdf-handler/resources/uploadpdf/upload/';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public uploader: FileUploader = new FileUploader({ url: URL, itemAlias: 'pdf', method: 'post' });
  ngOnInit() {
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      console.log('pdfUpload:uploaded:', item, status, response);
      alert('File uploaded successfully');
    };
  }


  constructor() { }
}
