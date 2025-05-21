export interface User {
  id?: number;
  name: string;
  email: string;
  password?: string | null | undefined; // Allow null/undefined
  role?: string;
  dateNaiss?: string;
  genre?: string;
  groupeSanguin?: string;
  specialite?: string;
  salary?: number;
  allergies?: string;
  code?: string;
}