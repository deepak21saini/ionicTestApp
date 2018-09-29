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
import { SharedService } from '../../providers/shared.service';
/**
 * Generated class for the NewPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NewPasswordPage = /** @class */ (function () {
    function NewPasswordPage(navCtrl, navParams, loading, shared) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loading = loading;
        this.shared = shared;
        this.model = {};
    }
    NewPasswordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NewPasswordPage');
    };
    NewPasswordPage.prototype.createNewPassword = function () {
        var _this = this;
        this.disableButton = true;
        var loader = this.loading.create({});
        loader.present().then(function () {
            if (_this.model.new_password != _this.model.c_new_password) {
                _this.shared.AlertMessage('Error', 'Password did not match');
                loader.dismiss();
                _this.disableButton = false;
                return false;
            }
            loader.dismiss();
        });
        console.log('new pass');
    };
    NewPasswordPage.decorators = [
        { type: Component, args: [{
                    selector: 'page-new-password',
                    templateUrl: 'new-password.html',
                },] },
    ];
    /** @nocollapse */
    NewPasswordPage.ctorParameters = function () { return [
        { type: NavController, },
        { type: NavParams, },
        { type: LoadingController, },
        { type: SharedService, },
    ]; };
    /**
     * Generated class for the NewPasswordPage page.
     *
     * See https://ionicframework.com/docs/components/#navigation for more info on
     * Ionic pages and navigation.
     */
    NewPasswordPage = __decorate([
        IonicPage(),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            LoadingController,
            SharedService])
    ], NewPasswordPage);
    return NewPasswordPage;
}());
export { NewPasswordPage };
//# sourceMappingURL=new-password.js.map