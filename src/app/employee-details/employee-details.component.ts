import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  empId: number;
  employee: Employee = new Employee();
  constructor(private empService: EmployeeService,
    private route: ActivatedRoute  ) { }

  ngOnInit(): void {
    this.fetchEmployeeDetails();
  }

  fetchEmployeeDetails(){
    this.empId = this.route.snapshot.params['empId'];
    this.empService.getOneEmployeeById(this.empId).subscribe(data => {
      this.employee = data;
      console.log(data);
    });

  }
}
