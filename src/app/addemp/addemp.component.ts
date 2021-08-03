import { Component, OnInit } from '@angular/core';
import { Employee } from '../shared/employee.model';
import { Router } from '@angular/router';
import { EmployeeService } from '../shared/employee.service';
@Component({
  selector: 'app-addemp',
  templateUrl: './addemp.component.html',
  styleUrls: ['./addemp.component.css']
})
export class AddempComponent implements OnInit {

  employee: Employee = new Employee;
  constructor(private router: Router , private employeeService: EmployeeService) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log('addemp');
    this.employeeService.post(this.employee).subscribe( data => {
    // console.log('User data submitted');
    // this.router.navigate(['employee']);
      console.log(data);
      this.router.navigate(['employee']);
    });
  }
}
