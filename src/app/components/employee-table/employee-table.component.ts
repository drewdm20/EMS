import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { employeeId } from 'src/app/models/employeeId';
import { EmployeeService } from 'src/app/Services/employee.service';

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.css']
})
export class EmployeeTableComponent implements OnInit{

  constructor(private service: EmployeeService) { }

  EMP!: employeeId[];
  public searchString: any;
  bool = true

  ngOnInit(): void {
    this.getEmployees()
    localStorage.clear()
  }

  getEmployees(){
    
    this.service.getData().subscribe(data=>{
      this.EMP = data;
      if(this.EMP.length == 0){
        this.bool = false
      }else{
        this.bool = true
      }
    }) 
  }

  delete(id:any){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.deleteData(id).subscribe(data=>{
        })


        Swal.fire({
          title: 'Deleted',
          text: "Your file has been deleted",
          icon: 'success',
        }).then((result) => {
          if (result.isConfirmed) {
            location.reload( )
          }
        })



      }
    })
  }

  deleteSoft(id:any){
      this.EMP = this.EMP.filter(item => item.empId !== id);
      console.log(this.EMP)
  }

  setId(id:any){
    localStorage.setItem("id",id)
  }

}
