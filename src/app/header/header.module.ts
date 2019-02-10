import { NgModule } from '@angular/core';

import {HeaderComponent} from './header.component';
import {HeaderNavComponent} from './header-nav/header-nav.component'

import {RouterModule} from '@angular/router';

// material
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button'

@NgModule({
  declarations: [
    HeaderComponent,
    HeaderNavComponent
  ],
  imports: [
    RouterModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
  ],
  exports: [
    HeaderComponent,
  ],
  providers: [],
})
export class HeaderModule { }
