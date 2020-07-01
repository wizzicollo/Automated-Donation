import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FileUploadModule } from 'ng2-file-upload';


    
import { MatIconModule } from '@angular/material/icon';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';



import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { CharityComponent } from './charity/charity.component';
import { AddDemoComponent } from './components/add-demo/add-demo.component';
import { DemoDetailsComponent } from './components/demo-details/demo-details.component';
import { DemoListComponent } from './components/demo-list/demo-list.component';
import { DemoComponent } from './demo/demo.component';


 



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    TestimonialsComponent,
    CharityComponent,
    AddDemoComponent,
    DemoDetailsComponent,
    DemoListComponent,
    DemoComponent,
    
   
  
   
    
   


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FileUploadModule
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
