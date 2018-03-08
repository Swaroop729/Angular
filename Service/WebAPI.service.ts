import { Injectable } from '@angular/core';
import { Http } from '@angular/http';



@Injectable()
export class WebAPIService {


  // url = 'https://my-json-server.typicode.com/Swaroop729/WebAPI'
  // url = 'https://my-json-server.typicode.com/Swaroop729/WebAPI/db'
  url='  http://localhost:3000/Incidents'
    constructor(private http : Http) {    }
    getIncidents(){
      return this.http.get(this.url);
     }
  }