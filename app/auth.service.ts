import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
 private apiUrl = 'http://localhost:5185/api/auth'; // Adjust if login API is different

  constructor(private http: HttpClient) {}
  register(formData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register`, formData).pipe(
      catchError(this.handleError)
    );
  }
getUserId(): number {
  const token = localStorage.getItem('token');
  if (!token) {
    console.warn('Aucun token trouvé dans localStorage');
    return 0;
  }
  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    console.log('Contenu du token :', payload); // Débogage
    const userId = Number(payload['nameid']);
    if (!userId) {
      console.warn('Aucune revendication nameid trouvée dans le token');
      return 0;
    }
    return userId;
  } catch (error) {
    console.error('Erreur lors du décodage du token :', error);
    return 0;
  }
}
  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, credentials).pipe(
      tap((res) => {
        if (res.token) {
          localStorage.setItem('token', res.token);
          console.log('Token stored successfully:', res.token); // Debug
        } else {
          console.error('No token in login response:', res);
        }
      }),
      catchError(this.handleError)
    );
  }

  // Check if user is logged in
  isLoggedIn(): boolean {
    const token = localStorage.getItem('token');
    return !!token; // Returns true if token exists
  }

  // Logout method
  logout(): void {
    localStorage.removeItem('token');
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Une erreur est survenue. Veuillez réessayer.';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = error.error?.Message || errorMessage;
    }
    console.error('Auth error:', errorMessage, error);
    return throwError(() => new Error(errorMessage));
  }
}