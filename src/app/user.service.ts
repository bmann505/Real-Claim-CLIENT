import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class UserService {
  constructor(private http: Http) {}

  // 'https://radiant-wave-93298.herokuapp.com/user'
  // http://localhost:8080/adjustor/
    getUsers() {
      return this.http.get('https://radiant-wave-93298.herokuapp.com/owner')
    }

    postClaim(body: any) {
      return this.http.post('https://radiant-wave-93298.herokuapp.com/claim', body)
    }

    getClaimsByOwner(id) {
      return this.http.get(`https://radiant-wave-93298.herokuapp.com/owner/${id}`)
    }

    getClaimsByContractor(id) {
      return this.http.get('https://radiant-wave-93298.herokuapp.com/contractor/'+`${id}`)
    }
    getClaimsByAdjustor(id) {
      return this.http.get(`https://radiant-wave-93298.herokuapp.com/adjustor/${id}`)
    }

    parsedJWT(token) {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace('-', '+').replace('_', '/');
      return JSON.parse(window.atob(base64));
    };

}
