import { DOCUMENT } from '@angular/common';
import { Output, EventEmitter, Input, Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-core-toolbar',
  templateUrl: './core-toolbar.component.html',
  styleUrls: ['./core-toolbar.component.scss']
})
export class CoreToolbarComponent implements OnInit {

  @Input() expanded: boolean = false;
  @Input() notificationsOpened: boolean = false;
  @Output('toggled') toggled: EventEmitter<boolean> = new EventEmitter<boolean>(false);
  @Output('toggledNotifications') toggledNotifications: EventEmitter<boolean> = new EventEmitter<boolean>(false);

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    
    
    if (this.document) {
      this.document.addEventListener('click', (e: any) => {
        const notifications = this.document.getElementById('notifications');
        const inSidenav = notifications ? notifications.contains((e.target as HTMLElement)) : false;
        const toggle = this.document.getElementById('notificationToggle');
        
        

        if (this.notificationsOpened && !inSidenav && e.target !== toggle && !toggle?.contains(e.target)) {          
          this.toggledNotifications.next(false);          
        }
      });
    }     
  }

  toggleSidenav() {
    this.expanded = !this.expanded;
    this.toggled.next(this.expanded);
  }

  toggleNotifications() {
    this.toggledNotifications.next(!this.notificationsOpened);
  }

}
