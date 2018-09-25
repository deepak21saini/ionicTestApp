import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AssetPage } from '../pages/asset/asset';
import { AssetDetailPage } from '../pages/asset-detail/asset-detail';
import { LoginPage } from '../pages/auth/login/login';
import { RegisterPage } from '../pages/auth/register/register';
import { OtpPage } from '../pages/auth/otp/otp';
import { VerifyOtpPage } from '../pages/auth/verify-otp/verify-otp';
import { LogoutPage } from '../pages/logout/logout';
import { ProfilePage } from '../pages/profile/profile';
import { NewPasswordPage } from '../pages/new-password/new-password';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {SignupService} from "../providers/signup.service";
import {AssetService} from "../providers/asset.service";
import {AuthService} from "../providers/auth.service";
import {SharedService} from "../providers/shared.service";
import {FileUploadService} from "../providers/file-upload.service";
import {ProfileService} from "../providers/profile.service";
import { IonicStorageModule } from '@ionic/storage';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AssetPage,
    AssetDetailPage,
  	LoginPage,
  	RegisterPage,
  	OtpPage,
  	VerifyOtpPage,
    LogoutPage,
    ProfilePage,
    NewPasswordPage
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
    AssetPage,
    AssetDetailPage,
  	LoginPage,
  	RegisterPage,
  	OtpPage,
  	VerifyOtpPage,
    LogoutPage,
    ProfilePage,
    NewPasswordPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SignupService,
    AuthService,
    SharedService,
    AssetService,
    FileUploadService,
    ProfileService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
	
	
}
