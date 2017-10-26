import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { HeaderComponent } from './home/header/header.component';
import { SignInComponent } from './home/auth/sign-in/sign-in.component';
import { SignInFormComponent } from './home/auth/sign-in/sign-in-form/sign-in-form.component';
import { HomeComponent } from './home/home.component';
import { SignUpFormComponent } from './home/auth/sign-in/sign-up-form/sign-up-form.component';

import { UserService } from './user.service';
import { AuthService } from './auth.service';
import { OwnerComponent } from './home/views/owner/owner.component';
import { UserHeaderComponent } from './home/views/user-header/user-header.component';
import { NewClaimFormComponent } from './home/views/owner/new-claim-form/new-claim-form.component';
import { ContractorComponent } from './home/views/contractor/contractor.component';
import { AdjustorComponent } from './home/views/adjustor/adjustor.component';
import { OwnerClaimsComponent } from './home/views/owner/owner-claims/owner-claims.component';
import { ContractorClaimsComponent } from './home/views/contractor/contractor-claims/contractor-claims.component';
import { AdjustorClaimsComponent } from './home/views/adjustor/adjustor-claims/adjustor-claims.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignInComponent,
    SignInFormComponent,
    HomeComponent,
    SignUpFormComponent,
    OwnerComponent,
    UserHeaderComponent,
    NewClaimFormComponent,
    ContractorComponent,
    AdjustorComponent,
    OwnerClaimsComponent,
    ContractorClaimsComponent,
    AdjustorClaimsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [UserService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
