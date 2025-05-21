import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, ViewEncapsulation } from '@angular/core';
import { DossierMedical, DossiermedicalService } from '../dossiermedical.service';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from '../profile/profile.component';

@Component({
  selector: 'app-listedossiermedicale',
  imports: [RouterLink,RouterOutlet, CommonModule,  ProfileComponent  ],
  templateUrl: './listedossiermedicale.component.html',
  styleUrl: './listedossiermedicale.component.css',
    schemas: [CUSTOM_ELEMENTS_SCHEMA] ,
    encapsulation: ViewEncapsulation.None
})
export class ListedossiermedicaleComponent  implements OnInit{
  dossiers: DossierMedical[] = [];

  constructor(private dossierService: DossiermedicalService) {}

  ngOnInit(): void {
    this.fetchDossiers();
  }

  fetchDossiers() {
    this.dossierService.getDossiers().subscribe(data => {
      this.dossiers = data;
    });
  }

  deleteDossier(id: number) {
    if (confirm('Confirmer la suppression ?')) {
      this.dossierService.deleteDossier(id).subscribe(() => {
        this.fetchDossiers();
      });
    }
}}
