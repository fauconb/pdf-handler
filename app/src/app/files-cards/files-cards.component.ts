import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

let baseUrl = "../assets/json/data.json"

@Component({
  selector: 'app-files-cards',
  templateUrl: './files-cards.component.html',
  styleUrls: ['./files-cards.component.css']
})


export class FilesCardsComponent implements OnInit {
  files  = [];

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get(baseUrl).subscribe((res : any[])=>{
      console.log(res);

      return this.files = res;
    });
  }

}
