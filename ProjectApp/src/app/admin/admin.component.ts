import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { SendInstituteRequestService } from '../service/send-institute-request.service';
import { InstituteDataService } from '../service/institute-data.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  /*board: string;
  errorMessage: string;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getAdminBoard().subscribe(
      data => {
        this.board = data;
      },
      error => {
        this.errorMessage = `${error.status}: ${JSON.parse(error.error).message}`;
      }
    );
  }*/
  notificationList;
  noOfNotifications;
  constructor(private sendInstituteRequestService:SendInstituteRequestService,private instituteDataService:InstituteDataService) { 
    
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
    // this.notificationNo=this.notificationNo+1;
  }

  onClickAccept(username){
    console.log(username);
    this.instituteDataService.updateAcceptanceStatus(username).subscribe(
      Response=>{
        console.log(Response);
      },error=>{
        console.log(error);
      }
    );
  }
}
