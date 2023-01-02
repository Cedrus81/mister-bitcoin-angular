import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-root/app.component';
import { HomePage } from './views/home-page/home-page.component';
import { ContactList } from './cmps/contact-list/contact-list.component';
import { ContactPageComponent } from './views/contact-page/contact-page.component';
import { ContactPreviewComponent } from './cmps/contact-preview/contact-preview.component';
import { ContactFilterComponent } from './cmps/contact-filter/contact-filter.component';
import { FormsModule } from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';
import { LineChartComponent } from './cmps/charts/charts.component';
import { AppHeaderComponent } from './cmps/app-header/app-header.component';
import { ContactDetailsComponent } from './cmps/contact-details/contact-details.component';
import { ContactEditComponent } from './contact-edit/contact-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    ContactList,
    ContactPageComponent,
    ContactPreviewComponent,
    ContactFilterComponent,
    LineChartComponent,
    AppHeaderComponent,
    ContactDetailsComponent,
    ContactEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
