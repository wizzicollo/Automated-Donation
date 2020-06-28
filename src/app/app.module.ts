import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    
    NavbarComponent,
    HomeComponent,
    HomeFormComponent,
    DonorComponent,
    DonorDetailsComponent,
    DonorFormComponent,
    ImageUploadComponent,
    CharityRegistrationFormComponent,
    FooterComponent,
    DashboardComponent,
    // LoginComponent,
    TestimonialsComponent,
    // RegisterComponent,
    // AboutusComponent,
    // ProfileComponent,
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    ReactiveFormsModule,
    HttpClientModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
