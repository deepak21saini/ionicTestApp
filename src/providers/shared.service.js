import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { LoadingController, AlertController } from 'ionic-angular';
var SharedService = /** @class */ (function () {
    function SharedService(loadingCtrl, alertCtrl) {
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
    }
    SharedService.prototype.handleError = function (error) {
        var errorMessage = '';
        var errors = error.errors;
        if (errors) {
            for (var i in errors) {
                errorMessage += errors[i][0] + '<br/>';
            }
        }
        else {
            errorMessage += error.message;
        }
        this.AlertMessage('Error', errorMessage || 'Oops! something went wrong');
    };
    SharedService.prototype.AlertMessage = function (type, message) {
        var alert = this.alertCtrl.create({
            title: type,
            subTitle: message,
            buttons: ['Ok']
        });
        alert.present();
    };
    SharedService.prototype.startLoading = function () {
        var loading = this.loadingCtrl.create({
            duration: 500
        });
        loading.present();
    };
    SharedService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    SharedService.ctorParameters = function () { return [
        { type: LoadingController, },
        { type: AlertController, },
    ]; };
    return SharedService;
}());
export { SharedService };
//# sourceMappingURL=shared.service.js.map