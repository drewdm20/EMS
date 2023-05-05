import { employee } from 'src/app/models/employee';
import { Component } from '@angular/core';
import { EmployeeService } from 'src/app/Services/employee.service';

@Component({
  selector: 'app-details-card',
  templateUrl: './details-card.component.html',
  styleUrls: ['./details-card.component.css']
})
export class DetailsCardComponent {

  constructor(private service: EmployeeService, ) { }

  employeeNumber! : Number
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

}
