import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/user.service';
import { Response } from '@angular/http';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, NgForm } from '@angular/forms';


@Component({
  selector: 'app-contractor-claims',
  templateUrl: './contractor-claims.component.html',
  styleUrls: ['./contractor-claims.component.css']
})
export class ContractorClaimsComponent implements OnInit {
  contractorClaims = [];
  contratorName = '';
  closeResult: string;
  singleContractorClaim
  constructor(private userService: UserService, private modalService: NgbModal) { }

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
        this.contratorName = this.contractorClaims[0].contractor;
      }
    )
  }

  onUpdateClaim() {

  }

  open(contractorClaim, content) {
    this.singleContractorClaim = contractorClaim
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  sayHi() {
    console.log("hi");
  }

}
