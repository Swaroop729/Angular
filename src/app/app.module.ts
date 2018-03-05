import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import {FormsModule} from '@angular/forms'


import { AppComponent } from './app.component';
import { IncidentComponent } from './incident/incident.component';


@NgModule({
  declarations: [
    AppComponent,
    IncidentComponent
  ],
  imports: [
    BrowserModule,
    // FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
