import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/user.service'
import { Response } from '@angular/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-claim-form',
  templateUrl: './new-claim-form.component.html',
  styleUrls: ['./new-claim-form.component.css']
})
export class NewClaimFormComponent implements OnInit {
  contractors = [];
  adjustors = [];
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getContractorsAndAdjustors()
  }
    getContractorsAndAdjustors() {
      this.userService.getUsers()
      .subscribe(
        (response: Response) => {
          let data = response.json()
          data.forEach(user => {
            if(user.role === 'contractor') {
              this.contractors.push(user)
            } else if (user.role === 'adjustor') {
              this.adjustors.push(user)
            }
          })
        }
      )
    }

    onSubmitClaim(form: NgForm) {
      const token = localStorage.getItem('token')
      const parsedToken = this.parsedJWT(token);
      const estimate = form.value.newClaimEstimate;
      const status = form.value.newClaimStatus;
      const value = form.value.newClaimValue;
      const address = form.value.newClaimAddress;
      const user_id = parsedToken;
      const adjustor_id = parseInt(form.value.newClaimAdjustor);
      const contractor_id = parseInt(form.value.newClaimContractor);
      const body = {
        estimate: estimate,
        status: status,
        value: value,
        address: address,
        user_id: user_id,
        adjustor_id: adjustor_id,
        contractor_id: contractor_id
      }
      this.userService.postClaim(body)
      .subscribe(
        (response: Response) => {
          let data = response.json();
        }
      )
    }

  parsedJWT(token) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(window.atob(base64));
  };
}
