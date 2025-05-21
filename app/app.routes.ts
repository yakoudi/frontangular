import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { ContactComponent } from './contact/contact.component';
import { Component } from '@angular/core';
import { TarifComponent } from './tarif/tarif.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboradComponent } from './dashborad/dashborad.component';


import { ProfileComponent } from './profile/profile.component';
import { AddappoimentComponent } from './addappoiment/addappoiment.component';
import { DashboarddoctorComponent } from './dashboarddoctor/dashboarddoctor.component';
import { VisitComponent } from './visit/visit.component';
import { AddvisitComponent } from './addvisit/addvisit.component';

import { AppointmentdoctorComponent } from './appointmentdoctor/appointmentdoctor.component';
import { TransactionComponent } from './transaction/transaction.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { AdddossiermedicaleComponent } from './adddossiermedicale/adddossiermedicale.component';
import { ListedossiermedicaleComponent } from './listedossiermedicale/listedossiermedicale.component';
import { AnalyseComponent } from './analyse/analyse.component';
import { ListeanalyseComponent } from './listeanalyse/listeanalyse.component';


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
        path:'dashboarddoctor',
        component:DashboarddoctorComponent
      
    },
  
    {path :'appointmentdoc' , component: AppointmentdoctorComponent},
   

    { path: 'profile', component: ProfileComponent},
    { path: 'addappoiment', component: AddappoimentComponent},
    {path :'visit' , component:VisitComponent},
    {path :'addvisit' , component:AddvisitComponent},
    {path : 'transactionn' , component : TransactionComponent},
    { path: 'appointmentslist', component: AppointmentListComponent },
    {path:'adddossier', component :AdddossiermedicaleComponent},
    {path:'listedossier', component: ListedossiermedicaleComponent},
    {path:'analyse', component: AnalyseComponent},
     {path:'analyselist', component: ListeanalyseComponent},
   

];
