import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errorMessage: string | null = null;
  successMessage: string | null = null;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      console.log('Tentative de connexion avec :', { email, password }); // Débogage
      this.authService.login({ email, password }).subscribe({
        next: (response: { token: string; role: string }) => {
          console.log('Réponse de connexion :', response); // Débogage
          if (response.token) {
            localStorage.setItem('token', response.token);
            console.log('Token stocké :', localStorage.getItem('token')); // Débogage
            this.successMessage = 'Connexion réussie !';
            this.errorMessage = null;

            const role = response.role?.toLowerCase();
            console.log('Rôle détecté :', role); // Débogage
            if (role === 'doctor') {
              console.log('Redirection vers /dashboarddoctor'); // Débogage
              setTimeout(() => this.router.navigate(['/dashboarddoctor']), 1000);
            } else if (role === 'patient') {
              console.log('Redirection vers /dashboard'); // Débogage
              setTimeout(() => this.router.navigate(['/dashboard']), 1000);
            } else {
              console.log('Redirection vers /about'); // Débogage
              setTimeout(() => this.router.navigate(['/about']), 1000);
            }
          } else {
            this.errorMessage = 'Aucun token reçu du serveur';
            console.error('Aucun token dans la réponse'); // Débogage
          }
        },
        error: (err) => {
          console.error('Erreur de connexion :', err); // Débogage
          this.errorMessage = err.message || 'Erreur lors de la connexion.';
          this.successMessage = null;
        }
      });
    } else {
      this.errorMessage = 'Veuillez remplir tous les champs correctement.';
      this.successMessage = null;
    }
  }
}