import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Institute } from './signin-data.service';

@Injectable({
  providedIn: 'root'
})
export class InstituteDataService {

  constructor(private http:HttpClient) { }

  updateInstitute(institute,username){
    return this.http.put(`http://localhost:8080/institutes/${username}`,institute);
  }

  updateAcceptanceStatus(username){
    return this.http.get(`http://localhost:8080/accept/${username}`);
  }

  getTheInstituteRelavantForLevel0(level0){
    return this.http.get<Institute>(`http://localhost:8080/institute/instance/level0`,level0);
  }
  getTheInstituteRelavantForLevel1(level1){
    return this.http.post<Institute>(`http://localhost:8080/institute/instance/level1`,level1);
  }
}
