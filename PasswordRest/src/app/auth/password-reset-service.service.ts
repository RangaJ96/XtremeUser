import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserProperties } from './user-properties';
import { PasswordReset } from './password-reset';
import { VerifyUser } from './verify-user';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class PasswordResetServiceService {
  username:string;
  password:string;
  private reseturl = 'http://localhost:8080/api/test/reset';
  constructor(private http: HttpClient) { }

  userVerify(rest:VerifyUser): Observable<UserProperties> {
    this.username=rest.username;
    return this.http.get<UserProperties>('http://localhost:8080/user2/'+this.username,httpOptions);
  }

  resetMypassword(reset:PasswordReset): Observable<string>{
    this.password=reset.password;
    return this.http.get('http://localhost:8080/api/test/'+this.password,{responseType: 'text'});
  }
  
}


