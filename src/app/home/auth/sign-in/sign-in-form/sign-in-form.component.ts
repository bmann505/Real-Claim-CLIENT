import { Component, OnInit, Input } from '@angular/core';
import { Response } from '@angular/http';
import { AuthService } from 'app/auth.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router'

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.css']
})
export class SignInFormComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onSignIn(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    const body = {
      email: email,
      password: password
    }
    this.authService.signIn(body)
    .subscribe(
      (response: Response) => {
        let data = response.json();
        localStorage.setItem('token', data.data)
        this.router.navigate(['/owner'])
        },
      (error) => console.log(error)
    );
  }

}
