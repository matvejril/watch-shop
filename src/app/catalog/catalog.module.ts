import {NgModule} from '@angular/core';

import {CatalogComponent} from './catalog.component';
import {CatalogListModule} from './catalog-list/catalog-list.module'

// material

@NgModule({
  declarations: [
    CatalogComponent
  ],
  imports: [
    CatalogListModule
  ],
  exports: [
    CatalogComponent,
  ],
  providers: [],
})
export class CatalogModule { }
