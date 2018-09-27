import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AssetDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-asset-detail',
  templateUrl: 'asset-detail.html',
})
export class AssetDetailPage {
  asset: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	if(this.navParams.data && this.navParams.data.asset){
  		this.asset = this.navParams.data.asset;
  	}
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AssetDetailPage');
  }

}
