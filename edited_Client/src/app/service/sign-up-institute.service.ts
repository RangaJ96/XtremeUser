import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
export class InstituteSignUp{
  constructor(public instituteUserName:string,public instituteEmail:string,public password:string){

  }
}
export class MailDetails{
  constructor(public name:string,public to:string,public from:string,public subject:string){

  }
}
@Injectable({
  providedIn: 'root'
})
export class SignUpInstituteService {

  constructor(private http:HttpClient) { }

  signUpInstitute(instituteInstance){
    return this.http.post(`http://localhost:8080/institute`,instituteInstance);
    // return this.http.post<InstituteSignUp>(`http://localhost:8080/waiting`,instituteInstance);
  }

  sendMailToInstitute(mailDetails){
    return this.http.post(`http://localhost:8080/email`,mailDetails);
  }
}
