import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import {SharedService} from '../../providers/shared.service';
/**
 * Generated class for the NewPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-password',
  templateUrl: 'new-password.html',
})
export class NewPasswordPage {
	public model:any = {};
	public disableButton : boolean;
  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams,
  	public loading: LoadingController,
  	private shared: SharedService
  	) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewPasswordPage');
  }

  createNewPassword(){
  	this.disableButton = true;
  	let loader = this.loading.create({});
  	loader.present().then(() => {
	  	if(this.model.new_password != this.model.c_new_password){
	        this.shared.AlertMessage('Error', 'Password did not match');  
	        loader.dismiss();
	        this.disableButton = false;
	        
	        return false
	     }
	    loader.dismiss();
 	});

  	console.log('new pass');
  }
}
