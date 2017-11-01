import { EventEmitter, Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class UserService {
  constructor(private http: Http) {}

  // 'https://radiant-wave-93298.herokuapp.com/user'
  // http://localhost:8080/adjustor/
    getUsers() {
      return this.http.get('https://radiant-wave-93298.herokuapp.com/user');
    }

    postClaim(body: any) {
      return this.http.post('https://radiant-wave-93298.herokuapp.com/claim', body);
    }

    getClaimsByOwner(id) {
      return this.http.get(`https://radiant-wave-93298.herokuapp.com/owner/${id}`);
    }

    getClaimsByContractor(id) {
      return this.http.get(`https://radiant-wave-93298.herokuapp.com/contractor/${id}`);
    }
    getClaimsByAdjustor(id) {
      return this.http.get(`https://radiant-wave-93298.herokuapp.com/adjustor/${id}`);
    }

    uploadImage(formData) {
      return this.http.post(`https://radiant-wave-93298.herokuapp.com/image/`, formData);
    }

    insertSupplement(body) {
      return this.http.post(`https://radiant-wave-93298.herokuapp.com/supplement`, body);
    }

    updateClaim(id, body) {
      return this.http.put(`https://radiant-wave-93298.herokuapp.com/claim/${id}`, body);
    }

    getSupplements(id) {
      return this.http.get(`https://radiant-wave-93298.herokuapp.com/supplement/${id}`);
    }

    sendConfirmation() {
      return this.http.get(`https://radiant-wave-93298.herokuapp.com/confirmation`);
    }

    parsedJWT(token) {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace('-', '+').replace('_', '/');
      return JSON.parse(window.atob(base64));
    };

    updateClaimTable = new EventEmitter<object>();
    updateNewClaimTable = new EventEmitter<object>();

}
