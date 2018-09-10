import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, Slides, LoadingController } from 'ionic-angular';

import {AuthService} from '../../../providers/auth.service';
import {SharedService} from '../../../providers/shared.service';

import {Config} from '../../../providers/config';
import {ResetPasswordPage} from '../reset-password/reset-password';

/**
 * Generated class for the OtpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-otp',
  templateUrl: 'otp.html',
})
export class OtpPage {

	public model:any = {};
	public verification_type = Config.VERIFICATION_TYPE;
	public disableButton : boolean;

  	constructor(
  		public navCtrl: NavController, 
  		public navParams: NavParams,
    	private auth : AuthService,
      private shared: SharedService,
      public loading: LoadingController
    	) {
  	}
    
  	ionViewDidLoad() {
    	console.log('ionViewDidLoad OtpPage');
  	}

  	resetPassword() {
  	  this.disableButton = true;
      this.model.verification_type = this.verification_type;
      let loader = this.loading.create({});
      loader.present().then(() => {
      this.auth.resetPassword(this.model).subscribe(data => { 
        
        if(this.verification_type == 'email') {
          this.shared.AlertMessage('Success', 'An e-mail was sent with your new password.');
        }
        else {
          this.navCtrl.push(ResetPasswordPage, {mobile:this.model.mobile});
        }
        
        }, 
        error => {
          this.model = {};
          this.shared.handleError(error);
        });
        loader.dismiss();
      });
 
    }

}
