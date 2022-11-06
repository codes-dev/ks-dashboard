import { Component, OnInit } from '@angular/core';

export interface User {
  first_name: string;
  last_name: string;
  position: number;
  email: string;
}

const USERS: User[] = [
  {
    position: 1,
    first_name: 'Davonte',
    last_name: 'Metz',
    email: 'joesph15@gmail.com'
  },
  {
    position: 2,
    first_name: 'Dale',
    last_name: 'Crona',
    email: 'tod90@gmail.com'
  },
  {
    position: 3,
    first_name: 'Geo',
    last_name: 'Medhurst',
    email: 'roy.bahringer@yahoo.com'
  },
  {
    position: 4,
    first_name: 'Jerry',
    last_name: 'Weber',
    email: 'linnea.connelly@gmail.com'
  },
  {
    position: 5,
    first_name: 'Brycen',
    last_name: 'Beatty',
    email: 'jody.harber@yahoo.com'
  }
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  displayedColumns: string[] = ['position', 'first_name', 'last_name', 'email'];
  dataSource = USERS;

  constructor() { }

  ngOnInit(): void {
  }

}
