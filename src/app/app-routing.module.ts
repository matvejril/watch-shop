import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {CatalogComponent} from './catalog/catalog.component'
import {AboutUsComponent} from './about-us/about-us.component'
import {ContactsComponent} from './contacts/contacts.component'

const routes: Routes = [
  {path: 'catalog', component: CatalogComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'contacts', component: ContactsComponent},
  // {path: '**', component: NotFoundComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
