import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import { HomeComponent } from './home/home.component'
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UserdetailComponent } from './userdetail/userdetail.component';
import { AppService } from './app.service';
import { UserHttpService } from './user-http.service';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { compareEqualDirective } from './comparepass.directive';
import { RouteGuardService } from './route-guard.service';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    UserdetailComponent, compareEqualDirective, ForgotPasswordComponent, ResetPasswordComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    AppRoutingModule, BsDatepickerModule.forRoot(),
    BrowserAnimationsModule, HttpClientModule, ToastrModule.forRoot()
  ],
  providers: [AppService, UserHttpService, RouteGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
