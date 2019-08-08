import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SigninDataService } from './signin-data.service';

export class Level2{
  
  constructor(public l2UserName:string,public l2UserEmail:string,public l2FirstName:string,public l2LastName:string,public l2NIC:string,public l2Telephone:string,public l2Address:string,public l2Password:string){
// l0UserEmail,l0FirstName,l0LastName,l0NIC,l0Telephone,l0Address,l0Password,instituteEmail

  }
}
@Injectable({
  providedIn: 'root'
})
export class Level2DataService {

  constructor(private http:HttpClient,private signInDataService:SigninDataService) { }

  saveChanges(level2){
    let username=this.signInDataService.getUser();
    return this.http.put<Level2>(`http://localhost:8080/level2/${username}`,level2);
  }

  updateDetails(level2){
    let username=this.signInDataService.getUser();
    // return this.http.put(`http://localhost:8080/level0`,level0);
    return this.http.put(`http://localhost:8080/level2/update`,level2);
  }

  updateLogin(level2){
    let username=this.signInDataService.getUser();
    // return this.http.put(`http://localhost:8080/level0`,level0);
    return this.http.put<Level2>(`http://localhost:8080/level2/${username}`,level2);
  }
}
