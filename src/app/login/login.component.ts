import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { ToastrService } from 'ngx-toastr';
import {Cookie} from 'ng2-cookies/ng2-cookies'
import { Router } from '@angular/router';
import { UserHttpService } from '../user-http.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email
  public password

  constructor(private userHttpService:UserHttpService, public toastr:ToastrService, public router:Router) { }

  ngOnInit() {
  }

  public loginFunction: any =()=>{

    let data = {
      email: this.email,
      password: this.password
    }

    this.userHttpService.loginFunction(data).subscribe((apiResponse)=>{

      if(apiResponse.status == 200){
        console.log(apiResponse)
        this.toastr.success(apiResponse.message)
        Cookie.set('authtoken', apiResponse.data.authToken);
            
        Cookie.set('receiverId', apiResponse.data.userDetails.userId);
            
        Cookie.set('receiverName', apiResponse.data.userDetails.firstName + ' ' + apiResponse.data.userDetails.lastName);
           
        this.userHttpService.setUserInfoInLocalStorage(apiResponse.data.userDetails)
            
        this.router.navigate(['/home']);
      }else {

        this.toastr.error(apiResponse.message)
        this.toastr.error('cant login')
        console.log('wrong password')
      }

    },(err)=>{
      this.toastr.error('some error occured')
    })
  }

}
