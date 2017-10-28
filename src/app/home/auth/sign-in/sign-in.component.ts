import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/auth.service';
import { NgForm } from '@angular/forms';
import { Response } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

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
        if(data.role === 'contractor') {
          this.router.navigate(['/contractor'])
        } else if (data.role === 'adjustor') {
          this.router.navigate(['/adjustor'])
        } else if (data.role === 'claims user'){
          this.router.navigate(['/owner'])
        } else {
          alert('email or password do not match')
          this.router.navigate(['/'])
        }
        (error) =>  {
          this.router.navigate(['/'])
        }
      }
    );
  }



}
