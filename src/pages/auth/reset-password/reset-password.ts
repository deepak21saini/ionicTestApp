import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController} from 'ionic-angular';

import {AuthService} from '../../../providers/auth.service';
import {SharedService} from '../../../providers/shared.service';

import {Config} from '../../../providers/config';
import {HomePage} from '../../home/home';
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

  updatePassword(){
    let loader = this.loading.create({});
    loader.present().then(() => {
      this.auth.updatePassword(this.model).subscribe(data => {
        this.model = {};
        this.shared.AlertMessage('Success', 'Your password has been updated successfully.');
        this.navCtrl.setRoot(LoginPage);
      }, 
      error => {
        this.model = {};
        this.shared.handleError(error);
      });

      loader.dismiss();
    });
  }

  goToRoot(){
    this.navCtrl.setRoot(HomePage);
  }

}
