import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { UserService } from 'app/user.service';
import { Response } from '@angular/http';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, NgForm } from '@angular/forms';

// @ViewChild('template')
//   template: TemplateRef<any>


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
  imageURL = ''
  elementRef: ElementRef;

  constructor(private userService: UserService,
              private modalService: NgbModal,
              private elementref: ElementRef) {
              this.elementRef = elementref;
  }

  ngOnInit() {
    this.onGetContractorClaims();
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
// uploadImage(){
//     let templatedd = this.templateref.nativeElement.querySelector('ng-template')
//     console.log(templatedd)
// }
  uploadImage() {
    let files = this.elementref.nativeElement.querySelector('#tref').files;
    console.log(files);
    let formData = new FormData();
    let img = files[0];
    formData.append('image', img);
    console.log(formData);
    this.userService.uploadImage(formData)
    .subscribe(
      (res) => {
      this.imageURL = 'https://s3.us-east-2.amazonaws.com/supplementalclaim/' + res.json();
      console.log(this.imageURL);
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
          console.log(data)
        }
      )
      } ,
        (error) => console.log(error)
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
