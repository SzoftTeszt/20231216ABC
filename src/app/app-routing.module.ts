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
import { ProfilComponent } from './part/profil/profil.component';
import { notLoggedGuard } from './not-logged.guard';

const routes: Routes = [
  {path:"", component:SinginComponent},
  {path:"home", component:HomeComponent,  canActivate:[loginGuard]},
  {path:"signup", component:SingupComponent, canActivate:[notLoggedGuard]},
  {path:"signin", component:SinginComponent, canActivate:[notLoggedGuard]},
  {path:"forgotpassword", component:ForgotPasswordComponent},
  {path:"verifyemail", component:VerifyEmailComponent},
  {path:"profil", component:ProfilComponent, canActivate:[loginGuard]},
  {path:"users", component:UserListComponent, canActivate:[sAdminGuard]},
  {path:"**", component:SinginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
