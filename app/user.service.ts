
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { User} from './Models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
private apiUrl = 'https://localhost:7107/api/UserProfile';


  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    let headers = new HttpHeaders();
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    headers = headers.set('Content-Type', 'application/json');
    return headers;
  }

  getProfile(): Observable<User> {
    return this.http.get<User>(this.apiUrl, { headers: this.getHeaders() }).pipe(
      map(user => {
        console.log('Profil récupéré :', user);
        return user;
      }),
      catchError(this.handleError)
    );
  }

  updateProfile(userData: User): Observable<User> {
    console.log('Document PUT envoyé :', JSON.stringify(userData, null, 2));
    console.log('Token utilisé :', localStorage.getItem('token'));
    const headers = this.getHeaders();
    const headerObject: { [key: string]: string | string[] } = {};
    headers.keys().forEach((key: string) => {
      headerObject[key] = headers.getAll(key) || headers.get(key) || '';
    });
    console.log('Requête HTTP complète :', {
      url: this.apiUrl,
      method: 'PUT',
      headers: headerObject,
      body: JSON.stringify(userData, null, 2)
    });
    return this.http.put<User>(this.apiUrl, userData, { headers }).pipe(
      map(user => {
        console.log('Profil mis à jour :', user);
        return user;
      }),
      catchError(error => {
        console.error('Erreur API :', error);
        const responseHeaders: { [key: string]: string | string[] } = {};
        error.headers.keys().forEach((key: string) => {
          responseHeaders[key] = error.headers.getAll(key) || error.headers.get(key) || '';
        });
        console.error('Response Headers :', responseHeaders);
        let errorMessage = 'Une erreur est survenue';
        if (error.error instanceof ErrorEvent) {
          errorMessage = error.error.message;
        } else {
          errorMessage = error.error?.message || error.error?.title || `Erreur serveur : ${error.status}`;
          if (error.error?.errors) {
            errorMessage += ' - Détails : ' + JSON.stringify(error.error.errors, null, 2);
          }
        }
        console.error('Erreur complète :', errorMessage, error);
        return throwError(() => new Error(errorMessage));
      })
    );
  }

  private handleError(error: any): Observable<never> {
    let errorMessage = 'Une erreur est survenue';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = error.error?.message || error.error?.title || `Erreur serveur : ${error.status}`;
      if (error.error?.errors) {
        errorMessage += ' - Détails : ' + JSON.stringify(error.error.errors, null, 2);
      }
    }
    console.error('Erreur API :', errorMessage, error);
    return throwError(() => new Error(errorMessage));
  }
}