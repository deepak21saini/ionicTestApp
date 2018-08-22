import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';

import {SignupService} from '../../providers/signup.service';
import {AuthService} from '../../providers/auth.service';
import {SharedService} from '../../providers/shared.service';

import {VERIFICATION_TYPE} from '../../providers/config';
import {HomePage} from '../home/home';
import {LoginPage} from '../login/login';

/**
 * Generated class for the ResetPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-resetpassword',
  templateUrl: 'reset-password.html',
})
export class ResetPasswordPage {

	public model:any = {};
	public verification_type = VERIFICATION_TYPE;
	public disableButton : boolean;

	constructor(
		public navCtrl: NavController, 
		public navParams: NavParams,
		private _signupService : SignupService,
  	private auth : AuthService,
    private shared: SharedService,
  	) {
	}

	ionViewDidLoad() {
  	console.log('ionViewDidLoad OtpPage');
	}

  updatePassword(){

      this._signupService.updatePassword(this.model).subscribe(data => {
        this.model = {};
        this.shared.presentLoading('Success', 'Your password has been updated successfully.');
        this.navCtrl.setRoot(LoginPage);
      }, 
      error => {
        this.model = {};
        this.shared.handleError(error);
      });
  }

  goToRoot(){
    this.navCtrl.setRoot(HomePage);
  }

}
