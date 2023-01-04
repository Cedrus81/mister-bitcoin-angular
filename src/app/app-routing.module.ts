import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactDetailsComponent } from './cmps/contact-details/contact-details.component';
import { ContactEditComponent } from './cmps/contact-edit/contact-edit.component';
import { ContactResolver } from './services/contact.resolver';
import { ContactPageComponent } from './views/contact-page/contact-page.component';
import { HomePage } from './views/home-page/home-page.component';
import { LoginComponent } from './views/login/login.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'contact', component: ContactPageComponent, children: 
    [
      { path: 'edit', component: ContactEditComponent }
    ]
  },
  {
    path: 'contact/:id',
    component: ContactDetailsComponent,
    resolve: { contact: ContactResolver },
    children: [
        { path: 'edit', component: ContactEditComponent }
    ]
  },
  {path: '', component: HomePage},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, paramsInheritanceStrategy: 'always' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
