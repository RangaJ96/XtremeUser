import { Component, OnInit } from '@angular/core';
import { Level2DataService, Level2 } from '../service/level2-data.service';
import { SigninDataService } from '../service/signin-data.service';

@Component({
  selector: 'app-edit-profile-level2',
  templateUrl: './edit-profile-level2.component.html',
  styleUrls: ['./edit-profile-level2.component.css']
})
export class EditProfileLevel2Component implements OnInit {

  emailLevel2:string;
  firstNameLevel2:string;
  lastNameLevel2:string;
  nicLevel2:string;
  telephoneLevel2:string;
  addressLevel2:string;
 

  level2;
  
  constructor(private level2DataService:Level2DataService,private singInDataService:SigninDataService) { }

  ngOnInit() {
  }

  onSubmitData(){
    this.level2=new Level2(this.singInDataService.getUser(),this.emailLevel2,this.firstNameLevel2,this.lastNameLevel2,this.nicLevel2,this.telephoneLevel2,this.addressLevel2,null);
    
    console.log(this.level2);
    this.level2DataService.updateDetails(this.level2).subscribe(
      Response=>{
        console.log(Response);
      },
      error=>{
        console.log(error);
      }
    );
    console.log(this.emailLevel2+" "+this.firstNameLevel2+" "+this.lastNameLevel2+" "+this.nicLevel2+" "+this.telephoneLevel2+" "+this.addressLevel2);
  }
}
