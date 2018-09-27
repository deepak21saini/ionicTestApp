import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegisterPage } from '../auth/register/register';
import { LoginPage } from '../auth/login/login';
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.goToRegister = function () {
        this.navCtrl.push(RegisterPage);
    };
    HomePage.prototype.goToLogin = function () {
        this.navCtrl.push(LoginPage);
    };
    HomePage.decorators = [
        { type: Component, args: [{
                    selector: 'page-home',
                    templateUrl: 'home.html'
                },] },
    ];
    /** @nocollapse */
    HomePage.ctorParameters = function () { return [
        { type: NavController, },
    ]; };
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.js.map