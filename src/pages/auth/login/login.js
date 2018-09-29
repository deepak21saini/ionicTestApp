var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { IonicPage, App, NavController, NavParams, ViewController, Navbar, LoadingController } from 'ionic-angular';
import { AuthService } from '../../../providers/auth.service';
import { SharedService } from '../../../providers/shared.service';
import { RegisterPage } from '../register/register';
import { OtpPage } from '../otp/otp';
import { AssetPage } from '../../asset/asset';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, viewCtrl, app, auth, shared, loading, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.app = app;
        this.auth = auth;
        this.shared = shared;
        this.loading = loading;
        this.storage = storage;
        this.model = {};
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad LoginPage');
        this.navBar.backButtonClick = function (e) {
            _this.navCtrl.popToRoot();
        };
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        var loader = this.loading.create({});
        loader.present().then(function () {
            _this.auth.signin(_this.model).subscribe(function (res) {
                _this.model = {};
                _this.storage.set('user', res.data);
                localStorage.setItem('auth_token', res.data.access_token);
                localStorage.setItem('user_id', res.data.id);
                _this.auth.setLoggedInStatus(true);
                _this.navCtrl.setRoot(AssetPage);
            }, function (error) {
                _this.shared.handleError(error);
                loader.dismiss();
            }, function () {
                loader.dismiss();
            });
        });
    };
    LoginPage.prototype.goToRegister = function () {
        this.navCtrl.push(RegisterPage);
    };
    LoginPage.prototype.goToForgotPassword = function () {
        this.navCtrl.push(OtpPage);
    };
    LoginPage.prototype.popView = function () {
        this.navCtrl.pop();
    };
    LoginPage.decorators = [
        { type: Component, args: [{
                    selector: 'page-login',
                    templateUrl: 'login.html',
                },] },
    ];
    /** @nocollapse */
    LoginPage.ctorParameters = function () { return [
        { type: NavController, },
        { type: NavParams, },
        { type: ViewController, },
        { type: App, },
        { type: AuthService, },
        { type: SharedService, },
        { type: LoadingController, },
        { type: Storage, },
    ]; };
    LoginPage.propDecorators = {
        "navBar": [{ type: ViewChild, args: [Navbar,] },],
    };
    /**
     * Generated class for the LoginPage page.
     *
     * See https://ionicframework.com/docs/components/#navigation for more info on
     * Ionic pages and navigation.
     */
    LoginPage = __decorate([
        IonicPage(),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            ViewController,
            App,
            AuthService,
            SharedService,
            LoadingController,
            Storage])
    ], LoginPage);
    return LoginPage;
}());
export { LoginPage };
//# sourceMappingURL=login.js.map