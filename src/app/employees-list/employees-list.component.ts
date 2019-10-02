import { Component, OnInit } from '@angular/core';
import {RestApiService} from '../shared/res-api.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss']
})
export class EmployeesListComponent implements OnInit {
  Employees: any = [];

  constructor(private restApi: RestApiService) { }

  ngOnInit() {
    this.loadEmployees();
  }

  loadEmployees() {
    return this.restApi.getEmployees().subscribe(data => this.Employees = data);
  }

  deleteEmployee(id) {
    this.restApi.deleteEmployee(id).subscribe(() => this.loadEmployees());
  }
}
