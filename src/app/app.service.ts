import { Injectable } from '@angular/core';





@Injectable({
  providedIn: 'root'
})
export class AppService {

  public currentUser

  public allUsers = [
    {
      'id': '1',
      'firstname': 'jyotsana-withoutapi',
      'lastname': 'negi',
      'mobile': '89526647'
    },
    {
      'id': '2',
      'firstname': 'shail-withoutapi',
      'lastname': 'rawat',
      'mobile': '89526647'
    }
  ]

  constructor() { }

  public getAllUsers(){
    return this.allUsers
  }

  public getSingleUserDetail(currentuserid){

    for(let user of this.allUsers){
      if(user.id== currentuserid){
        this.currentUser= user
      }
    }
    return this.currentUser

  } 

  
  

  
}
