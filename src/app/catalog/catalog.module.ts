import {NgModule} from '@angular/core';

import {CatalogComponent} from './catalog.component';
import {CatalogListModule} from './catalog-list/catalog-list.module';
import {CatalogNavModule} from './catalog-nav/catalog-nav.module'

// material
import {MatSidenavModule} from '@angular/material/sidenav';

@NgModule({
  declarations: [
    CatalogComponent
  ],
  imports: [
    MatSidenavModule,
    CatalogListModule,
    CatalogNavModule,
  ],
  exports: [
    CatalogComponent,
  ],
  providers: [],
})
export class CatalogModule { }
