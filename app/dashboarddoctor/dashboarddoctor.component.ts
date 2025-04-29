import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewEncapsulation } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ProfileComponent } from '../profile/profile.component';
import { VisitComponent } from '../visit/visit.component';

@Component({
  selector: 'app-dashboarddoctor',
  imports: [RouterLink, RouterOutlet, ProfileComponent ,VisitComponent],
  templateUrl: './dashboarddoctor.component.html',
  styleUrl: './dashboarddoctor.component.css',
    schemas: [CUSTOM_ELEMENTS_SCHEMA] ,
    encapsulation: ViewEncapsulation.None
})
export class DashboarddoctorComponent {

}
