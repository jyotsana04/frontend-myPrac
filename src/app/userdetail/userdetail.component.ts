import { Component, OnInit } from '@angular/core';

import{ActivatedRoute, Router} from '@angular/router'
import { AppService } from '../app.service';
import { UserHttpService } from '../user-http.service';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})
export class UserdetailComponent implements OnInit {

  public currentUser

  constructor(private _route:ActivatedRoute, private router:Router, private appService:AppService,
    private userHttpService:UserHttpService) { }

  ngOnInit() {

    let myuserId = this._route.snapshot.paramMap.get('userId')
    console.log('inside userdetail user id is '+ myuserId)
    
    this.userHttpService.getSingleUserDetail(myuserId).subscribe(
      data=>{
        console.log('printing data from userdetailcomponent'+data)
        this.currentUser = (data["data"])
        console.log(this.currentUser)
      },error=>{
        console.log('some error occured while fetching single user')
        console.log(error)
      }
    )

    //this.currentUser = this.appService.getSingleUserDetail(userId); //this is used for old service

    //this.currentUser = this.userHttpService.getSingleUserDetail() //old code
  }

  

}
