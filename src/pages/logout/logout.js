import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AuthService } from '../../providers/auth.service';
import { HomePage } from '../home/home';
var LogoutPage = /** @class */ (function () {
    function LogoutPage(navCtrl, storage, auth) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.auth = auth;
        this.storage.remove('user').then(function () {
            _this.auth.setLoggedInStatus(false);
            _this.navCtrl.setRoot(HomePage);
            _this.storage.clear();
        });
    }
    LogoutPage.decorators = [
        { type: Component, args: [{
                    selector: 'logout',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    LogoutPage.ctorParameters = function () { return [
        { type: NavController, },
        { type: Storage, },
        { type: AuthService, },
    ]; };
    return LogoutPage;
}());
export { LogoutPage };
//# sourceMappingURL=logout.js.map