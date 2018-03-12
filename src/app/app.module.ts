import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { HttpModule } from '@angular/http';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { RouterModule} from '@angular/router';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { PushNotificationComponent } from 'ng2-notifications/ng2-notifications';


import { AppComponent } from './app.component';
import { IncidentComponent } from './incident/incident.component';
import { WebAPIService } from '../../Service/WebAPI.service';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    IncidentComponent,
    HomePageComponent,
    PushNotificationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatButtonModule,
    MatProgressBarModule,
    MatCardModule,
    SimpleNotificationsModule.forRoot(),
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot([
      {      path:'' , component:HomePageComponent,    },
      {      path:'Incidents' , component:IncidentComponent,    },
      {      path:'**' , component:HomePageComponent,    },
    
    ])

  ],
  providers: [WebAPIService,PushNotificationComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
