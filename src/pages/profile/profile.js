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
import { FileUploadService } from '../../providers/file-upload.service';
import { SharedService } from '../../providers/shared.service';
import { ProfileService } from '../../providers/profile.service';
import { Config } from '../../providers/config';
import { LogoutPage } from '../logout/logout';
/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, navParams, fileUpload, shared, loading, profile) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fileUpload = fileUpload;
        this.shared = shared;
        this.loading = loading;
        this.profile = profile;
        this.fileToUpload = null;
        this.getUserDetail();
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    ProfilePage.prototype.getUserDetail = function () {
        var _this = this;
        var loader = this.loading.create({});
        var user_id = localStorage.getItem('user_id');
        this.postData = { user_id: user_id };
        loader.present().then(function () {
            _this.profile.getUser(_this.postData).subscribe(function (res) {
                if (res.data) {
                    _this.userinfo = res.data;
                    if (res.data.image) {
                        _this.photo = Config.SITE_URL + '/public/upload/user/' + res.data.image;
                    }
                }
            }, function (error) {
                _this.shared.handleError(error);
                loader.dismiss();
            }, function () {
                loader.dismiss();
            });
        });
    };
    ProfilePage.prototype.handleFileInput = function (files) {
        this.fileToUpload = files.item(0);
        this.uploadFile();
    };
    ProfilePage.prototype.uploadFile = function () {
        var _this = this;
        var loader = this.loading.create({});
        if (this.fileToUpload) {
            loader.present().then(function () {
                _this.fileUpload.postFile(_this.fileToUpload).subscribe(function (res) {
                    if (res.data) {
                        _this.photo = Config.SITE_URL + res.data.image;
                    }
                }, function (error) {
                    _this.shared.handleError(error);
                    loader.dismiss();
                }, function () {
                    loader.dismiss();
                });
            });
        }
        else {
            this.shared.AlertMessage('Error', 'Please select image to upload');
        }
    };
    ProfilePage.prototype.logout = function () {
        this.navCtrl.setRoot(LogoutPage);
    };
    ProfilePage.decorators = [
        { type: Component, args: [{
                    selector: 'page-profile',
                    templateUrl: 'profile.html',
                },] },
    ];
    /** @nocollapse */
    ProfilePage.ctorParameters = function () { return [
        { type: NavController, },
        { type: NavParams, },
        { type: FileUploadService, },
        { type: SharedService, },
        { type: LoadingController, },
        { type: ProfileService, },
    ]; };
    /**
     * Generated class for the ProfilePage page.
     *
     * See https://ionicframework.com/docs/components/#navigation for more info on
     * Ionic pages and navigation.
     */
    ProfilePage = __decorate([
        IonicPage(),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            FileUploadService,
            SharedService,
            LoadingController,
            ProfileService])
    ], ProfilePage);
    return ProfilePage;
}());
export { ProfilePage };
//# sourceMappingURL=profile.js.map