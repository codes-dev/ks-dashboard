import { NgModule } from '@angular/core';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CoreRoutingModule } from './core-routing.module';
import { CoreComponent } from './core.component';
import { DashboardComponent } from './routes/dashboard/dashboard.component';
import { CoreToolbarComponent } from './components/core-toolbar/core-toolbar.component';
import { CoreSidenavComponent } from './components/core-sidenav/core-sidenav.component';
import { CoreUtilsbarComponent } from './components/core-utilsbar/core-utilsbar.component';
import { CoreBreadbrumbsComponent } from './components/core-breadbrumbs/core-breadbrumbs.component';
import { SharedModule } from '../shared/shared.module';
import { TypographyComponent } from './routes/typography/typography.component';
import { TablesComponent } from './routes/tables/tables.component';
import { ChartsComponent } from './routes/charts/charts.component';
import { NotificationsModule } from '../notifications/notifications.module';
import { GenericTableComponent } from './routes/tables/components/generic-table/generic-table.component';
import { FilterTableComponent } from './routes/tables/components/filter-table/filter-table.component';
import { PaginatedTableComponent } from './routes/tables/components/paginated-table/paginated-table.component';
import { SortTableComponent } from './routes/tables/components/sort-table/sort-table.component';
import { UiElementsComponent } from './routes/ui-elements/ui-elements.component';
import { FormsComponent } from './routes/forms/forms.component';


@NgModule({
  declarations: [
    CoreComponent,
    DashboardComponent,
    CoreToolbarComponent,
    CoreSidenavComponent,
    CoreUtilsbarComponent,
    CoreBreadbrumbsComponent,
    TypographyComponent,
    TablesComponent,
    ChartsComponent,
    GenericTableComponent,
    FilterTableComponent,
    PaginatedTableComponent,
    SortTableComponent,
    UiElementsComponent,
    FormsComponent
  ],
  imports: [
    SharedModule,
    CoreRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    NotificationsModule
  ]
})
export class CoreModule { }
