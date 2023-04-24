import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {

  update(){
    Swal.fire(
      'Success',
      'Employee Successfully Updated',
      'success'
    )
  }

}
