import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Appointment, AppointmentCreateDto } from './Models/appointment.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceappoinmentService {

private apiUrl = 'https://localhost:7107/api/Appointment';

 constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    console.log('Token utilisé pour les en-têtes :', token); // Débogage
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {})
    });
    console.log('En-têtes générés :', headers); // Débogage
    return headers;
  }

  createAppointment(dto: AppointmentCreateDto): Observable<Appointment> {
    const formattedDto = {
      ...dto,
      date: new Date(dto.date).toISOString().split('T')[0]
    };
    return this.http.post<Appointment>(this.apiUrl, formattedDto, {
      headers: this.getHeaders()
    }).pipe(
      catchError(this.handleError)
    );
  }

  getUserAppointments(): Observable<Appointment[]> {
    console.log('Récupération des rendez-vous depuis :', this.apiUrl);
    return this.http.get<Appointment[]>(this.apiUrl, {
      headers: this.getHeaders()
    }).pipe(
      map(appointments => {
        console.log('Réponse brute de l’API :', appointments);
        return appointments.map(appointment => ({
          ...appointment,
          date: new Date(appointment.date).toISOString().split('T')[0]
        }));
      }),
      catchError(this.handleError)
    );
  }

  updateAppointmentStatus(id: number, status: string): Observable<Appointment> {
    const url = `${this.apiUrl}/${id}/status`;
    return this.http.patch<Appointment>(url, { status }, {
      headers: this.getHeaders()
    }).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any): Observable<never> {
    let errorMessage = 'Une erreur est survenue';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = error.error?.message || `Erreur serveur : ${error.status}`;
    }
    console.error('Erreur API :', errorMessage, error);
    return throwError(() => new Error(errorMessage));
  }
}