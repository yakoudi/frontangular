import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, ViewEncapsulation } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AboutComponent } from '../about/about.component';

import { ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from '../profile/profile.component';
import { AppointmentListComponent } from '../appointment-list/appointment-list.component';

@Component({
  selector: 'app-dashborad',
  standalone: true, // Assuming this is a standalone component
  imports: [RouterLink, RouterOutlet, CommonModule, AboutComponent ,AppointmentListComponent, ProfileComponent],
  templateUrl: './dashborad.component.html',
  styleUrls: ['./dashborad.component.css'], 
  schemas: [CUSTOM_ELEMENTS_SCHEMA] ,
  encapsulation: ViewEncapsulation.None
})
export class DashboradComponent implements OnInit , AfterViewInit {
  constructor() {}
  ngOnInit() {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'src/dashboard.css'; // Un fichier CSS séparé
    document.head.appendChild(link);


    
  }
 
  ngAfterViewInit() {
    const script = document.createElement('script');
    script.src = 'assets/js/script.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    script.onload = () => {
      console.log("script.js chargé !");
    };
  }





  

}
