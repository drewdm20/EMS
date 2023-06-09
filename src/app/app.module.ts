import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { UpdateComponent } from './components/update/update.component';
import { DetailsCardComponent } from './components/details-card/details-card.component';
import { AddEmployeeComponent } from './pages/add-employee/add-employee.component';
import { EmployeeTableComponent } from './components/employee-table/employee-table.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { SearchButtonComponent } from './components/search-button/search-button.component';
import { HomeComponent } from './pages/home/home.component';
import { MainHeadingComponent } from './components/main-heading/main-heading.component';
import { FilterPipe } from './filter.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    UpdateComponent,
    DetailsCardComponent,
    AddEmployeeComponent,
    EmployeeTableComponent,
    SearchInputComponent,
    SearchButtonComponent,
    HomeComponent,
    MainHeadingComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
