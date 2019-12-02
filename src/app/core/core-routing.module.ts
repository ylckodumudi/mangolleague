import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoreComponent } from './core.component';


const routes: Routes = [
  {
    path: '',
    component: CoreComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(x => x.HomeModule),
      },
      {
        path: 'admin',
        loadChildren: () => import('./dashboard/dashboard.module').then(x => x.DashboardModule),
      },
      {
        path: 'match',
        loadChildren: () => import('./matches/matches.module').then(x => x.MatchesModule),
      },
      {
        path: '',
        redirectTo: 'home',
      }
    ]
  },





];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
