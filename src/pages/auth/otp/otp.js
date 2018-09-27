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
import { AuthService } from '../../../providers/auth.service';
import { SharedService } from '../../../providers/shared.service';
import { Config } from '../../../providers/config';
import { VerifyOtpPage } from '../verify-otp/verify-otp';
/**
 * Generated class for the OtpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OtpPage = /** @class */ (function () {
    function OtpPage(navCtrl, navParams, auth, shared, loading) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.shared = shared;
        this.loading = loading;
        this.model = {};
        this.verification_type = Config.VERIFICATION_TYPE;
        this.disableButton = false;
    }
    OtpPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OtpPage');
    };
    OtpPage.prototype.resetPassword = function () {
        var _this = this;
        this.disableButton = true;
        this.model.verification_type = this.verification_type;
        var loader = this.loading.create({});
        loader.present().then(function () {
            _this.auth.resetPassword(_this.model).subscribe(function (data) {
                if (_this.verification_type == 'email') {
                    _this.navCtrl.push(VerifyOtpPage, { email: _this.model.email, type: 'password' });
                }
                else {
                    _this.navCtrl.push(VerifyOtpPage, { mobile: _this.model.mobile, type: 'password' });
                }
            }, function (error) {
                _this.disableButton = false;
                _this.shared.handleError(error);
                loader.dismiss();
            }, function () {
                loader.dismiss();
            });
        });
    };
    OtpPage.decorators = [
        { type: Component, args: [{
                    selector: 'page-otp',
                    templateUrl: 'otp.html',
                },] },
    ];
    /** @nocollapse */
    OtpPage.ctorParameters = function () { return [
        { type: NavController, },
        { type: NavParams, },
        { type: AuthService, },
        { type: SharedService, },
        { type: LoadingController, },
    ]; };
    /**
     * Generated class for the OtpPage page.
     *
     * See https://ionicframework.com/docs/components/#navigation for more info on
     * Ionic pages and navigation.
     */
    OtpPage = __decorate([
        IonicPage(),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            AuthService,
            SharedService,
            LoadingController])
    ], OtpPage);
    return OtpPage;
}());
export { OtpPage };
//# sourceMappingURL=otp.js.map