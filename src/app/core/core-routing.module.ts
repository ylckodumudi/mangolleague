import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
  path: '',
  loadChildren: () => import('./home/home.module').then(x => x.HomeModule),
},
{
  path: 'admin',
  loadChildren: () => import('./dashboard/dashboard.module').then(x => x.DashboardModule),
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
