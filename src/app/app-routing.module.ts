import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { ListEmployeesComponent } from './list-employees/list-employees.component';

const routes: Routes = [
  {path:'employees' , component: ListEmployeesComponent},
  {path:'' , redirectTo: 'employees' , pathMatch:'full'},
  {path:'create-employee' , component: CreateEmployeeComponent},
  {path:'create-employee/:empId' , component: CreateEmployeeComponent},
  {path:'employee-details/:empId' , component: EmployeeDetailsComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
