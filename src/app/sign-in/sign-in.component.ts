import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  signInForm = true;
  signInButton = false;
  constructor() { }

  ngOnInit() {

  }

  onSignIn() {
    this.signInForm = false;
    this.signInButton = false;
  }

}
