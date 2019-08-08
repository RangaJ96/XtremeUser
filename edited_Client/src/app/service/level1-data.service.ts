import { Injectable } from '@angular/core';
import { Level2 } from './level2-data.service';
import { HttpClient } from '@angular/common/http';
import { SigninDataService, Institute } from './signin-data.service';
export class Level1{
  // this.signInDataService.getUser(),null                      ,null                     ,null                    ,null               ,null                     ,null                   ,null                    ,null                      ,null                 );
  constructor(public l1UserName:string,public l1UserEmail:string,public l1FirstName:string,public l1LastName:string,public l1NIC:string,public l1Telephone:string,public l1Address:string,public l1Password:string,public level2:Level2){
// l0UserEmail,l0FirstName,l0LastName,l0NIC,l0Telephone,l0Address,l0Password,instituteEmail
// String l1UserName, String l1UserEmail, String l1FirstName, String l1LastName, String l1nic,
// 			String l1Telephone, String l1Address, String l1Password, Institute institute, Level0 level0,
// 			Level2 level2

  }
}
@Injectable({
  providedIn: 'root'
})
export class Level1DataService {

  constructor(private http:HttpClient,private signInDataService:SigninDataService) { }

  saveChanges(level1){
    return this.http.post<string>(`http://localhost:8080/level1`,level1);
  }

  // retrieveRelevantLevel1Object(){
  //   let username=this.signInDataService.getUser();
  //   return this.http.get<Level1>(`http://localhost:8080/level1`);
  // }
  retrieveLevel1Object(){
    let username=this.signInDataService.getUser();
    return this.http.get<Level1>(`http://localhost:8080/level1/${username}`);
  }

  retrieveLevel1(level1UserName){
    return this.http.get<Level1>(`http://localhost:8080/level1/${level1UserName}`);
  }
  updateDetails(level1){
    let username=this.signInDataService.getUser();
    // return this.http.put(`http://localhost:8080/level0`,level0);
    return this.http.put(`http://localhost:8080/level1/update`,level1);
  }

  updateLogin(level1){
    let username=this.signInDataService.getUser();
    // return this.http.put(`http://localhost:8080/level0`,level0);
    return this.http.put<Level1>(`http://localhost:8080/level1/${username}`,level1);
  }
  addLevel2(level2){
    let username=this.signInDataService.getUser();
    return this.http.post(`http://localhost:8080/level1/${username}/level2`,level2);
  }
}
