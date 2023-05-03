import { Injectable } from '@angular/core';
import { HttpClient, HttpParams,HttpHeaders } from '@angular/common/http';
import { Observable, map} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

  URL = "http://localhost:8080/employee/"

  public getData(): Observable < any [] >{
    return this.http.get< any >(this.URL + "getEmployees");
  }

  public getIData(id:any): Observable < any [] >{
    return this.http.get< any >(this.URL + `getEmployee/${id}`);
  }

  public addData(val:any): Observable<any> {
    return this.http.post(this.URL + "addEmployee", val);
  }

  public updateData(val:any, id:any){
    return this.http.put(this.URL + "updateEmployee/" + id, val);
  }

  public deleteData(id:any){
    return this.http.delete(this.URL + "deleteEmployee/" + id);
  }
}
