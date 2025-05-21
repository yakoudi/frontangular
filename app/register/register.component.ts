import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DashboarddoctorComponent } from '../dashboarddoctor/dashboarddoctor.component';
import { DashboradComponent } from '../dashborad/dashborad.component';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, DashboarddoctorComponent,DashboradComponent,RouterLink, HttpClientModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registrationForm: FormGroup;
  errorMessage: string | null = null;
  successMessage: string | null = null;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.registrationForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      date_naiss: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      genre: ['', Validators.required],
      role: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

onSubmit(): void {
    if (this.registrationForm.valid) {
      const formData = this.registrationForm.value;
      this.authService.register(formData).subscribe({
        next: (response) => {
          this.successMessage = 'Inscription réussie !';
          this.errorMessage = null;
          

      const role = (response.role || response.role || '').toLowerCase();

if (role === 'doctor') {
  this.router.navigate(['/dashboarddoctor']);
} else if (role === 'patient') {
  this.router.navigate(['/dashboard']);
} else {
  this.router.navigate(['/login']);
}
        },
        error: (err) => {
          this.errorMessage = err.message;
          this.successMessage = null;
        },
      });
    } else {
      this.errorMessage = 'Veuillez remplir tous les champs correctement.';
    }
  }
  
  
}
