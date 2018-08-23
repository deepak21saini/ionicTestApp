import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import {VERIFICATION_TYPE} from '../../../providers/config';
import {AuthService} from '../../../providers/auth.service';
import {SharedService} from '../../../providers/shared.service';
import {LoginPage} from '../login/login';
import {VerifyOtpPage} from '../verify-otp/verify-otp';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})

export class RegisterPage {

	public signupForm: any;
	public model:any = {};
	public disableButton : boolean;
	public verification_type = VERIFICATION_TYPE;
  	
	constructor(
		public navCtrl: NavController, 
		public navParams: NavParams,
  	private auth : AuthService,
    private shared: SharedService
	) {
	}

	ionViewDidLoad() {
	   console.log('ionViewDidLoad RegisterPage');
	}


	signup() {

    this.disableButton = true;
    this.model.verification_type = this.verification_type;
    this.auth.signup(this.model).subscribe(data => { 
        console.log(this.model);
        var mobile = this.model.mobile;
        this.model = {};
        this.disableButton = false;
        if(this.verification_type == 'email') {
          this.shared.presentLoading('Success', 'Thanks for signing up!');  
        }
        else {
         
          this.shared.presentLoading('Success', 'Thanks for signing up, please verify your account');
          this.navCtrl.push(VerifyOtpPage, {mobile:mobile});

        }
        
      }, 
      error => {
        this.shared.handleError(error);
        this.disableButton = false;
    });
  
  }

  goToLogin(){
    this.navCtrl.setRoot(LoginPage);
  }

 
}
