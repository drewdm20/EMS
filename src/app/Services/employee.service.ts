import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

  public getData(): Observable < any [] >{
    return this.http.get< any >("http://localhost:8080/employee/getEmployees");
  }

  public getIData(id:any): Observable < any [] >{
    return this.http.get< any >(`http://localhost:8080/employee/getEmployee/${id}`);
  }

  public addData(val:employee): Observable<any> {
    return this.http.post("http://localhost:8080/employee/addEmployee", val);
  }

  public updateData(val:any, id:any){
    return this.http.put("http://localhost:8080/employee/updateEmployee/" + id, val);
  }

  public deleteData(id:any){
    return this.http.delete("http://localhost:8080/employee/deleteEmployee/" + id);
  }
}
