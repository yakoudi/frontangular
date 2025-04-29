import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewEncapsulation } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ProfileComponent } from '../profile/profile.component';

@Component({
  selector: 'app-visit',
  imports: [ RouterLink,RouterOutlet, CommonModule,  ProfileComponent],
  templateUrl: './visit.component.html',
  styleUrl: './visit.component.css',
     schemas: [CUSTOM_ELEMENTS_SCHEMA] ,
      encapsulation: ViewEncapsulation.None
})
export class VisitComponent {

}
