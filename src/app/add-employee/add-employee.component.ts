import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {

  ngOnInit(): void {
    
  }


  add(){
    Swal.fire(
      'The Internet?',
      'That thing is still around?',
      'question'
    )
  }
}