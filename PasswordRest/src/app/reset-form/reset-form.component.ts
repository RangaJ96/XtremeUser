import { Component, OnInit } from '@angular/core';
import { PasswordReset } from '../auth/password-reset';
import { PasswordResetServiceService } from '../auth/password-reset-service.service';
import { VerifyUser } from '../auth/verify-user';

@Component({
  selector: 'app-reset-form',
  templateUrl: './reset-form.component.html',
  styleUrls: ['./reset-form.component.css']
})
export class ResetFormComponent implements OnInit {

  form: any = {};
  isReset=false;
  verifyUser:VerifyUser;
  reset:PasswordReset;
  //name=this.verifyUser.username;
  //user:UserProperties;
  constructor(private resetService:PasswordResetServiceService) { }

  ngOnInit() {
  }
  onSubmit(){
    console.log(this.form);

    this.reset= new PasswordReset(
      //this.form.username,
      this.form.password,
    );
    this.resetService.resetMypassword(this.reset).subscribe(
      data=>{
        console.log(data);
        this.isReset=true;
      },
      error => {
        console.log(error);
        this.isReset=false;
      }
    );
  }
  
}
