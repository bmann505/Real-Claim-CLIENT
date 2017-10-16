import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './home/header/header.component';
import { SignInComponent } from './home/auth/sign-in/sign-in.component';
import { SignInFormComponent } from './home/auth/sign-in/sign-in-form/sign-in-form.component';
import { HomeComponent } from './home/home.component';
import { SignUpFormComponent } from './home/auth/sign-in/sign-up-form/sign-up-form.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignInComponent,
    SignInFormComponent,
    HomeComponent,
    SignUpFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
