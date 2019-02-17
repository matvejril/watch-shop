import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import { CatalogListComponent } from './catalog-list.component';

// material
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    CatalogListComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    MatCardModule,
    MatButtonModule,
  ],
  exports: [
    CatalogListComponent,
  ],
  providers: [],
})
export class CatalogListModule { }
