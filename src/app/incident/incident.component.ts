import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'Incident',
  templateUrl: './incident.component.html',
  styleUrls: ['./incident.component.css']
})
export class IncidentComponent implements OnInit {

  Id:number;
  IncidentId:number;
  percnetage : number;
  comment : string;
  ApplicationName : string;
  CreatedDate : DateTimeFormat
  ModifiedDate : DateTimeFormat
  
  constructor() {


   }

  ngOnInit() {
  }

}
