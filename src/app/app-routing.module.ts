import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AuthGuardService as AuthGuard } from './auth-guard.service';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { TestimonialsComponent } from '../app/testimonials/testimonials.component';
import { DonorFormComponent } from '../app/donor-form/donor-form.component';



const routes: Routes = [
    {path:'profile',component:ProfileComponent},
    {path:'home',component:HomeComponent}, 
    {path:'aboutus',component:AboutusComponent}, 
    {path:'login', component: LoginComponent },
    {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
    {path: '**', redirectTo: '' },
    {path:'testimonial', component:TestimonialsComponent},
    {path:'donor-form', component:DonorFormComponent},
    {path:'register', component:DonorFormComponent}
    

  ];

  @NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  })
  export class AppRoutingModule { }
  export const routingComponents=[
  
    LoginComponent,
    ProfileComponent,
    AboutusComponent,
    HomeComponent

  ]




