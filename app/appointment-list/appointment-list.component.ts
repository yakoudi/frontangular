import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, ViewEncapsulation } from '@angular/core';
import { ServiceappoinmentService } from '../serviceappoinment.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Appointment } from '../Models/appointment.model';
import { Router, RouterLink } from '@angular/router';




@Component({
  selector: 'app-appointment-list',
  imports: [CommonModule , ReactiveFormsModule , FormsModule , RouterLink ],
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.css',
     schemas: [CUSTOM_ELEMENTS_SCHEMA] ,
      encapsulation: ViewEncapsulation.None
  
})
export class AppointmentListComponent implements OnInit{
appointments: Appointment[] = [];
  errorMessage: string | null = null;

  constructor(
    private appointmentService: ServiceappoinmentService,
    private router: Router // Private is fine
  ) {}

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (!token) {
      this.errorMessage = 'Please log in to view appointments';
      console.warn('No token found, redirecting to login');
      this.navigateToLogin(); // Call method
      return;
    }
    this.loadAppointments();
  }

  loadAppointments(): void {
    this.appointmentService.getUserAppointments().subscribe({
      next: (appointments) => {
        this.appointments = appointments;
        this.errorMessage = null;
      },
      error: (error) => {
        this.errorMessage = error.message || 'Failed to load appointments';
        console.error('Error loading appointments:', error);
        if (error.status === 401) {
          this.errorMessage = 'Session expired. Please log in again.';
          this.navigateToLogin(); // Call method
        }
      }
    });
  }

  // Public method for navigation
  navigateToLogin(): void {
    this.router.navigate(['/login']);
  }
}