import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

  empId: number;
  employees: Employee[];
  constructor(private empService: EmployeeService , 
    private router: Router  ) { }

  ngOnInit(): void {
    this.getEmployeesList();
  }

  public getEmployeesList(){
    return this.empService.getAllEmployees().subscribe(data => {
      this.employees = data;
      console.log(data);
    });
  }

  deleteEmployee(empId: number){
    this.empService.deleteEmployeeById(empId).subscribe(data =>{
      this.getEmployeesList();
      console.log(data);

    });
  }

  updateEmployee(empId: number){
    this.router.navigate(['create-employee' , empId]);
  }

  viewEmployee(empId : number){
    this.router.navigate(['employee-details' , empId]);
  }
}
