import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdateempComponent } from './updateemp/updateemp.component';
import { Employee } from './shared/employee.model';
import { EmployeeComponent } from './employee/employee.component';
import { AddempComponent } from './addemp/addemp.component';

const routes: Routes = [
  { path: '', redirectTo: 'employee', pathMatch: 'full' },
  { path: 'employee', component: EmployeeComponent },
  { path: 'update', component: UpdateempComponent },
  { path: 'employee/:id', component: UpdateempComponent },
  { path: 'addemp', component: AddempComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
