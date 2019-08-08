import { Component, OnInit } from '@angular/core';
import { Level0DataService } from '../service/level0-data.service';
import { Level1 } from '../service/level1-data.service';

@Component({
  selector: 'app-level0-add-level1',
  templateUrl: './level0-add-level1.component.html',
  styleUrls: ['./level0-add-level1.component.css']
})
export class Level0AddLevel1Component implements OnInit {

  level1Email:string;
  level0;
  level1;

  memberSuccess:boolean=false;
  memberFail:boolean=false;

  constructor(private level0DataService:Level0DataService) {
    this.level0DataService.retrieveLevel0Object().subscribe(
      Response=>{
        this.level0=Response;
        console.log(Response);
      },error=>{
        console.log(error);
      }
    );
  }

  ngOnInit() {
  }

  onClickSubmit(){
    this.level1=new Level1(null,this.level1Email,null,null,null,null,null,null,null);
    console.log(this.level1Email);
    this.level0DataService.addLevel1(this.level1).subscribe(
      Response=>{
        console.log(Response);
        this.memberSuccess=true;
      },error=>{
        console.log(error);
        this.memberFail=true;
      }
    );
  }

}
