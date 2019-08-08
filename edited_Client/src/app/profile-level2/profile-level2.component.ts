import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-level2',
  templateUrl: './profile-level2.component.html',
  styleUrls: ['./profile-level2.component.css']
})
export class ProfileLevel2Component implements OnInit {

  memberEditProfile:boolean=false;
  memberViewInstrument:boolean=false;
  memberEditLogin:boolean=false;

  constructor() { }

  ngOnInit() {
  }
  initial(){
    this.memberEditProfile=false;
    this.memberViewInstrument=false;
    this.memberEditLogin=false;
  }
  navigateEditProfile(){
    this.initial();
    this.memberEditProfile=true;
    console.log("editprofile");
  }

  navigateViewInstruments(){
    this.initial();
    this.memberViewInstrument=true;
    console.log("view instruments");
  }
  navigateEditLogin(){
    this.initial();
    this.memberEditLogin=true;
    console.log("edit login");
  }
}
