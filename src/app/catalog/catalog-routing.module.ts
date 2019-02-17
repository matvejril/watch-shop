import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {CatalogDetailsComponent} from './catalog-details/catalog-details.component'

const catalogRoutes: Routes = [
  {path: 'catalog/item/:id', component: CatalogDetailsComponent},
]

@NgModule({
  imports: [RouterModule.forChild(catalogRoutes)],
  exports: [RouterModule]
})
export class CatalogRoutingModule { }
