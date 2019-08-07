import { Component, OnInit } from '@angular/core';
import { Level0DataService, Level0 } from '../service/level0-data.service';

@Component({
  selector: 'app-level0-edit-login',
  templateUrl: './level0-edit-login.component.html',
  styleUrls: ['./level0-edit-login.component.css']
})
export class Level0EditLoginComponent implements OnInit {

  userNameLevel0:string;
  passwordLevel0:string;
  level0;

  constructor(private level0DataService:Level0DataService) { }

  ngOnInit() {
  }

  onClickSubmit(username){
    this.level0=new Level0(this.userNameLevel0,null,null,null,null,null,null,this.passwordLevel0,null);
    console.log(this.userNameLevel0+" "+this.passwordLevel0);
    this.level0DataService.updateLogin(this.level0).subscribe(
      Response=>{
        console.log(Response);
        sessionStorage.removeItem('username');
        sessionStorage.setItem('username',Response.l0UserName);
      },error=>{
        console.log(error);
      }
    );
  
  }

}
