import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, List } from 'ionic-angular';

import { AssetDetailPage } from '../asset-detail/asset-detail';

import {AssetService} from '../../providers/asset.service';

import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
/**
 * Generated class for the AssetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-asset',
  templateUrl: 'asset.html',
})
export class AssetPage {
  assets: Array<{id:number, manufacturer: string, category: string, model_number: string, serial_number:string, purchase_date:string, expiry_date:string}>;

   @ViewChild('assetsList', { read: List }) assetsList: List;
   constructor(
  		public navCtrl: NavController, 
  		public navParams: NavParams,
  	 	private assetService: AssetService,
  	 	private spinnerService: Ng4LoadingSpinnerService
  	) {
	this.assets = [];
	
  }

  ionViewDidLoad() {
  	this.spinnerService.show();
    this.assetService.getAssetList().subscribe(data => { 
    	this.assets = data.all_assets;
    	this.spinnerService.hide();
    }, 
    error => {
       
    });
  
  }

  goToAssetDetail(event, asset) {
    this.navCtrl.push(AssetDetailPage, {
      asset: asset
    });
  }
}
