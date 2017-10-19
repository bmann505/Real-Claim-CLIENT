import { Injectable } from '@angular/core';
import { Http, HttpModule } from '@angular/http';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  constructor(private http: Http, private router: Router){}

  signIn(body: any) {
    return this.http.post('http://localhost:8080/signin', body)
  }
}
