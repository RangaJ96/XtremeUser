import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent implements OnInit {

  signIn:boolean=true;
  signUp:boolean=false;
  constructor() { }

  ngOnInit() {
  }
  initial(){
    this.signIn=false;
    this.signUp=false;
  }
  onClickSignIn(){
    this.initial();
    this.signIn=true;
  }

  onClickSignUp(){
    this.initial();
    this.signUp=true;
  }
  getColor(){
    return "red";
  }

}
