import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { Config } from './config';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
var FileUploadService = /** @class */ (function () {
    function FileUploadService(http) {
        this.http = http;
        this.headers = new Headers();
        this.headers.append("Authorization", 'Bearer ' + localStorage.getItem('auth_token'));
    }
    FileUploadService.prototype.postFile = function (fileToUpload) {
        var formData = new FormData();
        formData.append('image', fileToUpload, fileToUpload.name);
        console.log('here', formData);
        return this.http
            .post(Config.API_URLS.USERIMAGE, formData, {
            headers: this.headers
        })
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            return Observable.throw(error.json());
        });
    };
    FileUploadService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    FileUploadService.ctorParameters = function () { return [
        { type: Http, },
    ]; };
    return FileUploadService;
}());
export { FileUploadService };
//# sourceMappingURL=file-upload.service.js.map