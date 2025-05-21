import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, ViewEncapsulation } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Router } from 'express';
import { ProfileComponent } from '../profile/profile.component';

import { AboutComponent } from '../about/about.component';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ServiceappoinmentService } from '../serviceappoinment.service';
import { AuthService } from '../auth.service';
import { Appointment, AppointmentCreateDto } from '../Models/appointment.model';

@Component({
  selector: 'app-addappoiment',
  imports: [RouterLink ,RouterOutlet,ReactiveFormsModule, CommonModule,AboutComponent,FormsModule, ProfileComponent],
  templateUrl: './addappoiment.component.html',
  styleUrl: './addappoiment.component.css',
   schemas: [CUSTOM_ELEMENTS_SCHEMA] ,
    encapsulation: ViewEncapsulation.None

})
export class AddappoimentComponent implements OnInit {
appointments: Appointment[] = [];
  newAppointment: AppointmentCreateDto = {
    patientId: 0,
    doctorId: 0,
    date: '',
    time: ''
  };
  errorMessage: string | null = null;
  successMessage: string | null = null;

  constructor(
    private appointmentService: ServiceappoinmentService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.loadAppointments();
    const userId = this.authService.getUserId();
    if (userId) {
      this.newAppointment.doctorId = userId;
      console.log('Doctor ID défini pour le nouveau rendez-vous :', userId);
    }
  }

  loadAppointments(): void {
    this.appointmentService.getUserAppointments().subscribe({
      next: (appointments) => {
        this.appointments = appointments;
        console.log('Rendez-vous chargés dans Addappoiment :', appointments);
      },
      error: (error) => {
        console.error('Erreur lors du chargement des rendez-vous :', error);
        this.errorMessage = error.message || 'Échec du chargement des rendez-vous';
      }
    });
  }

  createAppointment(): void {
    if (!this.newAppointment.patientId || !this.newAppointment.date || !this.newAppointment.time) {
      this.errorMessage = 'Veuillez remplir tous les champs';
      this.successMessage = null;
      return;
    }
    // Adapter à la clé attendue par l'API (par exemple, doctor_id)
    const formattedDto: AppointmentCreateDto = {
      patientId: this.newAppointment.patientId,
      doctor_id: this.newAppointment.doctorId, // Utiliser doctor_id pour correspondre à l'API
      date: this.newAppointment.date,
      time: this.newAppointment.time,
      doctorId: 0
    };
    console.log('Création du rendez-vous avec :', formattedDto);
    this.appointmentService.createAppointment(formattedDto).subscribe({
      next: (appointment) => {
        this.appointments.push(appointment);
        this.successMessage = 'Rendez-vous créé avec succès !';
        this.errorMessage = null;
        this.newAppointment = {
          patientId: 0,
          doctorId: this.authService.getUserId(),
          date: '',
          time: ''
        };
        console.log('Nouveau rendez-vous créé :', appointment);
      },
      error: (error) => {
        console.error('Erreur lors de la création du rendez-vous :', error);
        this.errorMessage = error.message || 'Échec de la création du rendez-vous';
        this.successMessage = null;
      }
    });
  }}