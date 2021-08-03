import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import { Employee } from '../shared/employee.model';

import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  public showTable = false
  public employess : [];   
  constructor(private emplyeeService: EmployeeService, private router: Router) { }
 
  
  ngOnInit() {
    // this.getdata();
  }

  getdata(){
    this.emplyeeService.getempdata().subscribe( res => {
        this.employess = res;
        this.showTable = true
        console.log(this.employess);
    });
  }

  delete(emp:Employee){
    this.emplyeeService.delete(emp._id).subscribe( res => {
          console.log(res);
          console.log('Employee deleted');
    });
  }

  update(emp){
    console.log(emp);
    localStorage.removeItem("updateEmpId");
    localStorage.setItem("updateEmpId",emp._id.toString());
    this.router.navigate(['employee/id']);
  }

  addEmp(){
    this.router.navigate(['addemp']);
  }
}
