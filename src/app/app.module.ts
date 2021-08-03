import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeService } from './shared/employee.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
//import { UpdateempComponent } from './updateemp/updateemp.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateempComponent } from './updateemp/updateemp.component';
import { RouterModule } from '@angular/router';
import { AddempComponent } from './addemp/addemp.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    UpdateempComponent,
    AddempComponent,
  //  UpdateempComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
