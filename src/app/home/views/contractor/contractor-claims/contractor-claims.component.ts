import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/user.service';
import { Response } from '@angular/http';
@Component({
  selector: 'app-contractor-claims',
  templateUrl: './contractor-claims.component.html',
  styleUrls: ['./contractor-claims.component.css']
})
export class ContractorClaimsComponent implements OnInit {
  contractorClaims = [];
  contratorName = '';
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.onGetContractorClaims()
  }
  onGetContractorClaims() {
    const token = localStorage.getItem('token')
    const parsedToken = this.userService.parsedJWT(token);
    const id = parsedToken;
    this.userService.getClaimsByContractor(id)
    .subscribe(
      (response: Response) => {
        let data =  response.json()
        data.forEach(claim => {
          this.contractorClaims.push(claim);
        })
        console.log(this.contractorClaims)
        this.contratorName = this.contractorClaims[0].contractor;
        console.log(this.contratorName)
      }
    )
  }

}
