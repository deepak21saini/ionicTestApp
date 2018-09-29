import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable, Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Config } from './config';
var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.subject = new Subject();
    }
    AuthService.prototype.signup = function (data) {
        var options = {};
        return this.http.post(Config.API_URLS.REGISTER, data, options)
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            return Observable.throw(error.json());
        });
    };
    AuthService.prototype.signin = function (data) {
        var options = {};
        return this.http.post(Config.API_URLS.LOGIN, data, options)
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            return Observable.throw(error.json());
        });
    };
    AuthService.prototype.activateAccount = function (data) {
        var options = {};
        return this.http.post(Config.API_URLS.VERIFY_PIN, data, options)
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            return Observable.throw(error.json());
        });
    };
    AuthService.prototype.resetPassword = function (data) {
        var options = {};
        return this.http.post(Config.API_URLS.FORGOT_PASSWORD, data, options)
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            return Observable.throw(error.json());
        });
    };
    AuthService.prototype.updatePassword = function (data) {
        var options = {};
        return this.http.post(Config.API_ENDPOINT + 'opt/updatePassword', data, options)
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            return Observable.throw(error.json());
        });
    };
    AuthService.prototype.resendOTP = function (data) {
        var options = {};
        return this.http.post(Config.API_URLS.SEND_PIN, data, options)
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            return Observable.throw(error.json());
        });
    };
    AuthService.prototype.verifyPin = function (data) {
        return this.http.post(Config.API_URLS.VERIFY_PIN, data)
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            return Observable.throw(error.json());
        });
    };
    AuthService.prototype.setLoggedInStatus = function (staus) {
        this.subject.next(staus);
    };
    AuthService.prototype.isLoggedIn = function () {
        return this.subject.asObservable();
    };
    AuthService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    AuthService.ctorParameters = function () { return [
        { type: Http, },
    ]; };
    return AuthService;
}());
export { AuthService };
//# sourceMappingURL=auth.service.js.map