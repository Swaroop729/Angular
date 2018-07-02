import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { HttpModule } from '@angular/http';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule , MatNativeDateModule } from '@angular/material';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { RouterModule} from '@angular/router';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { PushNotificationComponent } from 'ng2-notifications/ng2-notifications';
import { VerticalTimelineModule} from 'angular-vertical-timeline'
import {DndModule} from 'ng2-dnd';
// import { NDV_DIRECTIVES } from 'angular2-click-to-edit/components';
import {InputEditorModule} from 'angular-inline-editors';
import { SelectEditorModule } from 'angular-inline-editors';
import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as FintTheme from 'fusioncharts/themes/fusioncharts.theme.fint';
import { FusionChartsModule } from 'angular4-fusioncharts';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { IncidentComponent } from './incident/incident.component';
import { WebAPIService } from '../../Service/WebAPI.service';
import { HomePageComponent } from './home-page/home-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TasksManagementComponent } from './tasks-management/tasks-management.component';
import { NavbarComponent } from './navbar/navbar.component';
import { IncidentsComponent } from './incidents/incidents.component';
import { IncidentDetailsComponent } from './incident-details/incident-details.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { WorkGraphComponent } from '../../graphs/work-graph/work-graph.component';
import { AddIncidentComponent } from './incident/AddIncident/add-incident/add-incident.component'
import { AddLeaveComponent } from '../../Leave_module/add-leave/add-leave.component';


@NgModule({
  declarations: [
    AppComponent,
    IncidentComponent,
    HomePageComponent,
    PushNotificationComponent,
    DashboardComponent,
    TasksManagementComponent,
    NavbarComponent,
    IncidentsComponent,
    IncidentDetailsComponent,
    TaskDetailComponent,
    WorkGraphComponent,
    AddIncidentComponent,
    AddLeaveComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatProgressBarModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    // FusionChartsModule,
    FusionChartsModule.forRoot(FusionCharts, Charts, FintTheme),
    DndModule.forRoot(),
    VerticalTimelineModule,
    SimpleNotificationsModule.forRoot(),
    MDBBootstrapModule.forRoot(),
    InputEditorModule.forRoot(),
    SelectEditorModule.forRoot(),
    RouterModule.forRoot([
      {      path:'Home' , component:HomePageComponent,    },
      {      path:'Incident' , component:IncidentComponent,    },
      {      path:'Incidents' , component:IncidentsComponent,    },
      {      path:'AddIncident' , component:AddIncidentComponent,    },
      {      path:'AddLeave' , component:AddLeaveComponent,    },
      {      path:'TaskManagement' , component:TasksManagementComponent,    },
      {      path:'WorkGraph' , component:WorkGraphComponent,    },
      {      path:'IncidentDetail/:Id' , component:IncidentDetailsComponent,    },
      {      path:'**' , component:HomePageComponent,    },
    
    ])

  ],
  providers: [WebAPIService,PushNotificationComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
