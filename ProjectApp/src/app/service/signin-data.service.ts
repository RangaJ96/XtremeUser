import { Injectable } from '@angular/core';
import { Level0 } from './level0-data.service';
import { Level1 } from './level1-data.service';
import { HttpClient } from '@angular/common/http';
import { Level2 } from './level2-data.service';
export class Institute{
  static institute;
  // @Id
	// @Column(name="institute_user_name")
	// private String instituteUserName;
	
	// @Column(name="institute_name")
	// private String instituteName;
	
	// @NotNull
	// @Column(name="institute_email",unique=true)
	// private String instituteEmail;
	
	
	// @Column(name="address")
	// private String address;
	
	
	// @Column(name="province")
	// private String province;
	
	// @Column(name="city")
	// private String city;
	
	// @Column(name="institute_telephone")
	// private int instituteTelephone;
	
	// @NotNull
	// @Column(name="password")
	// private String password;
	
	// @Column(name="acceptance")
	// private boolean acceptance;
  constructor(public instituteUserName:string,public instituteName:string,public instituteEmail:string,public address:string,public province:string,public city:string,public instituteTelephone:number,public password:string,public acceptance:boolean){

  }
}
export class Users{
  
  constructor(public username:string,public password:string,public flag:string){}
}
@Injectable({
  providedIn: 'root'
})
export class SigninDataService {

  constructor(private http:HttpClient) { }

  checkRegistered(username){
    return this.http.get<Users>(`http://localhost:8080/users/${username}`);
  }

  getUser(){
    return sessionStorage.getItem('username');
  }
}
