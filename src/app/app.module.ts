import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DonorFormComponent } from './donor-form/donor-form.component';
import { DateCountPipe } from './date-count.pipe';
import { DonorComponent } from './donor/donor.component';
import { DonorDetailsComponent } from './donor-details/donor-details.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';

@NgModule({
  declarations: [
    AppComponent,
    DonorFormComponent,
    DateCountPipe,
    DonorComponent,
    DonorDetailsComponent,
    TestimonialsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
