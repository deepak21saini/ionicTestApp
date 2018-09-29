import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { AssetPage } from '../pages/asset/asset';
import { LoginPage } from '../pages/auth/login/login';
import { RegisterPage } from '../pages/auth/register/register';
import { LogoutPage } from '../pages/logout/logout';
import { ProfilePage } from '../pages/profile/profile';
import { Storage } from '@ionic/storage';
import { AuthService } from '../providers/auth.service';
import { Config } from '../providers/config';
var MyApp = /** @class */ (function () {
    // pages: Array<{title: string, icon: string, component: any}>;
    function MyApp(platform, statusBar, splashScreen, storage, auth) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.storage = storage;
        this.auth = auth;
        this.isLoggedIn = false;
        this.rootPage = HomePage;
        this.auth.isLoggedIn().subscribe(function (status) {
            _this.isLoggedIn = status;
        });
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', icon: 'home', component: HomePage },
            { title: 'Login', icon: 'contact', component: LoginPage },
            { title: 'Register', icon: 'person-add', component: RegisterPage },
        ];
        this.accountMenuItems = [
            { title: 'My Assets', component: AssetPage, icon: 'briefcase' },
            { title: 'My Requests', component: AssetPage, icon: 'list' },
            { title: 'Help', component: AssetPage, icon: 'help-circle' },
            { title: 'Feedback', component: AssetPage, icon: 'star' },
            { title: 'Logout', component: LogoutPage, icon: 'log-out' }
        ];
        this.storage.get('user').then(function (val) {
            if (val) {
                _this.username = val.first_name;
                console.log('image', val.image);
                if (val.image) {
                    console.log('okk');
                    _this.image = Config.SITE_URL + '/public/upload/user/' + val.image;
                }
                _this.auth.setLoggedInStatus(true);
            }
        });
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.logoutPage = function () {
        this.nav.setRoot(LogoutPage);
    };
    MyApp.prototype.goToProfile = function () {
        this.nav.push(ProfilePage);
    };
    MyApp.decorators = [
        { type: Component, args: [{
                    templateUrl: 'app.html'
                },] },
    ];
    /** @nocollapse */
    MyApp.ctorParameters = function () { return [
        { type: Platform, },
        { type: StatusBar, },
        { type: SplashScreen, },
        { type: Storage, },
        { type: AuthService, },
    ]; };
    MyApp.propDecorators = {
        "nav": [{ type: ViewChild, args: [Nav,] },],
    };
    return MyApp;
}());
export { MyApp };
//# sourceMappingURL=app.component.js.map