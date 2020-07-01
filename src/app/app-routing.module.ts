import { CharityComponent } from './components/charity/charity.component';
import { RegisterComponent } from './components/register/register.component';
import { CharitiesComponent } from './components/charities/charities.component';
import { ContactComponent } from './components/contact/contact.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { AuthGuardService as AuthGuard } from './services/auth-guard.service';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { DonorFormComponent } from './components/donor-form/donor-form.component';






const routes: Routes = [

    {path:'home',component:HomeComponent},
    {path:'about',component:AboutusComponent},
    {path:'contact', component: ContactComponent},
    {path:'donate', component: DonorFormComponent },
    {path:'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

    {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
    {path: '**', redirectTo: 'home' },
  { path: 'profile', component: ProfileComponent },
    {path:'charity', component:CharityComponent},




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




