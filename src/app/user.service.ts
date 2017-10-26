import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class UserService {
  constructor(private http: Http) {}

  // 'https://radiant-wave-93298.herokuapp.com/user'
    getUsers() {
      return this.http.get('http://localhost:8080/user')
    }

    postClaim(body: any) {
      return this.http.post('http://localhost:8080/claim', body)
    }

    getClaimsByOwner(id) {
      return this.http.get(`http://localhost:8080/owner/${id}`)
    }

    getClaimsByContractor(id) {
      return this.http.get(`http://localhost:8080/contractor/${id}`)
    }

    parsedJWT(token) {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace('-', '+').replace('_', '/');
      return JSON.parse(window.atob(base64));
    };

}
