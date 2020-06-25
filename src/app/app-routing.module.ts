import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';





const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'services',component:HomeComponent},
  {path:'aboutus',component:HomeComponent},
  {path:'donations',component:HomeComponent},
  {path:'register',component:HomeComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
