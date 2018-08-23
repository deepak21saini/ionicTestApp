import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, Slides } from 'ionic-angular';

import {AuthService} from '../../../providers/auth.service';
import {SharedService} from '../../../providers/shared.service';

import {VERIFICATION_TYPE} from '../../../providers/config';
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
	public verification_type = VERIFICATION_TYPE;
	public disableButton : boolean;

  	constructor(
  		public navCtrl: NavController, 
  		public navParams: NavParams,
    	private auth : AuthService,
      private shared: SharedService,
    	) {
  	}
    
  	ionViewDidLoad() {
    	console.log('ionViewDidLoad OtpPage');
  	}

  	resetPassword() {
  	  this.disableButton = true;
      this.model.verification_type = this.verification_type;
    
      this.auth.resetPassword(this.model).subscribe(data => { 
        
        if(this.verification_type == 'email') {
          this.shared.presentLoading('Success', 'An e-mail was sent with your new password.');
        }
        else {
          this.navCtrl.push(ResetPasswordPage, {mobile:this.model.mobile});
        }
        
      }, 
      error => {
        this.model = {};
        this.shared.handleError(error);
      });
 
    }

}
