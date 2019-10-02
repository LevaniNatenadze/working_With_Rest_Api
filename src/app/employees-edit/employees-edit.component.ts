import { Component, OnInit } from '@angular/core';
import {RestApiService} from '../shared/res-api.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-employees-edit',
  templateUrl: './employees-edit.component.html',
  styleUrls: ['./employees-edit.component.scss']
})
export class EmployeesEditComponent implements OnInit {
  id = this.actRoute.snapshot.params.id;
  employeeData: any = {};

  constructor(
    private restApi: RestApiService,
    private actRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.restApi.getEmployee(this.id)
      .subscribe(data => {this.employeeData = data; });
  }

  updateEmployee() {
    this.restApi.updateEmployee(this.id, this.employeeData)
      .subscribe(() => {
        this.router.navigate(['/employees-list']);
      });
  }

}
