export interface Appointment {
  id?: number;
  patientId: number;
  doctorId: number; 
  DoctorId?: number; 
  doctor_id?: number;
  date: string;
  time: string;
  status?: string;
  createdAt?: string;
  patient?: User;
  doctor?: User;
}

export interface User {
  id: number;
  name: string;
  email: string;
}

export interface AppointmentCreateDto {
  patientId: number;
  doctorId: number;
  DoctorId?: number; 
  doctor_id?: number; 
  date: string;
  time: string;
}