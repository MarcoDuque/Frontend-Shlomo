import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthContentComponent } from './components/auth/auth-content.component';
import { HomeComponent } from './components/home/home.component';
import { CustomersComponent } from './components/customers/customers.component';

const routes: Routes = [
  {path:'',redirectTo:'/home', pathMatch:'full'},
  {path: 'login', component: AuthContentComponent},
  {path: 'home', component: HomeComponent},
  {path: 'customers', component: CustomersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
}
