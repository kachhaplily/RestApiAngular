import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './Guard/auth.guard';
import { RegistrationComponent } from './Components/registration/registration.component';
import { LoginComponent } from './Components/login/login.component';
import { AccountComponent } from './Components/account/account.component';

const routes: Routes = [
  { path: '',  component: RegistrationComponent },
  { path: 'login',  component: LoginComponent},
  { path: 'account',  component:AccountComponent,canActivate:[AuthGuard] },

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
