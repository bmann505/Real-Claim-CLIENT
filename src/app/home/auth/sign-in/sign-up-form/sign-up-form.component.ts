import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/auth.service';
import { NgForm } from '@angular/forms';
import { Response } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent implements OnInit {
adjustor = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

onAdjustor() {
  this.adjustor = true;
}

onSignUp(form: NgForm) {
  const name = form.value.name;
  const email = form.value.email;
  const password = form.value.password;
  const body = {
    name: name,
    email: email,
    password: password
  }
  this.authService.signUp(body)
  .subscribe(
    (response: Response) => {
      let data = response.json()
      localStorage.setItem('token', data.data);
      this.router.navigate(['/']);
    }
  )
}

}
