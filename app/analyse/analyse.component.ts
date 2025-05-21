import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewEncapsulation } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-analyse',
  imports: [RouterLink, RouterOutlet ],
  templateUrl: './analyse.component.html',
  styleUrl: './analyse.component.css',
     schemas: [CUSTOM_ELEMENTS_SCHEMA] ,
      encapsulation: ViewEncapsulation.None
    })

export class AnalyseComponent {

}
