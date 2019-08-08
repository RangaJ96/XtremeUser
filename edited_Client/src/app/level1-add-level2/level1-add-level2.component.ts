import { Component, OnInit } from '@angular/core';
import { Level1DataService } from '../service/level1-data.service';
import { Level2DataService, Level2 } from '../service/level2-data.service';

@Component({
  selector: 'app-level1-add-level2',
  templateUrl: './level1-add-level2.component.html',
  styleUrls: ['./level1-add-level2.component.css']
})
export class Level1AddLevel2Component implements OnInit {

  level1Email:string;
  level1;
  level2;
  constructor(private level1DataService:Level1DataService,private level2DataService:Level2DataService) { 
    this.level1DataService.retrieveLevel1Object().subscribe(
      Response=>{
        this.level1=Response;
        console.log(Response);
      },error=>{
        console.log(error);
      }
    );
  }
  ngOnInit() {
  }
  onClickSubmit(){
    this.level2=new Level2(null,this.level1Email,null,null,null,null,null,null);
    console.log(this.level1Email);
    this.level1DataService.addLevel2(this.level2).subscribe(
      Response=>{
        console.log(Response);
      },error=>{
        console.log(error);
      }
    );
  }

}
