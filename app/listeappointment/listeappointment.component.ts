import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewEncapsulation } from '@angular/core';
import { Route, RouterLink, RouterOutlet } from '@angular/router';

import { Router } from '@angular/router';
import { DashboradComponent } from '../dashborad/dashborad.component';
import { ProfileComponent } from '../profile/profile.component';

@Component({
  selector: 'app-listeappointment',
  imports: [RouterLink,RouterOutlet, CommonModule,  ProfileComponent  ],
  templateUrl: './listeappointment.component.html',
  styleUrl: './listeappointment.component.css',
    schemas: [CUSTOM_ELEMENTS_SCHEMA] ,
    encapsulation: ViewEncapsulation.None
})
export class ListeappointmentComponent {

  
}
