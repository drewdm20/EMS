import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { EmployeeService } from 'src/app/Services/employee.service';
import { Router } from '@angular/router';
import {FormGroup,FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {

  constructor(private service: EmployeeService, private router : Router ) { }

  // headers = new Headers();
  // this.headers.append('Content-Type','application/json');

  addForm = new FormGroup({
    empName: new FormControl('', Validators.required),
    empLastName: new FormControl('', Validators.required),
    cellNumber: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    role: new FormControl('', Validators.required),
    salary: new FormControl( Validators.required),
  });

  add(){
    console.warn(this.addForm.value);
    this.service.add(this.addForm.value).subscribe(res =>{
      this.addValid();
    })
  }

  addValid(){
    Swal.fire(
      'Success',
      'Employee Successfully Added',
      'success'
    )
  }
}
