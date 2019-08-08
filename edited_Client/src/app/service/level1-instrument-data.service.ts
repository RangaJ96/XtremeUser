import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Institute, SigninDataService } from './signin-data.service';
import { Level2 } from './level2-data.service';
import { Level1 } from './level1-data.service';

export class Instrument{
  
  constructor(public instrumentName:string,public modelNo:string,public manufacturingDate:Date,public level2:Level2,public institute:Institute,public level1:Level1){

  }
}
@Injectable({
  providedIn: 'root'
})
export class Level1InstrumentDataService {

  constructor(private http:HttpClient,private signinDataService:SigninDataService) { }

  AddAnInstruments(instrument){
    return this.http.post('http://localhost:8080/instruments',instrument);
  }

  // retrieveAllInstruments(instituteInstance){
  //   return this.http.post<Instrument[]>('http://localhost:8080/all-instruments',instituteInstance);
  // }

  retrieveAllInstruments(){
    return this.http.get<Instrument[]>('http://localhost:8080/all-instruments');
  }

  // retrieveAllInstrumentsByInstitute(){
  //   return this.http.get<Instrument[]>(`http://localhost:8080/all-instruments/institute/${instituteUsername}`);
  // }
  retrieveAllInstrumentsByLevel2(){
    let username=this.signinDataService.getUser();
    return this.http.get<Instrument>(`http://localhost:8080/all-instruments/level2/${username}`);
  }

  retrieveAllInstrumentsByInstitute(){
    let username=this.signinDataService.getUser();
    return this.http.get<Instrument>(`http://localhost:8080/all-instruments/institute/${username}`);
  }

  deleteAnInstrument(id){
    return this.http.delete(`http://localhost:8080/instruments/${id}`); 
  }
}
