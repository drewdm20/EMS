import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateComponent } from './components/update/update.component';
import { AddEmployeeComponent } from './pages/add-employee/add-employee.component';
import { HomeComponent } from './pages/home/home.component';
import { DetailsCardComponent } from './components/details-card/details-card.component';


const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:"AddEmp" , component: AddEmployeeComponent},
  {path: "update", component:UpdateComponent },
  {path: "details", component: DetailsCardComponent }

  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
