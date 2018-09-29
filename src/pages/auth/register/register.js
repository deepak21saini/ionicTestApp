var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Config } from '../../../providers/config';
import { AuthService } from '../../../providers/auth.service';
import { SharedService } from '../../../providers/shared.service';
import { LoginPage } from '../login/login';
import { VerifyOtpPage } from '../verify-otp/verify-otp';
import { HomePage } from '../../home/home';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, navParams, auth, shared, loading) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.shared = shared;
        this.loading = loading;
        this.model = {};
        this.verification_type = Config.VERIFICATION_TYPE;
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage.prototype.signup = function () {
        var _this = this;
        this.disableButton = true;
        this.model.verification_type = this.verification_type;
        var loader = this.loading.create({});
        loader.present().then(function () {
            // match password validation //
            if (_this.model.password != _this.model.c_password) {
                _this.shared.AlertMessage('Error', 'Password did not match');
                loader.dismiss();
                _this.disableButton = false;
                return false;
            }
            _this.auth.signup(_this.model).subscribe(function (data) {
                var mobile = _this.model.mobile;
                var email = _this.model.email;
                _this.model = {};
                _this.disableButton = false;
                if (_this.verification_type == 'email') {
                    _this.navCtrl.push(VerifyOtpPage, { email: email, type: 'register' });
                }
                else {
                    _this.shared.AlertMessage('Success', 'Thanks for signing up, please verify your account');
                    _this.navCtrl.push(VerifyOtpPage, { mobile: mobile, type: 'register' });
                }
            }, function (error) {
                _this.shared.handleError(error);
                _this.disableButton = false;
                loader.dismiss();
            }, function () {
                loader.dismiss();
            });
        });
    };
    RegisterPage.prototype.goToLogin = function () {
        this.navCtrl.push(LoginPage);
    };
    RegisterPage.prototype.goToHome = function () {
        this.navCtrl.setRoot(HomePage);
    };
    RegisterPage.decorators = [
        { type: Component, args: [{
                    selector: 'page-register',
                    templateUrl: 'register.html',
                },] },
    ];
    /** @nocollapse */
    RegisterPage.ctorParameters = function () { return [
        { type: NavController, },
        { type: NavParams, },
        { type: AuthService, },
        { type: SharedService, },
        { type: LoadingController, },
    ]; };
    /**
     * Generated class for the RegisterPage page.
     *
     * See https://ionicframework.com/docs/components/#navigation for more info on
     * Ionic pages and navigation.
     */
    RegisterPage = __decorate([
        IonicPage(),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            AuthService,
            SharedService,
            LoadingController])
    ], RegisterPage);
    return RegisterPage;
}());
export { RegisterPage };
//# sourceMappingURL=register.js.map