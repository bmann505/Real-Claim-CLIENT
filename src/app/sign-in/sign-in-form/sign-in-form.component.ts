import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.css']
})
export class SignInFormComponent implements OnInit {
  @Input() onSignIn: () => void;
  constructor() { }

  ngOnInit() {
  }

}