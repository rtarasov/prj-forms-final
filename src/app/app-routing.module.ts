import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FarmersComponent } from './farmers/farmers.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { FarmerStartComponent } from './farmers/farmer-start/farmer-start.component';
import { FarmerDetailComponent } from './farmers/farmer-detail/farmer-detail.component';
import { FarmerEditComponent } from './farmers/farmer-edit/farmer-edit.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/farmers', pathMatch: 'full' },
  { path: 'farmers', component: FarmersComponent, children: [
    { path: '', component: FarmerStartComponent },
    { path: 'new', component: FarmerEditComponent },
    { path: ':id', component: FarmerDetailComponent },
    { path: ':id/edit', component: FarmerEditComponent },
  ] },
  { path: 'shopping-list', component: ShoppingListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
