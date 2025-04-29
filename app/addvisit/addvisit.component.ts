import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewEncapsulation } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ProfileComponent } from '../profile/profile.component';
import { VisitComponent } from '../visit/visit.component';

@Component({
  selector: 'app-addvisit',
  imports: [RouterLink, RouterOutlet , ProfileComponent,VisitComponent
  ],
  templateUrl: './addvisit.component.html',
  styleUrl: './addvisit.component.css',
   schemas: [CUSTOM_ELEMENTS_SCHEMA] ,
    encapsulation: ViewEncapsulation.None
  })

export class AddvisitComponent {

}
