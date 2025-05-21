import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { User} from '../Models/user.model';
import { UserService } from '../user.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-profile',
  imports: [RouterLink,RouterOutlet,CommonModule,FormsModule , ReactiveFormsModule ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
   schemas: [CUSTOM_ELEMENTS_SCHEMA] ,
      encapsulation: ViewEncapsulation.None
})
export class ProfileComponent implements OnInit {
 user: User = {
    name: '',
    email: '',
    role: '',
    dateNaiss: undefined,
    genre: undefined,
    groupeSanguin: undefined,
    specialite: undefined,
    salary: undefined,
    allergies: undefined,
    code: undefined
  };
  errorMessage: string | null = null;
  successMessage: string | null = null;
  isEditing = false;

  constructor(
    private userProfileService: UserService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!this.authService.isLoggedIn()) {
      this.errorMessage = 'Veuillez vous connecter pour voir votre profil';
      this.router.navigate(['/login']);
      return;
    }
    this.loadProfile();
  }

  loadProfile(): void {
    this.userProfileService.getProfile().subscribe({
      next: (user) => {
        this.user = user;
        this.errorMessage = null;
      },
      error: (error) => {
        this.errorMessage = error.message || 'Échec du chargement du profil';
        console.error('Erreur lors du chargement du profil :', error);
        if (error.status === 401) {
          this.errorMessage = 'Session expirée. Veuillez vous reconnecter.';
          this.router.navigate(['/login']);
        }
      }
    });
  }

  toggleEdit(): void {
    this.isEditing = !this.isEditing;
    this.errorMessage = null;
    this.successMessage = null;
  }

 saveProfile(): void {
  if (!this.user.name || !this.user.email) {
    this.errorMessage = 'Veuillez remplir tous les champs obligatoires';
    return;
  }

  const userData: User = {
    id: this.user.id,
    name: this.user.name.trim(),
    email: this.user.email.trim(),
    role: this.user.role || undefined,
    dateNaiss: this.user.dateNaiss || undefined,
    genre: this.user.genre || undefined,
    groupeSanguin: this.user.groupeSanguin || undefined,
    specialite: this.user.specialite || undefined,
    salary: this.user.salary || undefined,
    allergies: this.user.allergies || undefined,
    code: this.user.code || undefined,
    password: "PlaceholderPassword" // Placeholder to pass validation
  };

  console.log('Préparation du document PUT :', JSON.stringify(userData, null, 2));
  this.userProfileService.updateProfile(userData).subscribe({
    next: (updatedUser) => {
      this.user = updatedUser;
      this.successMessage = 'Profil mis à jour avec succès !';
      this.errorMessage = null;
      this.isEditing = false;
    },
    error: (error) => {
      this.errorMessage = error.message || 'Échec de la mise à jour du profil';
      console.error('Erreur lors de la mise à jour du profil :', error);
    }
  });
}}