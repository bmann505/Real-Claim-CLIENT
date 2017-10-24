import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class UserService {
  constructor(private http: Http) {}
    getUsers() {
      return this.http.get('http://localhost:8080/user')
    }

    postClaim(body: any) {
      return this.http.post('http://localhost:8080/claim', body)
    }
}
