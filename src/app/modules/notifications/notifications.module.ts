import { NgModule } from '@angular/core';

import { NotificationsRoutingModule } from './notifications-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NotificationsWigdetComponent } from './components/wigdets/notifications-wigdet/notifications-wigdet.component';
import { NotificationCardComponent } from './components/notification-card/notification-card.component';


@NgModule({
  declarations: [
  
    NotificationsWigdetComponent,
       NotificationCardComponent
  ],
  imports: [
    SharedModule,
    NotificationsRoutingModule
  ],
  exports: [
  
    NotificationsWigdetComponent
  ]
})
export class NotificationsModule { }
