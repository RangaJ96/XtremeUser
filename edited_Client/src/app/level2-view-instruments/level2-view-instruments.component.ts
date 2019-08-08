import { Component, OnInit } from '@angular/core';
import { Level1InstrumentDataService } from '../service/level1-instrument-data.service';

@Component({
  selector: 'app-level2-view-instruments',
  templateUrl: './level2-view-instruments.component.html',
  styleUrls: ['./level2-view-instruments.component.css']
})
export class Level2ViewInstrumentsComponent implements OnInit {

  instruments;

  constructor(private level2InstrumentDataService:Level1InstrumentDataService){
    this.level2InstrumentDataService.retrieveAllInstrumentsByLevel2().subscribe(
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
  
  onSubmitData(){}

}
