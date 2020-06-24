import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { CharityRegistrationFormComponent } from './charity-registration-form/charity-registration-form.component';
import { CharitiesListComponent } from './components/charities-list/charities-list.component';
import { CharityDetailsComponent } from './components/charity-details/charity-details.component';
import { RegisterCharityComponent } from './components/register-charity/register-charity.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    CharityRegistrationFormComponent,
    CharitiesListComponent,
    CharityDetailsComponent,
    RegisterCharityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
