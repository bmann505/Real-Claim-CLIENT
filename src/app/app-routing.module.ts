import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignInFormComponent } from './home/auth/sign-in/sign-in-form/sign-in-form.component';
import { SignUpFormComponent } from './home/auth/sign-in/sign-up-form/sign-up-form.component';
import { HomeComponent } from './home/home.component';
import { OwnerComponent } from './home/views/owner/owner.component'
import { ContractorComponent } from './home/views/contractor/contractor.component'

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signin', component: SignInFormComponent},
  { path: 'signup', component: SignUpFormComponent},
  { path: 'owner', component: OwnerComponent },
  { path: 'contractor', component: ContractorComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
