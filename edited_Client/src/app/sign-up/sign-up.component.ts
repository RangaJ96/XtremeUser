import { Component, OnInit } from '@angular/core';
import { SignUpInstituteService } from '../service/sign-up-institute.service';
import { Router } from '@angular/router';
import { SendInstituteRequestService } from '../service/send-institute-request.service';
import { Institute } from '../service/signin-data.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  instituteUserName:string;
  instituteEmail:string;
  institutePassword:string;
  institute;
  mailDetails;
  
  constructor(private signUpInstituteService:SignUpInstituteService,private router:Router,private sendInstituteRequestService:SendInstituteRequestService) {
  }

  ngOnInit() {
  }

  onSubmitClick(){
    // public instituteUserName:string,public acceptance:boolean,public instituteName:string,public instituteEmail:string,public address:string,public province:string,public city:string,public instituteTelephone:number,public password:string
    this.institute=new Institute(this.instituteUserName,null,this.instituteEmail,null,null,null,null,this.institutePassword,false);
    
    this.signUpInstituteService.signUpInstitute(this.institute).subscribe(
      Response=>{
        console.log(Response);
        console.log(Response+" database ok");
        this.router.navigate(['request']);
        // this.sendInstituteRequestService.recieveWaitingRequests().subscribe(
        //   Response=>{
        //     console.log(Response);
        //     Waiting.listWaiting=Response;
        //     console.log(Waiting.listWaiting);
        //   },error=>{
        //     console.log(error);
        //   }
        // );
      },
      error=>{
        console.log(error);
      }
    );
    console.log("submit "+this.instituteEmail+" "+this.institutePassword);
  }

  // onSubmitClick(){
  //   this.mailDetails=new MailDetails(this.instituteEmail,this.instituteEmail,"gayani@gmail.com","signing up");
  //   console.log(this.mailDetails);
  //   this.signUpInstituteService.sendMailToInstitute(this.mailDetails).subscribe(
  //     Response=>{
  //       console.log(Response+" email sending");
  //     },error=>{
  //       console.log(error+" email sending failed");
  //     }
  //   );
  // }

}
