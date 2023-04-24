import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateComponent } from './components/update/update.component';
import { AddEmployeeComponent } from './pages/add-employee/add-employee.component';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:"AddEmp" , component: AddEmployeeComponent},
  {path: "update", component:UpdateComponent }
  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
