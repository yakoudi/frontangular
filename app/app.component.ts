import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { FooterComponent } from "./footer/footer.component";
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "./header/header.component";
import { AboutComponent } from "./about/about.component";
import { ServiceComponent } from "./service/service.component";
import { ContactComponent } from "./contact/contact.component";
import { TarifComponent } from "./tarif/tarif.component";
import { LoginComponent } from './login/login.component';
import { TeamstartComponent } from "./teamstart/teamstart.component";
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AuthInterceptor } from './auth.interceptor';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet , RouterLink, RouterModule, CommonModule, FooterComponent, HeaderComponent, AboutComponent, ServiceComponent, ContactComponent, TarifComponent, LoginComponent,RegisterComponent, TeamstartComponent,  
    ReactiveFormsModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
    providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
})
export class AppComponent {
  title = 'frontangprojet';
  showNavbarAndFooter: boolean = true;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.showNavbarAndFooter = !event.url.includes('/dashboard')&& !event.url.includes('/addappoiment')&& !event.url.includes('/appointmentslist')&& !event.url.includes('/profile')&& !event.url.includes('/visit') && !event.url.includes('/addvisit')&& !event.url.includes('/transaction') && !event.url.includes('/appointmentdoc') && !event.url.includes('/listedossier')  && !event.url.includes('/analyse')  && !event.url.includes('/listedossier') && !event.url.includes('/analyselist');
      }
    });
  }


}
