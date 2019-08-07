import { Component, OnInit } from '@angular/core';
import { Level1InstrumentDataService, Instrument } from '../service/level1-instrument-data.service';
import { InstituteDataService } from '../service/institute-data.service';
import { Level2 } from '../service/level2-data.service';
import { Level1DataService } from '../service/level1-data.service';
import { SigninDataService } from '../service/signin-data.service';

@Component({
  selector: 'app-level1-instrument-adding',
  templateUrl: './level1-instrument-adding.component.html',
  styleUrls: ['./level1-instrument-adding.component.css']
})
export class Level1InstrumentAddingComponent implements OnInit {

  instrumentName;
  modelNo;
  manufacturingDate;

  instrument;
  isLevelAvaillable:boolean=false;
  instituteInstance;
  level1;

  level2Email:string;
  level1Object;
  level2;

  memberSuccess:boolean=false;
  memberFail:boolean=false;

  //public instrumentName:string,public modelNo:string,public manufacturingDate:Date,public institute:Institute){
  constructor(private level1InstrumentDataService:Level1InstrumentDataService,private instituteDataService:InstituteDataService,private level1DataService:Level1DataService,private signInDataService:SigninDataService) { 
    // let level1;
    // this.level1=new Level1(null,null,null,null,null,null,null,null);
    // let level1=new Level1(this.signInDataService.getUser(),null,null,null,null,null,null,null,null,null);
    // let level1UserName=this.signInDataService.getUser();
    let level1UserName=this.signInDataService.getUser();
    this.level1DataService.retrieveLevel1(level1UserName).subscribe(
      Response=>{
        console.log(Response);
        this.level1=Response;
        console.log(this.level1);
        this.getRelevantInstituteUsingLevel1();
      },
      error=>{
        console.log(error);
        console.log(this.level1);
      }
    );

    // this.level1DataService.retrieveLevel1Object().subscribe(
    //   Response=>{
    //     this.level1Object=Response;
    //     console.log(Response);
    //   },error=>{
    //     console.log(error);
    //   }
    // );
    
    
    
  }

  getRelevantInstituteUsingLevel1(){
    this.instituteDataService.getTheInstituteRelavantForLevel1(this.level1).subscribe(
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

  onSubmitData(){
    this.level2=new Level2(null,this.level2Email,null,null,null,null,null,null);
    console.log(this.level2Email);
    this.level1DataService.addLevel2(this.level2).subscribe(
      Response=>{
        console.log(Response);
        this.addingInstrument();
      },error=>{
        console.log(error);
      }
    );
    
  }
  addingInstrument(){
    this.instrument=new Instrument(this.instrumentName,this.modelNo,this.manufacturingDate,this.level2,this.instituteInstance,this.level1);
    console.log(this.instrument);
    this.level1InstrumentDataService.AddAnInstruments(this.instrument).subscribe(
      Response=>{
        console.log(Response);
        this.memberSuccess=true;
      },
      error=>{
        console.log(error);
        this.memberFail=true;
      }
    );
    console.log(this.instrumentName+" "+this.modelNo+" "+this.manufacturingDate+" "+this.level2);
  }

}
