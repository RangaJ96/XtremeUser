import { Component, OnInit } from '@angular/core';
import { Level2DataService, Level2 } from '../service/level2-data.service';

@Component({
  selector: 'app-level2-edit-login',
  templateUrl: './level2-edit-login.component.html',
  styleUrls: ['./level2-edit-login.component.css']
})
export class Level2EditLoginComponent implements OnInit {

  userNameLevel2:string;
  passwordLevel2:string;
  level2;

  constructor(private level2DataService:Level2DataService) { }

  ngOnInit() {
  }

  onClickSubmit(username){
    this.level2=new Level2(this.userNameLevel2,null,null,null,null,null,null,this.passwordLevel2);
    console.log(this.userNameLevel2+" "+this.passwordLevel2);
    this.level2DataService.updateLogin(this.level2).subscribe(
      Response=>{
        console.log(Response);
        sessionStorage.removeItem('username');
        sessionStorage.setItem('username',Response.l2UserName);
      },error=>{
        console.log(error);
      }
    );
  
  }
}
