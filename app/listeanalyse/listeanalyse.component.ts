
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, ViewEncapsulation } from '@angular/core';

import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listeanalyse',
  imports: [ RouterLink,RouterOutlet, CommonModule,],
  templateUrl: './listeanalyse.component.html',
  styleUrl: './listeanalyse.component.css',
    schemas: [CUSTOM_ELEMENTS_SCHEMA] ,
      encapsulation: ViewEncapsulation.None
})
export class ListeanalyseComponent {

}
