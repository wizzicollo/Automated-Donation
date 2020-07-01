import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { DemoListComponent } from './components/demo-list/demo-list.component';
import { DemoDetailsComponent } from './components/demo-details/demo-details.component';
import { AddDemoComponent } from './components/add-demo/add-demo.component'





const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path:'home',component:HomeComponent},
  {path:'testimonials',component:TestimonialsComponent},
  { path: 'demo', component: DemoListComponent },
  { path: 'demo/:id', component: DemoDetailsComponent },
  { path: 'add', component: AddDemoComponent }
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
