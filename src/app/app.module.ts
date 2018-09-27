import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { AssetPageModule } from '../pages/asset/asset.module';
import { AssetDetailPageModule } from '../pages/asset-detail/asset-detail.module';
import { LoginPageModule } from '../pages/auth/login/login.module';
import { RegisterPageModule } from '../pages/auth/register/register.module';
import { OtpPageModule } from '../pages/auth/otp/otp.module';
import { VerifyOtpPageModule } from '../pages/auth/verify-otp/verify-otp.module';
import { ProfilePageModule } from '../pages/profile/profile.module';
import { NewPasswordPageModule } from '../pages/new-password/new-password.module';

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
    MyApp
  ],
  imports: [
    HttpModule,
    BrowserModule,
    AssetPageModule,
    AssetDetailPageModule,
    LoginPageModule,
    RegisterPageModule,
    OtpPageModule,
    VerifyOtpPageModule,
    ProfilePageModule,
    NewPasswordPageModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    Ng4LoadingSpinnerModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
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
