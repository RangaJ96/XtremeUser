import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Institute } from './signin-data.service';

export class Waiting{
  static listWaiting;
  constructor(public email:string,public password:string,public acceptance:boolean){

  }
}
@Injectable({
  providedIn: 'root'
})
export class SendInstituteRequestService {

  email:string;
  url;

  constructor(private http:HttpClient) { }

  recieveRequest(email){
    this.email=email;
  }

  sendRequest(){
    
  }

  recieveWaitingRequests(){
    return this.http.get<Institute>('http://localhost:8080/waiting');
  }
}
