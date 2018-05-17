import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-incident',
  templateUrl: './add-incident.component.html',
  styleUrls: ['./add-incident.component.scss']
})
export class AddIncidentComponent implements OnInit {

  constructor() { }

  addIncidentform = new FormGroup({

    // Id : new FormControl(),
    IncidentId : new FormControl(),
    Percentage : new FormControl(),
    ApplicationName : new FormControl(),
    // Comment : new FormControl(),
    // ResolutionDate : new FormControl(),
    // CreatedDate : new FormControl(),
    // ModifiedDate : new FormControl(),
  });


  ngOnInit() {
  }

}
