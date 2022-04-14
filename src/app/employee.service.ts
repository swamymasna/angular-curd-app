import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private base_url = 'https://springboot-ng-app.herokuapp.com/employee';
  constructor(private http : HttpClient) { }

  public getAllEmployees() : Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.base_url}/list`);
  }

  public saveEmployee(employee: Employee) : Observable<any>{
    return this.http.post(`${this.base_url}/save` , employee , {responseType : 'text'});
  }

  public deleteEmployeeById(empId: number) : Observable<any>{
    return this.http.delete(`${this.base_url}/${empId}` , {responseType:'text'});
  }

  public getOneEmployeeById(empId: number) : Observable<Employee>{
    return this.http.get<Employee>(`${this.base_url}/${empId}`);
  }
}
