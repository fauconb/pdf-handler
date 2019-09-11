import { Component, OnInit } from '@angular/core';

const PATHURL = "http://localhost:8080/api-pdf-handler/resources/pdf/view?name=pdf-sample.pdf"

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.css']
})


export class ViewerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
