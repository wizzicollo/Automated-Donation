import { CharitiesListComponent } from './components/charities-list/charities-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharityDetailsComponent } from './components/charity-details/charity-details.component';
import { RegisterCharityComponent } from './components/register-charity/register-charity.component';


const routes: Routes = [
  { path: '', redirectTo: 'charities', pathMatch: 'full' },
  { path: 'charities', component: CharitiesListComponent },
  { path: 'charities/:id', component: CharityDetailsComponent },
  { path: 'add', component: RegisterCharityComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
