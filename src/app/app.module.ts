import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { OtpPage } from '../pages/otp/otp';
import { VerifyOtpPage } from '../pages/verify-otp/verify-otp';
import { ResetPasswordPage } from '../pages/reset-password/reset-password';
import { LogoutPage } from '../pages/logout/logout';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {SignupService} from "../providers/signup.service";
import {AuthService} from "../providers/auth.service";
import {SharedService} from "../providers/shared.service";
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
  	LoginPage,
  	RegisterPage,
  	OtpPage,
  	VerifyOtpPage,
    ResetPasswordPage,
    LogoutPage
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
     IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
  	LoginPage,
  	RegisterPage,
  	OtpPage,
  	VerifyOtpPage,
    ResetPasswordPage,
    LogoutPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SignupService,
    AuthService,
    SharedService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
