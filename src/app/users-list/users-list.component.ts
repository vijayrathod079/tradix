import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  employeeDataSrc : any;

  public employeeDetail: Employee[];
  constructor(private _srv: DataService) { }
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
 
  ngOnInit(): void {

// Fetching data stored in service.
    this._srv.subscriber$.subscribe(employee => {
            console.log(employee);
            this.setDataSrc(employee);
    });
}
setDataSrc (data) {
  this.employeeDetail =  data;
}
}