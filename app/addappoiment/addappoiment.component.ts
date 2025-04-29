import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewEncapsulation } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Router } from 'express';
import { ProfileComponent } from '../profile/profile.component';
import { ListeappointmentComponent } from '../listeappointment/listeappointment.component';
import { AboutComponent } from '../about/about.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-addappoiment',
  imports: [RouterLink ,RouterOutlet, CommonModule, AboutComponent, ListeappointmentComponent , ProfileComponent],
  templateUrl: './addappoiment.component.html',
  styleUrl: './addappoiment.component.css',
   schemas: [CUSTOM_ELEMENTS_SCHEMA] ,
    encapsulation: ViewEncapsulation.None

})
export class AddappoimentComponent {

}
