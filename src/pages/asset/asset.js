var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, List, LoadingController } from 'ionic-angular';
import { AssetDetailPage } from '../asset-detail/asset-detail';
import { AssetService } from '../../providers/asset.service';
import { SharedService } from '../../providers/shared.service';
/**
 * Generated class for the AssetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AssetPage = /** @class */ (function () {
    function AssetPage(navCtrl, navParams, assetService, loading, shared) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.assetService = assetService;
        this.loading = loading;
        this.shared = shared;
        this.assets = [];
    }
    AssetPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var loader = this.loading.create({});
        loader.present().then(function () {
            _this.assetService.getAssetList().subscribe(function (data) {
                _this.assets = data.all_assets.data;
            }, function (error) {
                _this.shared.handleError(error);
                loader.dismiss();
            }, function () {
                loader.dismiss();
            });
        });
    };
    AssetPage.prototype.goToAssetDetail = function (event, asset) {
        this.navCtrl.push(AssetDetailPage, {
            asset: asset
        });
    };
    AssetPage.decorators = [
        { type: Component, args: [{
                    selector: 'page-asset',
                    templateUrl: 'asset.html',
                },] },
    ];
    /** @nocollapse */
    AssetPage.ctorParameters = function () { return [
        { type: NavController, },
        { type: NavParams, },
        { type: AssetService, },
        { type: LoadingController, },
        { type: SharedService, },
    ]; };
    AssetPage.propDecorators = {
        "assetsList": [{ type: ViewChild, args: ['assetsList', { read: List },] },],
    };
    /**
     * Generated class for the AssetPage page.
     *
     * See https://ionicframework.com/docs/components/#navigation for more info on
     * Ionic pages and navigation.
     */
    AssetPage = __decorate([
        IonicPage(),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            AssetService,
            LoadingController,
            SharedService])
    ], AssetPage);
    return AssetPage;
}());
export { AssetPage };
//# sourceMappingURL=asset.js.map