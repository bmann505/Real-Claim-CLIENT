import { Component, OnInit, OnChanges } from '@angular/core';
import { UserService } from 'app/user.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-owner-claims',
  templateUrl: './owner-claims.component.html',
  styleUrls: ['./owner-claims.component.css']
})
export class OwnerClaimsComponent implements OnInit, OnChanges {
  ownerClaims = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.onGetOwnerClaims()
  }

  ngOnChanges() {
    this.onGetOwnerClaims()
  }

onGetOwnerClaims() {
  const token = localStorage.getItem('token')
  const parsedToken = this.userService.parsedJWT(token);
  const id = parsedToken;
  this.userService.getClaimsByOwner(id)
  .subscribe(
    (response: Response) => {
      let data =  response.json()
      data.forEach(claim => {
        this.ownerClaims.push(claim);
      })
      console.log(this.ownerClaims)
    }
  )
}

}
