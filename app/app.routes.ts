import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { ContactComponent } from './contact/contact.component';
import { Component } from '@angular/core';
import { TarifComponent } from './tarif/tarif.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboradComponent } from './dashborad/dashborad.component';
import { ListeappointmentComponent } from './listeappointment/listeappointment.component';

import { ProfileComponent } from './profile/profile.component';
import { AddappoimentComponent } from './addappoiment/addappoiment.component';
import { DashboarddoctorComponent } from './dashboarddoctor/dashboarddoctor.component';
import { VisitComponent } from './visit/visit.component';
import { AddvisitComponent } from './addvisit/addvisit.component';
import { TransactionComponent } from './transaction/transaction.component';


export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },

    {
        path:'about',
        component:AboutComponent
    },
   
    {   path:'service',
        component:ServiceComponent
    },
    {
        path:'contact',
        component:ContactComponent
    },
    {
        path:'tarif',
       component:TarifComponent
    },
    {
        path:'register',
       component:RegisterComponent
    },
    {
        path:'dashboard',
        component:DashboradComponent
      
    },
    {
        path:'dashboardclient',
        component:DashboarddoctorComponent
      
    },
    { path: 'listeapp', 
      component: ListeappointmentComponent
    },

    { path: 'profile', component: ProfileComponent},
    { path: 'addappoiment', component: AddappoimentComponent},
    {path :'visit' , component:VisitComponent},
    {path :'addvisit' , component:AddvisitComponent},
    {path : 'transaction ' , component:TransactionComponent}
   
];
