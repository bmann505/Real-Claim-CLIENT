import { Injectable } from '@angular/core';
import { Http, HttpModule } from '@angular/http';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  // https://radiant-wave-93298.herokuapp.com/signin'
  // https://radiant-wave-93298.herokuapp.com/signup
  constructor(private http: Http, private router: Router){}

  signIn(body: any) {
    return this.http.post('https://radiant-wave-93298.herokuapp.com/signin', body)
  }

  signUp(body: any) {
    return this.http.post('https://radiant-wave-93298.herokuapp.com/signup', body)
  }
}
