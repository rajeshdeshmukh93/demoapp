import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { EmployeeService } from '../shared/employee.service';
import { Employee } from '../shared/employee.model';

@Component({
  selector: 'app-updateemp',
  templateUrl: './updateemp.component.html',
  styleUrls: ['./updateemp.component.css']
})
export class UpdateempComponent implements OnInit {

  emp: Employee;
  editForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router, private employeeservice: EmployeeService) { }

  ngOnInit() {
    let empId = localStorage.getItem("updateEmpId");
    console.log(empId);
    if (!empId) {
      alert("Invalid action.")
      this.router.navigate(['employee']);
      return;
    }
    this.editForm = this.formBuilder.group({
      _id: [],
      name:['', Validators.required],
      office:['', Validators.required],
      salary:['', Validators.required]
    });

    this.employeeservice.getEmpById(empId).subscribe(
      (data) => {
        this.editForm.setValue(data)
        console.log(data);
      });

    
  }
  onsubmit(){
    console.log('Clicked');
    this.employeeservice.update(this.editForm.value).subscribe(data => {
      console.log(this.editForm.value);
      this.router.navigate(['employee']);
    });
  }

}


// onSubmit(){
//   console.log("Up");
//   this.employeeservice.update(this.editForm.value).subscribe((data)=>
//   {this.router.navigate(['employee']);})