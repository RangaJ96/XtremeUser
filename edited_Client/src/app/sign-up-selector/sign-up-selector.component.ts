import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up-selector',
  templateUrl: './sign-up-selector.component.html',
  styleUrls: ['./sign-up-selector.component.css']
})
export class SignUpSelectorComponent implements OnInit {

  registerInstitute:boolean=false;
  selector:boolean=true;

  constructor(private router:Router) { }

  ngOnInit() {
  }

  initial(){
    this.registerInstitute=false;
    this.selector=false;
  }

  onClickRegisterInstitute(){
    this.initial();
    this.registerInstitute=true;
    console.log("click i");
    // this.router.navigate(['register','institute']);
  }
  onClickRegisterResearcher(){
    console.log("click on researcher");
    this.router.navigate(['profile']);
  }

}
