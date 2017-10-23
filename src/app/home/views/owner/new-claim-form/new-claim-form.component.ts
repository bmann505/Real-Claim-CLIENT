import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/user.service'
import { Response } from '@angular/http'

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
}
