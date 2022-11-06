import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreComponent } from './modules/core/core.component';

const routes: Routes = [
  {
    path: '',
    component: CoreComponent,
    loadChildren: () => import('./modules/core/core.module').then(m => m.CoreModule)
  },
  {
    path: 'account',
    component: CoreComponent,
    loadChildren: () => import('./modules/accounts/accounts.module').then(m => m.AccountsModule),
    data: {
      title: 'Account'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
