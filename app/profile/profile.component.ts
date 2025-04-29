import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewEncapsulation } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [RouterLink,RouterOutlet, CommonModule ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
   schemas: [CUSTOM_ELEMENTS_SCHEMA] ,
      encapsulation: ViewEncapsulation.None
})
export class ProfileComponent {

}
