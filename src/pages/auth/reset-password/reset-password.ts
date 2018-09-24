import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController} from 'ionic-angular';

import {AuthService} from '../../../providers/auth.service';
import {SharedService} from '../../../providers/shared.service';

import {Config} from '../../../providers/config';
import {HomePage} from '../../home/home';
import {LoginPage} from '../login/login';
import {NewPasswordPage} from '../../new-password/new-password';
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
  	console.log('ionViewDidLoad resetPasswordPage');
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
      },
      () => {
        loader.dismiss();
      });
    });
  }

  verifyPin(){
    let loader = this.loading.create({});
    loader.present().then(() => {
      this.model.email = this.navParams.data.email;
      this.auth.verifyPin(this.model).subscribe(data => {
        this.model = {};
        this.navCtrl.setRoot(NewPasswordPage);
      }, 
      error => {
        this.shared.handleError(error);
      },
      () => {
        loader.dismiss();
      });
    });
  }

  goToRoot(){
    this.navCtrl.setRoot(HomePage);
  }

}
