import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class UserService {
  constructor(private http: Http) {}
    getUsers() {
      return this.http.get('https://radiant-wave-93298.herokuapp.com/user')
    }

    postClaim(body: any) {
      return this.http.post('https://radiant-wave-93298.herokuapp.com/claim', body)
    }
}
