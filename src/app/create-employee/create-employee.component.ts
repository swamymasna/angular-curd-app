import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  empId: number;
  message : any;
  employee : Employee = new Employee();
  constructor(private empService : EmployeeService,
    private router: Router , private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.empId = this.route.snapshot.params['empId'];
    this.empService.getOneEmployeeById(this.empId).subscribe(data =>{
      this.employee = data;
      console.log(data);
    });
  }

  onSubmit(){
    this.createEmployee();
  }

  gotoListPage(){
    this.router.navigate(['/employees']);
  }

  createEmployee(){
    this.empService.saveEmployee(this.employee).subscribe(data => {
      this.employee = data;
      this.message = data;
      console.log(data);
      this.gotoListPage();
    });
  }

}
