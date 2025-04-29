import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { AboutComponent } from '../about/about.component';
import { ServiceComponent } from '../service/service.component';
import { ContactComponent } from '../contact/contact.component';
import { TarifComponent } from '../tarif/tarif.component';
import { LoginComponent } from '../login/login.component';
import { Router } from '@angular/router';
import { RegisterComponent } from '../register/register.component';
import { DashboarddoctorComponent } from '../dashboarddoctor/dashboarddoctor.component';
@Component({
  selector: 'app-header',
  imports: [RouterOutlet,RouterLink, CommonModule, FooterComponent, HeaderComponent,RegisterComponent, AboutComponent, ServiceComponent, ContactComponent, TarifComponent ,DashboarddoctorComponent, LoginComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
