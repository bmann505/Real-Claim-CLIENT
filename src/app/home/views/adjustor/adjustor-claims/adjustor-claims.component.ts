import { Component, OnInit, ElementRef } from '@angular/core';
import { UserService } from 'app/user.service';
import { Response } from '@angular/http';



@Component({
  selector: 'app-adjustor-claims',
  templateUrl: './adjustor-claims.component.html',
  styleUrls: ['./adjustor-claims.component.css']
})
export class AdjustorClaimsComponent implements OnInit {
  imageURL = '';
  adjustorClaims = [];

  constructor(private userService: UserService, private elementref: ElementRef) { }

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
      }
    )
  }

  uploadImage() {
    let files = this.elementref.nativeElement.querySelector('#selectFile').files;
    console.log('files', files);
    let formData = new FormData();
    let img = files[0];
    console.log('img', img);
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

}
