import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { Config } from './config';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
var AssetService = /** @class */ (function () {
    function AssetService(http) {
        this.http = http;
        this.headers = new Headers();
        this.headers.append("Authorization", 'Bearer ' + localStorage.getItem('auth_token'));
    }
    AssetService.prototype.getAssetList = function () {
        return this.http.get(Config.API_URLS.ASSETS, {
            headers: this.headers
        })
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            return Observable.throw(error.json());
        });
    };
    AssetService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    AssetService.ctorParameters = function () { return [
        { type: Http, },
    ]; };
    return AssetService;
}());
export { AssetService };
//# sourceMappingURL=asset.service.js.map