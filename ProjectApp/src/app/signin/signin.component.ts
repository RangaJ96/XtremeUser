import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SigninDataService, Institute } from '../service/signin-data.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  UserName:string;
  Password:string;
  message:string="djkfjskf";
  memeberMessage=false;

  constructor(private signinDataService:SigninDataService,private router:Router) { }

  ngOnInit() {
  }

  onSubmitClick(){
    console.log("sign in "+this.UserName+" "+this.Password);
    this.signinDataService.checkRegistered(this.UserName).subscribe(
      Response=>{
        console.log(Response);
        if(Response != null){
          console.log(Response);
          if(this.UserName===Response.username && this.Password===Response.password){
            console.log("registered user");
            sessionStorage.setItem('username',this.UserName);
            Institute.institute=Response;
            if(Response.flag==="institute"){
              this.router.navigate(['institute']);
            }else if(Response.flag==="level0"){
              this.router.navigate(['level0']);
            }else if(Response.flag==="level1"){
              this.router.navigate(['level1']);
            }else if(Response.flag==="level2"){
              this.router.navigate(['level2']);
            }else if(Response.flag==="admin"){
              this.router.navigate(['adminp']);
            }
        }
        if(Response === null){
            this.memeberMessage=true;
            this.message="username or password incorrect.please enter again.";
          }
        }
      },
      error=>{
        this.message=error.error;
        console.log(error);
      }
    );
  }

}
