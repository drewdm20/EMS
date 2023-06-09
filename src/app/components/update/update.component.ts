import { EmployeeTableComponent } from './../employee-table/employee-table.component';
import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/Services/employee.service';
import {FormGroup,FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {


  constructor(private service: EmployeeService, private router : Router  ) { }

  employeeNumber! : String
  name! : String
  lastName! : String
  cellNumber! : String
  email! : String
  role! : String
  salary! : number

  ID = localStorage.getItem("id")

  ngOnInit(): void {
    this.getData()
  }

  updateForm = new FormGroup({
    employeeNumber: new FormControl(this.name, Validators.required),
    empName: new FormControl(this.name, Validators.required),
    empLastName: new FormControl(this.lastName, Validators.required),
    cellNumber: new FormControl(this.cellNumber, [Validators.required, Validators.maxLength(10)]),
    email: new FormControl(this.email, [Validators.required, Validators.email]),
    role: new FormControl(this.role, Validators.required),
    salary: new FormControl(this.salary, Validators.required),
  });

  async update(){
    
    try {
      this.service.updateData((this.updateForm.value), this.ID).subscribe(res =>{
        
      })

    this.updateValid()

    } catch (err) {
      console.log(err);
    }
   
  }

  getData(){
    this.service.getIData(this.ID).subscribe((data:any)=>{
      console.log(data)
      this.employeeNumber = data.employeeNumber
      this.name = data.empName ;
      this.lastName = data.empLastName;
      this.cellNumber = data.cellNumber;
      this.email = data.email;
      this.role = data.role;
      this.salary = data.salary;
    }) 
  }

  updateValid(){
    Swal.fire(
      'Success',
      'Employee Successfully Updated',
      'success'
    )
    this.router.navigateByUrl('')
  }

}
