import {NgModule} from '@angular/core';

import {CatalogRoutingModule} from './catalog-routing.module'

import {CatalogComponent} from './catalog.component';
import {CatalogListModule} from './catalog-list/catalog-list.module';
import {CatalogDetailsModule} from './catalog-details/catalog-details.module'
import {CatalogNavModule} from './catalog-nav/catalog-nav.module'

// material
import {MatSidenavModule} from '@angular/material/sidenav';

@NgModule({
  declarations: [
    CatalogComponent
  ],
  imports: [
    CatalogRoutingModule,
    MatSidenavModule,
    CatalogListModule,
    CatalogDetailsModule,
    CatalogNavModule,
  ],
  exports: [
    CatalogComponent,
  ],
  providers: [],
})
export class CatalogModule { }
