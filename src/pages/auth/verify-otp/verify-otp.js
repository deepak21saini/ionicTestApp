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
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { AuthService } from '../../../providers/auth.service';
import { SharedService } from '../../../providers/shared.service';
import { LoginPage } from '../login/login';
import { NewPasswordPage } from '../../new-password/new-password';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
/**
 * Generated class for the VerifyOtpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VerifyOtpPage = /** @class */ (function () {
    function VerifyOtpPage(navCtrl, navParams, auth, toastCtrl, shared, loading) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.toastCtrl = toastCtrl;
        this.shared = shared;
        this.loading = loading;
        this.model = { otp: { first: '', second: '', third: '', fourth: '' } };
        this.count = 60;
        this.maxTime = 60;
        this.email = this.navParams.data.email;
        this.pageType = this.navParams.data.type;
        console.log(this.navParams.data.type);
    }
    VerifyOtpPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VerifyOtpPage');
    };
    VerifyOtpPage.prototype.activateAccount = function () {
        var _this = this;
        this.disableButton = true;
        var loader = this.loading.create({});
        this.model.email = this.email;
        this.model.user_pin = this.model.otp.first + this.model.otp.second + this.model.otp.third + this.model.otp.fourth;
        loader.present().then(function () {
            _this.auth.activateAccount(_this.model).subscribe(function (data) {
                _this.model = {};
                _this.model = { otp: { first: '', second: '', third: '', fourth: '' } };
                //this.shared.AlertMessage('Success', 'Your account has been activated successfully');
                //this.shared.AlertMessage('Success', 'Your account has been activated successfully');
                _this.navCtrl.setRoot(LoginPage);
            }, function (error) {
                _this.shared.handleError(error);
                _this.disableButton = false;
                loader.dismiss();
            }, function () {
                loader.dismiss();
            });
        });
    };
    VerifyOtpPage.prototype.verifyPin = function () {
        var _this = this;
        var loader = this.loading.create({});
        loader.present().then(function () {
            _this.model.email = _this.email;
            _this.model.user_pin = _this.model.otp.first + _this.model.otp.second + _this.model.otp.third + _this.model.otp.fourth;
            _this.auth.verifyPin(_this.model).subscribe(function (data) {
                // this.model = {};
                // this.model = {};
                _this.navCtrl.setRoot(NewPasswordPage);
            }, function (error) {
                _this.shared.handleError(error);
                loader.dismiss();
            }, function () {
                loader.dismiss();
            });
        });
    };
    VerifyOtpPage.prototype.resendOTP = function () {
        var _this = this;
        var loader = this.loading.create({});
        loader.present().then(function () {
            _this.auth.resendOTP({ email: _this.email }).subscribe(function (data) {
                var toast = _this.toastCtrl.create({
                    message: 'OTP sent successfully',
                    cssClass: 'mytoast',
                    duration: 1000
                });
                toast.present(toast);
                _this.maxTime = _this.count;
                _this.StartTimer();
            }, function (error) {
                _this.shared.handleError(error);
                _this.disableButton = false;
                loader.dismiss();
            }, function () {
                loader.dismiss();
            });
        });
    };
    VerifyOtpPage.prototype.StartTimer = function () {
        var _this = this;
        this.timer = setTimeout(function (x) {
            if (_this.maxTime > 0) {
                _this.maxTime -= 1;
                _this.StartTimer();
            }
        }, 1000);
    };
    VerifyOtpPage.prototype.keyTab = function (event, max) {
        var element = event.srcElement.nextElementSibling; // get the sibling element
        if (element == null)
            // check if its null
            return;
        else
            element.focus(); // focus if not null
    };
    VerifyOtpPage.prototype.nextInput = function (event, index) {
        console.log(index);
        this.setFocus(index);
    };
    VerifyOtpPage.prototype.setFocus = function (index) {
        switch (index) {
            case 1:
                this.passcode1.setFocus();
                break;
            case 2:
                this.passcode2.setFocus();
                break;
            case 3:
                this.passcode3.setFocus();
                break;
        }
    };
    VerifyOtpPage.decorators = [
        { type: Component, args: [{
                    selector: 'page-verify-otp',
                    templateUrl: 'verify-otp.html',
                },] },
    ];
    /** @nocollapse */
    VerifyOtpPage.ctorParameters = function () { return [
        { type: NavController, },
        { type: NavParams, },
        { type: AuthService, },
        { type: ToastController, },
        { type: SharedService, },
        { type: LoadingController, },
    ]; };
    VerifyOtpPage.propDecorators = {
        "passcode1": [{ type: ViewChild, args: ['passcode1',] },],
        "passcode2": [{ type: ViewChild, args: ['passcode2',] },],
        "passcode3": [{ type: ViewChild, args: ['passcode3',] },],
    };
    /**
     * Generated class for the VerifyOtpPage page.
     *
     * See https://ionicframework.com/docs/components/#navigation for more info on
     * Ionic pages and navigation.
     */
    VerifyOtpPage = __decorate([
        IonicPage(),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            AuthService,
            ToastController,
            SharedService,
            LoadingController])
    ], VerifyOtpPage);
    return VerifyOtpPage;
}());
export { VerifyOtpPage };
//# sourceMappingURL=verify-otp.js.map