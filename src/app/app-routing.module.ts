import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';

const routes: Routes = [{
  path: '',
  component: DashboardComponent
},
{
  path: 'detail/:id',
  component: ItemDetailComponent
},
{ path: '**', component: DashboardComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
