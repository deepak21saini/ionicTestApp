import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { AssetPage } from '../pages/asset/asset';
import { AssetDetailPage } from '../pages/asset-detail/asset-detail';
import { LoginPage } from '../pages/auth/login/login';
import { RegisterPage } from '../pages/auth/register/register';
import { OtpPage } from '../pages/auth/otp/otp';
import { VerifyOtpPage } from '../pages/auth/verify-otp/verify-otp';
import { ResetPasswordPage } from '../pages/auth/reset-password/reset-password';
import { LogoutPage } from '../pages/logout/logout';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {SignupService} from "../providers/signup.service";
import {AssetService} from "../providers/asset.service";
import {AuthService} from "../providers/auth.service";
import {SharedService} from "../providers/shared.service";
import { IonicStorageModule } from '@ionic/storage';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    AssetPage,
    AssetDetailPage,
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
    Ng4LoadingSpinnerModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    AssetPage,
    AssetDetailPage,
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
    AssetService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
	
	
}
