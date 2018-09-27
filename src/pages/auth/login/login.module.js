import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        LoginPage,
                    ],
                    imports: [
                        IonicPageModule.forChild(LoginPage),
                    ],
                },] },
    ];
    /** @nocollapse */
    LoginPageModule.ctorParameters = function () { return []; };
    return LoginPageModule;
}());
export { LoginPageModule };
//# sourceMappingURL=login.module.js.map