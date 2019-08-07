import { Component, OnInit } from '@angular/core';
import { Level1DataService, Level1 } from '../service/level1-data.service';

@Component({
  selector: 'app-level1-edit-login',
  templateUrl: './level1-edit-login.component.html',
  styleUrls: ['./level1-edit-login.component.css']
})
export class Level1EditLoginComponent implements OnInit {

  userNameLevel1:string;
  passwordLevel1:string;
  level1;
  constructor(private level1DataService:Level1DataService) { }

  ngOnInit() {
  }

  onClickSubmit(username){
    this.level1=new Level1(this.userNameLevel1,null,null,null,null,null,null,this.passwordLevel1,null);
    console.log(this.userNameLevel1+" "+this.passwordLevel1);
    this.level1DataService.updateLogin(this.level1).subscribe(
      Response=>{
        console.log(Response);
        sessionStorage.removeItem('username');
        sessionStorage.setItem('username',Response.l1UserName);
      },error=>{
        console.log(error);
      }
    );
  
  }
}
