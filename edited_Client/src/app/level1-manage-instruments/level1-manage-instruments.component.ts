import { Component, OnInit } from '@angular/core';
import { Level1InstrumentDataService } from '../service/level1-instrument-data.service';

@Component({
  selector: 'app-level1-manage-instruments',
  templateUrl: './level1-manage-instruments.component.html',
  styleUrls: ['./level1-manage-instruments.component.css']
})
export class Level1ManageInstrumentsComponent implements OnInit {

  institute;
  instruments;

  level1Instance;
  instituteInstance;

  // constructor(private http:HttpClient,private level1InstrumentDataService:Level1InstrumentDataService,private level1DataService:Level1DataService,private signInDataService:SigninDataService,private instituteDataService:InstituteDataService) {
  //   let level1UserName=this.signInDataService.getUser();
  //   this.level1DataService.retrieveLevel1(level1UserName).subscribe(
  //     Response=>{
  //       console.log(Response);
  //       this.level1Instance=Response;
  //       this.getRelevantInstituteUsingLevel1();
  //       this.refreshInstruments(this.instituteInstance);
  //     },
  //     error=>{
  //       console.log(error);
  //       console.log(this.level1Instance);
  //     }
  //   );
    
  // }

  // getRelevantInstituteUsingLevel1(){
  //   this.instituteDataService.getTheInstituteRelavantForLevel1(this.level1Instance).subscribe(
  //     Response=>{
  //       console.log(Response);
  //       this.instituteInstance=Response;
  //     },error=>{
  //       console.log(error);
  //     }
      
  //   );
  // }

  // refreshInstruments(instituteInstance){
  //   this.level1InstrumentDataService.retrieveAllInstruments(instituteInstance).subscribe(
  //     data=>{
  //       this.instruments=data;
  //       console.log(data);
  //     },
  //     error=>{
  //       console.log(error);
  //     }
  //   );
  // }

  constructor(private level1InstrumentDataService:Level1InstrumentDataService){
    this.level1InstrumentDataService.retrieveAllInstruments().subscribe(
      data=>{
        console.log(Response);
        this.instruments=data;
        // this.refreshInstruments();
      },error=>{
        console.log(error);
      }
    );
  }

  ngOnInit() {
  }
  deleteInstrument(instrumentId){
    console.log(instrumentId);
    this.level1InstrumentDataService.deleteAnInstrument(instrumentId).subscribe(
      Response=>{
        console.log(Response);
        // this.refreshInstruments();
      },error=>{
        console.log(error);
      }
    );
  }
  onSubmitData(){}
}
