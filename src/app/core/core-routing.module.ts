import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
  path: 'home',
  loadChildren: () => import('./home/home.module').then(x => x.HomeModule),
},
{
  path: 'admin',
  loadChildren: () => import('./dashboard/dashboard.module').then(x => x.DashboardModule),
},
{
  path: 'ml',
  loadChildren: () => import('./pages/pages.module').then(x => x.PagesModule),
},
{
  path: '**',
  redirectTo: 'home',
}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
