import { WebAPIService } from '../../../Service/WebAPI.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'Incident',
  templateUrl: './incident.component.html',
  styleUrls: ['./incident.component.css']
})
export class IncidentComponent implements OnInit {
  Incidents;
  
  constructor(Service :  WebAPIService) {

    Service.getIncidents()
    .subscribe((Response)=>
    {
      this.Incidents=Response.json()
    })
    }

  ngOnInit(  )  {
    
  }
 
}
