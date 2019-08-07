import { Component, OnInit } from '@angular/core';
import { SendInstituteRequestService } from '../service/send-institute-request.service';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {

  memberAdmin:boolean=false;
  
  notificationList;
  noOfNotifications;


  constructor(private sendInstituteRequestService:SendInstituteRequestService) {
    this.sendInstituteRequestService.recieveWaitingRequests().subscribe(
      Response=>{
        console.log(Response);
        this.notificationList=Response;
        this.noOfNotifications=this.notificationList.length;
        // console.log(Response[0].instituteEmail);
      },error=>{
        console.log(error);
      }
    );
   }

  ngOnInit() {
  }

  initial(){
    this.memberAdmin=false;
    
  }
  navigateRequests(){
    this.initial();
    this.memberAdmin=true;
  }


}
