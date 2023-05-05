import { employee } from 'src/app/models/employee';
import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { EmployeeService } from 'src/app/Services/employee.service';
import { Router } from '@angular/router';
import {FormGroup,FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { employeeId } from 'src/app/models/employeeId';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {

  constructor(private service: EmployeeService, private router : Router ) { }

  EMP!: employeeId[];

  addForm = new FormGroup({
    employeeNumber: new FormControl('', Validators.required),
    empName: new FormControl('', Validators.required),
    empLastName: new FormControl('', Validators.required),
    cellNumber: new FormControl('', [Validators.required, Validators.maxLength(10)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    role: new FormControl('', Validators.required),
    salary: new FormControl('', Validators.required),
  });

  async add(){
    
    try {
      this.service.addData(this.addForm.value).subscribe(res =>{
        console.warn(this.addForm.value);  
        this.getEmployees()
      })

    this.addValid();

    } catch (err) {
      console.log(err);
    }
   
  }

  addValid(){
    Swal.fire(
      'Success',
      'Employee Successfully Added',
      'success'
    )
    this.router.navigateByUrl('')
  }

  getEmployees(){
    
    this.service.getData().subscribe(data=>{
      this.EMP = data;
    }) 
  }
}
