import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-level0',
  templateUrl: './profile-level0.component.html',
  styleUrls: ['./profile-level0.component.css']
})
export class ProfileLevel0Component implements OnInit {

  memberEditProfile:boolean=false;
  memberAddLevel1:boolean=false;
  memberViewHirings:boolean=false;
  memberEditLogin:boolean=false;
  memberSettings=false;


  constructor() { }

  ngOnInit() {
  }

  initial(){
    this.memberEditProfile=false;
    this.memberAddLevel1=false;
    this.memberViewHirings=false;
    this.memberSettings=false;
    this.memberEditLogin=false;
  }
  navigateEditProfile(){
    this.initial();
    this.memberEditProfile=true;
  }

  navigateAddLevel1(){
    this.initial();
    this.memberAddLevel1=true;
  }

  navigateViewHirings(){
    this.initial();
    this.memberViewHirings=true;
  }

  navigateSettings(){
    this.initial();
    this.memberSettings=true;
  }

  navigateEditUsername(){
    this.initial();
    this.memberEditLogin=true;
  }

}
