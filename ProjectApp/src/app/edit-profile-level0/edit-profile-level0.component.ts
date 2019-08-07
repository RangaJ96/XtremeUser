import { Component, OnInit } from '@angular/core';
import { Level0DataService, Level0 } from '../service/level0-data.service';
import { SigninDataService } from '../service/signin-data.service';

@Component({
  selector: 'app-edit-profile-level0',
  templateUrl: './edit-profile-level0.component.html',
  styleUrls: ['./edit-profile-level0.component.css']
})
export class EditProfileLevel0Component implements OnInit {

  emailLevel0:string;
  firstNameLevel0:string;
  lastNameLevel0:string;
  nicLevel0:string;
  telephoneLevel0:string;
  addressLevel0:string;


  level0;
  level1;

  memberSuccess:boolean=false;
  memberFail:boolean=false;

  constructor(private level0DataService:Level0DataService,private signInDataService:SigninDataService) { }

  ngOnInit() {
  }
  
  onSubmitData(){
    // public l0UserName:string,public l0UserEmail:string,public l0FirstName:string,public l0LastName:string,public l0NIC:string,public l0Telephone:string,public l0Address:string,public l0Password:string,public l1UserEmail:Level1
    console.log("level0 edit");
    // this.level1=new Level1(null,null);
    this.level0=new Level0(this.signInDataService.getUser(),this.emailLevel0,this.firstNameLevel0,this.lastNameLevel0,this.nicLevel0,this.telephoneLevel0,this.addressLevel0,null,null);
    this.level0DataService.updateDetails(this.level0).subscribe(
      Response=>{
        this.memberSuccess=true;
        console.log(Response);
      },
      error=>{
        this.memberFail=true;
      }
    );
    console.log(this.level0);
    
  }


}
