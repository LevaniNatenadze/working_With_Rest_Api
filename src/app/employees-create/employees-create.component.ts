import {Component, Input, OnInit} from '@angular/core';
import {RestApiService} from '../shared/res-api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-employees-create',
  templateUrl: './employees-create.component.html',
  styleUrls: ['./employees-create.component.scss']
})
export class EmployeesCreateComponent implements OnInit {

  @Input() employeeDetails = { name: '', email: '', phone: 0};

  constructor(public restApi: RestApiService, public router: Router) { }

  ngOnInit() {
  }

  addEmployee() {
    this.restApi.createEmployee(this.employeeDetails).subscribe(() => {
      this.router.navigate(['/employees-list']);
    });
  }


}
