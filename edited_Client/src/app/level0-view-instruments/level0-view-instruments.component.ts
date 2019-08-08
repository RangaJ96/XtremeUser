import { Component, OnInit } from '@angular/core';
import { Level1InstrumentDataService } from '../service/level1-instrument-data.service';
import { SigninDataService } from '../service/signin-data.service';
import { Level0DataService } from '../service/level0-data.service';
import { InstituteDataService } from '../service/institute-data.service';

@Component({
  selector: 'app-level0-view-instruments',
  templateUrl: './level0-view-instruments.component.html',
  styleUrls: ['./level0-view-instruments.component.css']
})
export class Level0ViewInstrumentsComponent implements OnInit {

  instruments;
  instituteInstance;

  level0;

  constructor(private instituteInstrumentDataService:Level1InstrumentDataService,private signInDataService:SigninDataService,private level0DataService:Level0DataService,private instituteDataService:InstituteDataService){

    let level1UserName=this.signInDataService.getUser();
    this.level0DataService.retrieveLevel0Object().subscribe(
      Response=>{
        console.log(Response);
        this.level0=Response;
        console.log(this.level0);
        this.getRelevantInstituteUsingLevel0();
      },
      error=>{
        console.log(error);
        console.log(this.level0);
      }
    );

    this.instituteInstrumentDataService.retrieveAllInstrumentsByLevel2().subscribe(
      data=>{
        console.log(Response);
        this.instruments=data;
        // this.refreshInstruments();
      },error=>{
        console.log(error);
      }
    );
    
  }

  getRelevantInstituteUsingLevel0(){
    this.instituteDataService.getTheInstituteRelavantForLevel0(this.level0).subscribe(
      Response=>{
        console.log(Response);
        this.instituteInstance=Response;
        console.log(this.instituteInstance);
      },error=>{
        console.log(error);
      }
      
    );
  }

  ngOnInit() {
  }
  
  onSubmitData(){}


}
