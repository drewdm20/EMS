import { EmployeeTableComponent } from './../employee-table/employee-table.component';
import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/Services/employee.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {


  constructor(private service: EmployeeService, ) { }

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

  update(){
    var val = 
    {empName:this.name,
     empLastName: this.lastName,
     cellNumber:this.cellNumber,
     email:this.email,
     role:this.role,
     salary:Number(this.salary)}

     console.log(val)

    this.service.updateData((val), this.ID).subscribe(res =>{
      
    })
  }

  getData(){
    this.service.getIData(this.ID).subscribe((data:any)=>{
      console.log(data)
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
  }

}
