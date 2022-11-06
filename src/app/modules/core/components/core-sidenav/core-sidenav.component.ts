import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-core-sidenav',
  templateUrl: './core-sidenav.component.html',
  styleUrls: ['./core-sidenav.component.scss']
})
export class CoreSidenavComponent implements OnInit {

  @Input() expanded: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
