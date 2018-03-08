import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { HttpModule } from '@angular/http';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';



import { AppComponent } from './app.component';
import { IncidentComponent } from './incident/incident.component';
import { WebAPIService } from '../../Service/WebAPI.service';

@NgModule({
  declarations: [
    AppComponent,
    IncidentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatButtonModule,
    MatProgressBarModule,
    MatCardModule

  ],
  providers: [WebAPIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
