import { Injectable } from '@angular/core';
import{HttpClient, HttpClientModule,HttpErrorResponse, HttpParams} from '@angular/common/http'
import {Observable} from 'rxjs'
import {Cookie} from 'ng2-cookies/ng2-cookies'

@Injectable({
  providedIn: 'root'
})
export class UserHttpService {

  public currentUser
  public allUsers
  public baseUrl = 'http://localhost:3000/api/v1/users'

  constructor(private http:HttpClient) { }

  public getAllUsers(){

    let myresponse = this.http.get(this.baseUrl + '/allUsers')
    console.log(myresponse)
    return(myresponse)

  }

  public getSingleUserDetail(currentUserId){
     
    console.log('current userId is '+currentUserId)
    let myresponse = this.http.get(`${this.baseUrl}/userdetail/${currentUserId}`)
    console.log('in userdetail http service' + myresponse)
    return myresponse
    console.log(myresponse)
    
  }

  public getUserInfoFromLocalStorage=()=>{
    return JSON.parse(localStorage.getItem('userInfo'))
  }

  public setUserInfoInLocalStorage=(data)=>{
    localStorage.setItem('userInfo', JSON.stringify(data))
  }

  public signupFunction(data): Observable<any>{

    const  params= new HttpParams()
      .set('firstName', data.firstName)
      .set('lastName', data.lastName)
      .set('mobileNumber', data.mobileNumber)
      .set('email', data.email)
      .set('password', data.password)
      .set('confirmPassword', data.confirmPassword)
      

      return this.http.post(`${this.baseUrl}/signup`, params)
  } // end of signup func

  public loginFunction(data):Observable<any>{

    const params= new HttpParams()
      .set('email', data.email)
      .set('password', data.password)

      return this.http.post(`${this.baseUrl}/login`, params)

  }//end login

  public logout(): Observable<any> {

    const params = new HttpParams()
      .set('authToken', Cookie.get('authtoken'))

    return this.http.post(`${this.baseUrl}/logout`, params);

  } // end logout function

  public forgotPassword(email): Observable<any>{
    console.log('sending request for password tokrn for email' + email)
    const params = new HttpParams()
      .set('email', email)

      return this.http.post(`${this.baseUrl}/recoverPassword`, params)
  }

  public getUserDetailByToken(currentToken){
     
    console.log('current token  is '+currentToken)
    let myresponse = this.http.get(`${this.baseUrl}/findForReset/${currentToken}`)
    console.log('service response getuserbytoken' + myresponse)
    return myresponse
        
  } 

  public setNewPassword(data){
    console.log('user id whose password reseting is '+data.userId)
    const params = new HttpParams()
      .set('userId', data.userId)
      .set('newPassword', data.newPassword)
      .set('verifyPassword', data.verifyPassword)
    
    return this.http.post(`${this.baseUrl}/setNewPassword`, params)
  }
}
