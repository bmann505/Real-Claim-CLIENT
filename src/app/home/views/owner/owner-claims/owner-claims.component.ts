import { Component, OnInit, OnChanges } from '@angular/core';
import { UserService } from 'app/user.service';
import { Response } from '@angular/http';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-owner-claims',
  templateUrl: './owner-claims.component.html',
  styleUrls: ['./owner-claims.component.css']
})
export class OwnerClaimsComponent implements OnInit, OnChanges {
  ownerClaims = [];
  singleOwnerClaim
  closeResult: string;
  done = false;

  constructor(private userService: UserService, private modalService: NgbModal) { }

  ngOnInit() {
    this.onGetOwnerClaims()
  }

  ngOnChanges() {
    this.onGetOwnerClaims()
  }

onDone() {
  this.done = true;
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
    }
  )
}

onGetSupplements() {
  let id = 1;
  this.userService.getSupplements(id)
  .subscribe(
    (response: Response) => {
      let data = response.json()
      console.log(data);
    }
  )
}

open(ownerClaim, editcontent) {
  this.singleOwnerClaim = ownerClaim
  this.modalService.open(editcontent).result.then((result) => {
    this.closeResult = `Closed with: ${result}`;
  }, (reason) => {
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  });
}

openRecords(recordcontent) {
  this.modalService.open(recordcontent).result.then((result) => {
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
}
