import { Component, OnInit, ElementRef } from '@angular/core';
import { UserService } from 'app/user.service';
import { Response } from '@angular/http';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, NgForm } from '@angular/forms';


@Component({
  selector: 'app-adjustor-claims',
  templateUrl: './adjustor-claims.component.html',
  styleUrls: ['./adjustor-claims.component.css']
})
export class AdjustorClaimsComponent implements OnInit {
  imageURL = '';
  adjustorClaims = [];
  singleAdjustorClaim
  closeResult: string;

  constructor(private userService: UserService, private elementref: ElementRef, private modalService: NgbModal) { }

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
        this.adjustorClaims = data.reverse()
      }
    )
  }

  uploadImage(tref) {
    let files = tref.files;
    let formData = new FormData();
    let img = files[0];
    formData.append('image', img);
    this.userService.uploadImage(formData)
    .subscribe(
      (res) => {
      this.imageURL = 'https://s3.us-east-2.amazonaws.com/supplementalclaim/' + res.json();
      let body = {
        url: this.imageURL,
        name: 'some name',
        type: 'picture',
        claim_id: 1
      };
      this.userService.insertSupplement(body)
      .subscribe(
        (response: Response) => {
          let data = response.json();
        }
      )
      } ,
        (error) => console.log(error)
      )

  }

  onUpdateClaim(form: NgForm) {
    const user = form.value.singleclaimuser;
    const description = form.value.singleclaimdescription;
    const address = form.value.singleclaimaddress;
    const status = form.value.singleclaimstatus;
    const estimate = form.value.singleclaimestimate;
    const value = form.value.singleclaimvalue;
    const id = form.value.updateid;
    const body = {
      user: user,
      description: description,
      address: address,
      status: status,
      estimate: estimate,
      value: value
    }
    console.log(body)
    this.userService.updateClaim(id, body)
    .subscribe(
      (response: Response) => {
        let data = response.json()
        console.log(data)
      }
    )
  }

  open(adjustorClaim, content) {
    this.singleAdjustorClaim = adjustorClaim
    this.modalService.open(content).result.then((result) => {
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
