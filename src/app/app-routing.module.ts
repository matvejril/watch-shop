import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './home/home.component'
import {CatalogComponent} from './catalog/catalog.component'
import {AboutUsComponent} from './about-us/about-us.component'
import {ContactsComponent} from './contacts/contacts.component'
import {TestPageComponent} from './test-page/test-page.component'

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'test-page', component: TestPageComponent},
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
