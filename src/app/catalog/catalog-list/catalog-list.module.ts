import { NgModule } from '@angular/core';

import { CatalogListComponent } from './catalog-list.component';

// material
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    CatalogListComponent
  ],
  imports: [
    MatCardModule,
    MatButtonModule
  ],
  exports: [
    CatalogListComponent,
  ],
  providers: [],
})
export class CatalogListModule { }
