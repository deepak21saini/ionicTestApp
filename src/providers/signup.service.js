import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Config } from './config';
var SignupService = /** @class */ (function () {
    function SignupService(http) {
        this.http = http;
    }
    SignupService.prototype.updateProfile = function (data) {
        var options = {};
        return this.http.put(Config.API_ENDPOINT + 'opt/' + data.id, data, options)
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            return Observable.throw(error.json());
        });
    };
    SignupService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    SignupService.ctorParameters = function () { return [
        { type: Http, },
    ]; };
    return SignupService;
}());
export { SignupService };
//# sourceMappingURL=signup.service.js.map