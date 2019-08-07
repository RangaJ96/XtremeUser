import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-institute-edit-login',
  templateUrl: './institute-edit-login.component.html',
  styleUrls: ['./institute-edit-login.component.css']
})
export class InstituteEditLoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onClickSubmit(username){
    // this.level1=new Level1(this.userNameLevel1,null,null,null,null,null,null,this.passwordLevel1,null);
    // console.log(this.userNameLevel1+" "+this.passwordLevel1);
    // this.level1DataService.updateLogin(this.level1).subscribe(
    //   Response=>{
    //     console.log(Response);
    //     sessionStorage.removeItem('username');
    //     sessionStorage.setItem('username',Response.l1UserName);
    //   },error=>{
    //     console.log(error);
    //   }
    // );
  
  }
}
