import { Component, OnInit } from '@angular/core';
import { SigninDataService, Institute } from '../service/signin-data.service';
import { InstituteDataService } from '../service/institute-data.service';

@Component({
  selector: 'app-edit-profile-institute',
  templateUrl: './edit-profile-institute.component.html',
  styleUrls: ['./edit-profile-institute.component.css']
})
export class EditProfileInstituteComponent implements OnInit {

  instituteUserName:string;
  instituteName:string;
  instituteEmail:string;
  instituteAddress:string;
  instituteProvince:string;
  instituteCity:string;
  instituteTelephone;
  institutePassword:string;

  institute;
  constructor(private signInDataService:SigninDataService,private instituteDataService:InstituteDataService) { }

  ngOnInit() {
  }

  onClickSubmit(){
    console.log(this.instituteEmail+" "+this.instituteName+" "+this.instituteAddress+" "
    +this.instituteProvince+" "+this.instituteCity+" "+this.instituteTelephone+" "+this.institutePassword);
    
    this.institute=new Institute(this.instituteUserName,this.instituteName,this.instituteEmail,this.instituteAddress,this.instituteProvince,this.instituteCity,this.instituteTelephone,this.institutePassword,null);
    let username=this.signInDataService.getUser();
    this.instituteDataService.updateInstitute(this.institute,username).subscribe(
      Response=>{
        console.log(Response);
      },error=>{
        console.log(error);
      }
    );
  }


}
