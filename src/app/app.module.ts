import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DetailsCardComponent } from './components/details-card/details-card.component';
import { AddEmployeeComponent } from './pages/add-employee/add-employee.component';
import { EmployeeTableComponent } from './components/employee-table/employee-table.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { SearchButtonComponent } from './components/search-button/search-button.component';
import { HomeComponent } from './pages/home/home.component';
import { MainHeadingComponent } from './components/main-heading/main-heading.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DetailsCardComponent,
    AddEmployeeComponent,
    EmployeeTableComponent,
    SearchInputComponent,
    SearchButtonComponent,
    HomeComponent,
    MainHeadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
