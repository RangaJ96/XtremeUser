import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-level1',
  templateUrl: './profile-level1.component.html',
  styleUrls: ['./profile-level1.component.css']
})
export class ProfileLevel1Component implements OnInit {

  memberEditProfile:boolean;
  memberAddLevel2:boolean;
  memberNewInstrument:boolean;
  memberManageInstruments:boolean;
  memberEditLogin:boolean;
  memberSettings:boolean;

  institueInstance;
  constructor(private router:Router) { }

  ngOnInit() {
  }
  initial(){
    this.memberEditProfile=false;
    this.memberAddLevel2=false;
    this.memberNewInstrument=false;
    this.memberManageInstruments=false;
    this.memberEditLogin=false;
    this.memberSettings=false;
    
  }

  navigateEditProfile(){
    this.initial();
    this.memberEditProfile=true;
    console.log("navigate edit profile");
  }
  navigateAddLevel2(){
    this.initial();
    this.memberAddLevel2=true;
  }

  navigateNewInstrument(){
    this.initial();
    this.memberNewInstrument=true;
    console.log("navigate new instrument");
  }

  navigateManageInstruments(){
    this.initial();
    this.memberManageInstruments=true;
    console.log("manage Instruments");
  }
  navigateEditUsername(){
    this.initial();
    this.memberEditLogin=true;
  }
  navigateSettings(){
    this.initial();
    this.memberSettings=true;
    console.log("navigate settings");
  }

}
