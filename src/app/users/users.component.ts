import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {Router} from '@angular/router'
import { users } from '../users.model';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users= new users;
  constructor( private dataservice:DataService,
    private router:Router) { }
  
  getData:any
  ngOnInit(): void {
    this.getUserData();
  }
  getUserData() {
    this.dataservice.getUser().subscribe((res: any) => {
      // console.log(res);
      this.getData = res;
    })
  }
  deleteUserByID(ID: number) {
    this.dataservice.DeleteProfileData(ID).subscribe((res: any) => {
      // console.log(res); 
      alert("Are you sure?")
      this.getUserData();
    });
  }
 
}
