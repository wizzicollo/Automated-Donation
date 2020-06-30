import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { DonorFormComponent } from './donor-form/donor-form.component';


const routes: Routes = [
  {path:'testimonial', component:TestimonialsComponent},
  {path:'donor-form', component:DonorFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
