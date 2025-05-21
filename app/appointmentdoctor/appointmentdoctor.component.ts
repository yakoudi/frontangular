
import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { ProfileComponent } from '../profile/profile.component';
import { Appointment } from '../Models/appointment.model';
import { ServiceappoinmentService } from '../serviceappoinment.service';
import { AuthService } from '../auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-appointmentdoctor',
  imports: [RouterLink,RouterOutlet, CommonModule,FormsModule,  ProfileComponent],
  templateUrl: './appointmentdoctor.component.html',
  styleUrl: './appointmentdoctor.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA] ,
  encapsulation: ViewEncapsulation.None
})
export class AppointmentdoctorComponent implements OnInit {
 appointments: Appointment[] = [];
  errorMessage: string | null = null;
  statusOptions = ['pending', 'approved', 'cancelled'];

  constructor(
    private appointmentService: ServiceappoinmentService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (!token) {
      this.errorMessage = 'Veuillez vous connecter pour voir les rendez-vous';
      console.warn('Aucun token trouvé, redirection vers la connexion');
      this.navigateToLogin();
      return;
    }

    const userId = this.authService.getUserId();
    if (!userId) {
      this.errorMessage = 'Session utilisateur invalide. Veuillez vous reconnecter.';
      this.navigateToLogin();
      return;
    }

    this.loadAppointments();
  }

  loadAppointments(): void {
    this.appointmentService.getUserAppointments().subscribe({
      next: (appointments) => {
        const userId = this.authService.getUserId();
        console.log('ID Utilisateur :', userId);
        console.log('Tous les rendez-vous (structure complète) :', JSON.stringify(appointments, null, 2));
        this.appointments = appointments.filter(app => {
          // Handle different possible keys for doctor ID
          const doctorId = app.DoctorId || app.doctorId || app.doctor_id || (app.doctor ? app.doctor.id : undefined);
          const match = doctorId === userId;
          console.log(`Rendez-vous :`, { doctorId, userId, match, appointment: app });
          return match;
        });
        console.log('Rendez-vous filtrés :', this.appointments);
        this.errorMessage = null;
        if (this.appointments.length === 0) {
          this.errorMessage = 'Aucun rendez-vous trouvé pour ce médecin. Essayez de créer un nouveau rendez-vous.';
        }
      },
      error: (error) => {
        this.errorMessage = error.message || 'Échec du chargement des rendez-vous';
        console.error('Erreur lors du chargement des rendez-vous :', error);
        if (error.status === 401) {
          this.errorMessage = 'Session expirée. Veuillez vous reconnecter.';
          this.navigateToLogin();
        }
      }
    });
  }

  updateStatus(appointment: Appointment): void {
    if (!appointment.id || !appointment.status) {
      this.errorMessage = 'Impossible de mettre à jour le rendez-vous : ID ou statut manquant';
      return;
    }
    this.appointmentService.updateAppointmentStatus(appointment.id, appointment.status).subscribe({
      next: (updatedAppointment) => {
        const index = this.appointments.findIndex(app => app.id === updatedAppointment.id);
        if (index !== -1) {
          this.appointments[index] = updatedAppointment;
        }
        this.errorMessage = null;
      },
      error: (error) => {
        this.errorMessage = error.message || 'Échec de la mise à jour du statut';
        console.error('Erreur lors de la mise à jour du statut :', error);
      }
    });
  }

  navigateToLogin(): void {
    this.router.navigate(['/login']);
  }

  navigateToAddAppointment(): void {
    this.router.navigate(['/add-appointment']);
  }
}