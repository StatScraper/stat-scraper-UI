import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { AccountComponent } from './views/account/account.component';
import { ContactComponent } from './views/contact/contact.component';


const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'account', component: AccountComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'logout', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
