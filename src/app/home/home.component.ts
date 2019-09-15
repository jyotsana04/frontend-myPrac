import { Component, OnInit } from '@angular/core';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import {AppService} from '../app.service'
import { UserHttpService } from '../user-http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public allUsers;

  constructor(private appService:AppService, private userHttpService:UserHttpService) { }

  public dateOfMeeting : Date
  public userForMeeting:string
  public userStaff = ['jyotsana', 'abhijeet', 'kukku', 'shail']

  ngOnInit() {

    //this.allUsers = this.appService.getAllUsers() //old code

    this.allUsers = this.userHttpService.getAllUsers().subscribe(

      data=>{
        console.log('loging data')
        console.log(data)
        this.allUsers = data['data']
      },
      error =>{
        console.log('some error occured')
        console.log(error.errorMessage)
      }
    )
  }

  public createMeeting():any{

    let meetData={
      dateOfMeet:this.dateOfMeeting,
      user:this.userForMeeting
    }

    console.log(meetData)
  }
/*
  public logout: any = () => {

    this.appService.logout()
      .subscribe((apiResponse) => {

        if (apiResponse.status === 200) {
          console.log("logout called")
          Cookie.delete('authtoken');

          Cookie.delete('receiverId');

          Cookie.delete('receiverName');

          this.SocketService.exitSocket()

          this.router.navigate(['/']);

        } else {
          this.toastr.error(apiResponse.message)

        } // end condition

      }, (err) => {
        this.toastr.error('some error occured')


      });

  } // end logout

  */

}
