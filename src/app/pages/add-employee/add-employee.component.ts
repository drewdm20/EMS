import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { EmployeeService } from 'src/app/Services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {

  constructor(private service: EmployeeService, private router : Router ) { }

  name! : String
  lastName! : String
  cellNumber! : String
  email! : String
  role! : String
  salary! : number

  ngOnInit(): void {
    
  }

  add(){
    var val = 
     {empName:this.name,
      empLastName: this.lastName,
      cellNumber:this.cellNumber,
      email:this.email,
      role:this.role,
      salary:Number(this.salary)}
  
    this.service.addData(val).subscribe(res =>{
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
