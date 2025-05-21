import { Component } from '@angular/core';
import { DossierMedical, DossiermedicalService } from '../dossiermedical.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-adddossiermedicale',
  imports: [FormsModule],
  templateUrl: './adddossiermedicale.component.html',
  styleUrl: './adddossiermedicale.component.css'
})
export class AdddossiermedicaleComponent {
   newDossier: DossierMedical = {
    name: '',
    doctorId: 0,
    patientId: 0
  };

  successMessage = '';
  errorMessage = '';

  constructor(private dossierService: DossiermedicalService) {}

  addDossier() {
    this.dossierService.addDossier(this.newDossier).subscribe({
      next: () => {
        this.successMessage = 'Dossier ajouté avec succès.';
        this.errorMessage = '';
        this.newDossier = { name: '', doctorId: 0, patientId: 0 };
      },
      error: (err) => {
        this.successMessage = '';
        this.errorMessage = 'Erreur lors de l’ajout du dossier.';
        console.error(err);
      }
    });
  }

}
