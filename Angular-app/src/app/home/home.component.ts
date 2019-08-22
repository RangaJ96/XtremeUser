import { Component, OnInit, NgModule } from '@angular/core';

import { TokenStorageService } from '../auth/token-storage.service';
import { UserProServiceService } from '../auth/user-pro-service.service';
import { UserProperties } from '../auth/user-properties';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  info: any;
  user:UserProperties;
  name:string;
  email:string;
  constructor(private token: TokenStorageService,private service:UserProServiceService) { }

  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities(),
      
    };
    this.service.findAll().subscribe(data=>{
      this.user=data;
      this.name=this.user.name;
      this.email=this.user.email;
    });
  }

  logout() {
    this.token.signOut();
    window.location.reload();
  }
}
