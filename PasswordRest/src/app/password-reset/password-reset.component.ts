import { Component, OnInit } from '@angular/core';
import { PasswordReset } from '../auth/password-reset';
import { PasswordResetServiceService } from '../auth/password-reset-service.service';
import { UserProperties } from '../auth/user-properties';
import { VerifyUser } from '../auth/verify-user';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.css']
})
export class PasswordResetComponent implements OnInit {
  form: any = {};
  isValiduser=false;
  errormessage='';
  reset:VerifyUser;
  user:UserProperties;
  constructor(private resetService:PasswordResetServiceService) { }

  ngOnInit() {
  }
  onSubmit(){
    console.log(this.form);

    this.reset= new VerifyUser(
      this.form.username,
    );
    this.resetService.userVerify(this.reset).subscribe(
      data=>{
        console.log(data);
        this.isValiduser = true;
        this.user=data;
      },
      error => {
        console.log(error);
        this.errormessage = error.error.message;
      }
    );
  }
}



/*8888888
form: any = {};
  signupInfo: SignUpInfo;
  isSignedUp = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService) { }

  ngOnInit() { }

  onSubmit() {
    console.log(this.form);

    this.signupInfo = new SignUpInfo(
      this.form.name,
      this.form.username,
      this.form.email,
      this.form.password);

    this.authService.signUp(this.signupInfo).subscribe(
      data => {
        console.log(data);
        this.isSignedUp = true;
        this.isSignUpFailed = false;
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
}
*/