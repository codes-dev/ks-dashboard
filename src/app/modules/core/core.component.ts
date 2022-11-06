import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss']
})
export class CoreComponent implements OnInit, AfterViewInit {

  expanded: boolean = false;
  @ViewChild('sidenav') sidenav!: MatSidenav;
  @ViewChild('notifications') notifications!: MatSidenav;

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {   
  }

  ngAfterViewInit(): void {
    
    if (this.document) {
      this.document.addEventListener('click', (e: any) => {
        const inSidenav = this.sidenav._content.nativeElement.contains((e.target as HTMLElement));
        const toggle = this.document.getElementById('sidenavToggle');
        const overlay = this.document.getElementById('core-overlay');
        

        if (this.expanded && !inSidenav && e.target !== toggle && !toggle?.contains(e.target) && e.target !== overlay) {          
          this.toggleSidenav(false);          
        }
      });
    }     
  }

  toggleSidenav(expanded: boolean) {    
    this.expanded = expanded;
  }

  toggleNotofications(open: boolean) {
    
    if (open && !this.notifications.opened) {
      this.notifications.open();
    } else {
      if (this.notifications.opened) {
        this.notifications.close();
      }
    }
  }

}
