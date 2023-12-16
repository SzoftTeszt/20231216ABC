import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './part/home/home.component';
import { SingupComponent } from './part/singup/singup.component';
import { SinginComponent } from './part/singin/singin.component';
import { ForgotPasswordComponent } from './part/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './part/verify-email/verify-email.component';
import { UserListComponent } from './part/user-list/user-list.component';
import { sAdminGuard } from './sadmin.guard';
import { loginGuard } from './login.guard';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"home", redirectTo:""},
  {path:"signup", component:SingupComponent, canActivate:[loginGuard]},
  {path:"signin", component:SinginComponent, canActivate:[loginGuard]},
  {path:"forgotpassword", component:ForgotPasswordComponent},
  {path:"verifyemail", component:VerifyEmailComponent},
  {path:"users", component:UserListComponent, canActivate:[sAdminGuard]},
  {path:"**", component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
