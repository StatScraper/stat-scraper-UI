import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { ContactComponent } from './views/contact/contact.component';
import { LoginComponent } from './views/login/login.component';
import { AccountComponent } from './views/account/account.component';
import { CommonLayoutComponent } from './layouts/common-layout/common-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ContactComponent,
    LoginComponent,
    AccountComponent,
    CommonLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
