import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/user.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-adjustor-claims',
  templateUrl: './adjustor-claims.component.html',
  styleUrls: ['./adjustor-claims.component.css']
})
export class AdjustorClaimsComponent implements OnInit {

  adjustorClaims = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.onGetAdjustorClaims()
  }

  onGetAdjustorClaims() {
    const token = localStorage.getItem('token')
    const parsedToken = this.userService.parsedJWT(token);
    const id = parsedToken;
    this.userService.getClaimsByAdjustor(id)
    .subscribe(
      (response: Response) => {
        let data =  response.json()
        data.forEach(claim => {
          this.adjustorClaims.push(claim);
        })
        console.log(this.adjustorClaims)
      }
    )
  }

}
