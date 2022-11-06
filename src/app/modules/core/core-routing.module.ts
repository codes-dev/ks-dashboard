import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartsComponent } from './routes/charts/charts.component';
import { DashboardComponent } from './routes/dashboard/dashboard.component';
import { FormsComponent } from './routes/forms/forms.component';
import { TablesComponent } from './routes/tables/tables.component';
import { TypographyComponent } from './routes/typography/typography.component';
import { UiElementsComponent } from './routes/ui-elements/ui-elements.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    title: 'Dashboard',
    data: {
      title: 'Dashboard',
    }
  },
  {
    path: 'typography',
    component: TypographyComponent,
    title: 'Typography',
    data: {
      title: 'Typography',
      description: 'This project also includes <a href="https://tailwindcss.com/docs" target="_blank" rel="noreferrer noopener">Tailwind CSS</a>'
    }
  },
  {
    path: 'tables',
    component: TablesComponent,
    title: 'Tables',
    data: {
      title: 'Tables',
      description: 'Tables listed are imported from <a href="https://material.angular.io/components/table/overview" target="_blank" rel="noreferrer noopener">Angular Material Design</a>'
    }
  },
  {
    path: 'charts',
    component: ChartsComponent,
    title: 'Charts',
    data: {
      title: 'Charts',
      description: 'Charts below were designed using <a href="https://www.chartjs.org/docs/latest" target="_blank" rel="noreferrer noopener">Chart.js</a>'
    }
  },
  {
    path: 'ui-elements',
    component: UiElementsComponent,
    title: 'UI Elements',
    data: {
      title: 'UI Elements',
      description: 'Element and components list are drawn from <a href="https://tailwind-elements.com/docs/standard/" target="_blank" rel="noreferrer noopener">Tailwind UI Elements</a><br>N/B: Any component that requires javascript functionality might not work as expected, you will need to create the functionality yourself'
    }
  },
  {
    path: 'forms',
    component: FormsComponent,
    title: 'Forms',
    data: {
      title: 'Forms',
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
