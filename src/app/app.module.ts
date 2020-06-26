import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { HomeDetailComponent } from './home-detail/home-detail.component';
import { HomeFormComponent } from './home-form/home-form.component';
import { DonorComponent } from './donor/donor.component';
import { DonorDetailsComponent } from './donor-details/donor-details.component';
import { DonorFormComponent } from './donor-form/donor-form.component';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { CharityRegistrationFormComponent } from './charity-registration-form/charity-registration-form.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ProfileComponent } from './profile/profile.component';





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HomeDetailComponent,
    HomeFormComponent,
    DonorComponent,
    DonorDetailsComponent,
    DonorFormComponent,
    ImageUploadComponent,
    CharityRegistrationFormComponent,
    FooterComponent,
    DashboardComponent,
    LoginComponent,
    TestimonialsComponent,
    AboutusComponent,
    ProfileComponent,
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
