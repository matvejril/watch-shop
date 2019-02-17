import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogDetailsComponent } from './catalog-details.component';

@NgModule({
  declarations: [CatalogDetailsComponent],
  imports: [
    CommonModule,
  ],
  exports: [
    CatalogDetailsComponent
  ]
})
export class CatalogDetailsModule { }
