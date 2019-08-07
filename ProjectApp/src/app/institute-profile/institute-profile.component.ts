import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-institute-profile',
  templateUrl: './institute-profile.component.html',
  styleUrls: ['./institute-profile.component.css']
})
export class InstituteProfileComponent implements OnInit {

  selecetdFile : File;
  imagePreview: string;
  memberImageUpload:boolean=false;

  constructor() { }

  ngOnInit() {
  }

  onImageUpload(event:any){
    this.memberImageUpload=true;
    console.log(event);
    console.log(event.target.files[0]);
    this.selecetdFile = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
    this.imagePreview = reader.result+'';
    console.log(this.imagePreview);
    };
    reader.readAsDataURL(this.selecetdFile);
  }
}
