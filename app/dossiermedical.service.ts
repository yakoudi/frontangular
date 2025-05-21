import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface DossierMedical {
  id?: number;
  name: string;
  doctorId: number;
  patientId: number;
}
@Injectable({
  providedIn: 'root'
})
export class DossiermedicalService {

 private apiUrl = 'http://localhost:5185/api/DossierMedical'; // change URL if needed

  constructor(private http: HttpClient) {}

  getDossiers(): Observable<DossierMedical[]> {
    return this.http.get<DossierMedical[]>(this.apiUrl);
  }

  getDossier(id: number): Observable<DossierMedical> {
    return this.http.get<DossierMedical>(`${this.apiUrl}/${id}`);
  }

  addDossier(dossier: DossierMedical): Observable<DossierMedical> {
    return this.http.post<DossierMedical>(this.apiUrl, dossier);
  }

  updateDossier(id: number, dossier: DossierMedical): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, dossier);
  }

  deleteDossier(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }}