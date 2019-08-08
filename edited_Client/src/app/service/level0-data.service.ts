import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Level1 } from './level1-data.service';
import { SigninDataService } from './signin-data.service';
export class Level0{
  constructor(public l0UserName:string,public l0UserEmail:string,public l0FirstName:string,public l0LastName:string,public l0NIC:string,public l0Telephone:string,public l0Address:string,public l0Password:string,public l1UserEmail:Level1){
// l0UserEmail,l0FirstName,l0LastName,l0NIC,l0Telephone,l0Address,l0Password,instituteEmail
// emailLevel0:string;
//   firstNameLevel0:string;
//   lastNameLevel0:string;
//   nicLevel0:string;
//   telephoneLevel0:string;
//   addressLevel0:string;

//   null,this.emailLevel0,this.firstNameLevel0,this.lastNameLevel0,this.nicLevel0,this.telephoneLevel0,this.addressLevel0,null,null);
  }
}
@Injectable({
  providedIn: 'root'
})
export class Level0DataService {

  
  constructor(private http:HttpClient,private signinDataService:SigninDataService) { }

  // saveChanges(level0,email){
  //   return this.http.post<Level0>(`http://localhost:8080/${email}`,level0);
  // }

    retrieveLevel0Object(){
      let username=this.signinDataService.getUser();
      return this.http.get<Level0>(`http://localhost:8080/level0/${username}`);
    }

    saveChanges(level0){
      return this.http.post<Level0>(`http://localhost:8080/java`,level0);
    }

    updateDetails(level0){
      let username=this.signinDataService.getUser();
      // return this.http.put(`http://localhost:8080/level0`,level0);
      return this.http.put(`http://localhost:8080/level0/update`,level0);
    }

    updateLogin(level0){
      let username=this.signinDataService.getUser();
      // return this.http.put(`http://localhost:8080/level0`,level0);
      return this.http.put<Level0>(`http://localhost:8080/level0/${username}`,level0);
    }

    addLevel1(level1){
      let username=this.signinDataService.getUser();
      return this.http.put(`http://localhost:8080/level0/${username}/level1`,level1);
    }
}
