import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignInFormComponent } from './home/auth/sign-in/sign-in-form/sign-in-form.component';
import { HomeComponent } from './home/home.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signin', component: SignInFormComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
