import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AssetPageModule } from '../pages/asset/asset.module';
import { AssetDetailPageModule } from '../pages/asset-detail/asset-detail.module';
import { LoginPageModule } from '../pages/auth/login/login.module';
import { RegisterPageModule } from '../pages/auth/register/register.module';
import { OtpPageModule } from '../pages/auth/otp/otp.module';
import { VerifyOtpPageModule } from '../pages/auth/verify-otp/verify-otp.module';
import { LogoutPage } from '../pages/logout/logout';
import { ProfilePageModule } from '../pages/profile/profile.module';
import { NewPasswordPageModule } from '../pages/new-password/new-password.module';
import { UpdateprofilePageModule } from '../pages/updateprofile/updateprofile.module';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SignupService } from "../providers/signup.service";
import { AssetService } from "../providers/asset.service";
import { AuthService } from "../providers/auth.service";
import { SharedService } from "../providers/shared.service";
import { FileUploadService } from "../providers/file-upload.service";
import { ProfileService } from "../providers/profile.service";
import { IonicStorageModule } from '@ionic/storage';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        MyApp,
                        HomePage,
                        LogoutPage
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
                        UpdateprofilePageModule,
                        IonicModule.forRoot(MyApp),
                        IonicStorageModule.forRoot(),
                        Ng4LoadingSpinnerModule.forRoot()
                    ],
                    bootstrap: [IonicApp],
                    entryComponents: [
                        MyApp,
                        HomePage,
                        LogoutPage
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
                        { provide: ErrorHandler, useClass: IonicErrorHandler }
                    ]
                },] },
    ];
    /** @nocollapse */
    AppModule.ctorParameters = function () { return []; };
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map