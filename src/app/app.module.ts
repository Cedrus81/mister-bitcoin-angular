import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-root/app.component';
import { HomePage } from './views/home-page/home-page.component';
import { ContactList } from './cmps/contact-list/contact-list.component';
import { ContactPageComponent } from './views/contact-page/contact-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    ContactList,
    ContactPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
