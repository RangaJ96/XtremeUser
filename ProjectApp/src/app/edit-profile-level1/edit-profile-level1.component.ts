import { Component, OnInit } from '@angular/core';
import { Level1DataService, Level1 } from '../service/level1-data.service';
import { SigninDataService } from '../service/signin-data.service';

@Component({
  selector: 'app-edit-profile-level1',
  templateUrl: './edit-profile-level1.component.html',
  styleUrls: ['./edit-profile-level1.component.css']
})
export class EditProfileLevel1Component implements OnInit {

  emailLevel1:string;
  firstNameLevel1:string;
  lastNameLevel1:string;
  nicLevel1:string;
  telephoneLevel1:string;
  addressLevel1:string;
  

  level1;
  level2;

  memberSuccess:boolean=false;
  memberFail:boolean=false;

  constructor(private level1DataService:Level1DataService,private signInDataService:SigninDataService) { }

  ngOnInit() {
  }
  
  // onSubmitData(){
  //   // public l1UserName:string,public l1UserEmail:string,public l1FirstName:string,public l1LastName:string,public l1NIC:string,public l1Telephone:string,public l1Address:string,public l1Password:string,public institute:Institute,public level2:Level2
    
  //   this.level1=new Level1(this.signInDataService.getUser(),this.emailLevel1,this.firstNameLevel1,this.lastNameLevel1,this.nicLevel1,this.telephoneLevel1,this.addressLevel1,null,null,null);
    
  //   console.log(this.level1);
  //   this.level0DataService.saveChanges(this.level1).subscribe(
  //     Response=>{
  //       console.log(Response);
  //     },
  //     error=>{
  //       console.log(error);
  //     }
  //   );
  //   console.log(this.emailLevel1+" "+this.firstNameLevel1+" "+this.lastNameLevel1+" "+this.nicLevel1+" "+this.telephoneLevel1+" "+this.addressLevel1+" "+this.level2+" ");
  // }

  onSubmitData(){
    // public l0UserName:string,public l0UserEmail:string,public l0FirstName:string,public l0LastName:string,public l0NIC:string,public l0Telephone:string,public l0Address:string,public l0Password:string,public l1UserEmail:Level1
    console.log("level1 edit");
    // this.level1=new Level1(null,null);
    // l0UserName                                             ,l0UserEmail     ,l0FirstName         ,l0LastName         ,l0NIC         ,l0Telephone         ,l0Address         ,l0Password, l2useremail
    this.level1=new Level1(this.signInDataService.getUser(),this.emailLevel1,this.firstNameLevel1,this.lastNameLevel1,this.nicLevel1,this.telephoneLevel1,this.addressLevel1,null,null);
    console.log(this.level1);
    this.level1DataService.updateDetails(this.level1).subscribe(
      Response=>{
        console.log(Response);
        this.memberSuccess=true;
      },error=>{
        console.log(error);
        this.memberFail=true;
      }
    );
    // console.log(this.level0);
    
  }

}
