import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactDetailsComponent } from './cmps/contact-details/contact-details.component';
import { ContactEditComponent } from './cmps/contact-edit/contact-edit.component';
import { ContactResolver } from './services/contact.resolver';
import { ContactPageComponent } from './views/contact-page/contact-page.component';
import { HomePage } from './views/home-page/home-page.component';

const routes: Routes = [
  {path: 'contact', component: ContactPageComponent, children: 
    [
      { path: 'edit/:id', component: ContactEditComponent, resolve: {contact: ContactResolver} },
      { path: 'edit', component: ContactEditComponent }
    ]
  },
  {path: 'contact/:id', 
  component: ContactDetailsComponent,
  resolve: {contact: ContactResolver}
  },
  {path: '', component: HomePage},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
