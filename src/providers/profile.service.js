import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Config } from './config';
var ProfileService = /** @class */ (function () {
    function ProfileService(http) {
        this.http = http;
        this.headers = new Headers();
        this.headers.append("Authorization", 'Bearer ' + localStorage.getItem('auth_token'));
    }
    ProfileService.prototype.getUser = function (data) {
        return this.http.post(Config.API_URLS.GETUSERBYID, data, {
            headers: this.headers
        })
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            return Observable.throw(error.json());
        });
    };
    ProfileService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    ProfileService.ctorParameters = function () { return [
        { type: Http, },
    ]; };
    return ProfileService;
}());
export { ProfileService };
//# sourceMappingURL=profile.service.js.map