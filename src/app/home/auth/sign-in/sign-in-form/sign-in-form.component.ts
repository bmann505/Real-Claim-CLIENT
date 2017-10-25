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
        console.log(data)
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
