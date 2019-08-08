import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserProperties } from './user-properties';
import { TokenStorageService } from './token-storage.service';


@Injectable({
  providedIn: 'root'
})
export class UserProServiceService {
  
  private username:string;
  private usersUrl:string;
  
 
  constructor(private http: HttpClient,private storage:TokenStorageService) { 
    //this.username=this.token.getUsername();
    
    this.username=(<string>this.storage.getUsername());
    this.usersUrl = 'http://localhost:8080/user2/'+this.username;
}
public findAll(): Observable<UserProperties> {
 // return this.http.get<UserProperties>('http://localhost:8080/user2/'+this.username);
 return this.http.get<UserProperties>(this.usersUrl);
}

}