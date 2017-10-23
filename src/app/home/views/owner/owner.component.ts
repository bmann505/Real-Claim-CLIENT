import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.css']
})
export class OwnerComponent implements OnInit {
  newClaimForm = true;

  constructor() { }

  ngOnInit() {
  }

  onNewForm() {
    this.newClaimForm = false;
  }

}
