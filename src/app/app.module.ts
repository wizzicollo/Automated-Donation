import { ToastrModule } from 'ngx-toastr';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { HomeFormComponent } from './components/home-form/home-form.component';
import { DonorComponent } from './components/donor/donor.component';
import { DonorDetailsComponent } from './components/donor-details/donor-details.component';
import { DonorFormComponent } from './components/donor-form/donor-form.component';
import { ImageUploadComponent } from './components/image-upload/image-upload.component';
import { CharityRegistrationFormComponent } from './components/charity-registration-form/charity-registration-form.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfilesService } from 'src/app/core/service'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './components/register/register.component';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { ContactComponent } from './components/contact/contact.component';
import { CharitiesComponent } from './components/charities/charities.component';
import { CharityComponent } from './components/charity/charity.component';
import { JwtModule, JwtInterceptor  } from '@auth0/angular-jwt';
import { CommonModule } from '@angular/common';

import { UsermanagerService } from './services/usermanager.service';



export function tokenGetter() {
  return localStorage.getItem('token');
}


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
    LoginComponent,
    TestimonialsComponent,
    ContactComponent,
    CharityComponent,
    RegisterComponent,
    CharityComponent,
    AboutusComponent,
    ProfileComponent,
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
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:4200'],
        blacklistedRoutes: ['example.com/examplebadroute/'],
      },
    }),
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-top-center',
      preventDuplicates: true,
    }),
  ],

  providers: [
    AuthGuardService,
    AuthService,
    UsermanagerService,
    ProfilesService,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:JwtInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
