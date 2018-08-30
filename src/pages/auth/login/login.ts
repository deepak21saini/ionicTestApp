import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { IonicPage, App, NavController, NavParams, ViewController } from 'ionic-angular';
import {AuthService} from '../../../providers/auth.service';
import {SharedService} from '../../../providers/shared.service';
import {VERIFICATION_TYPE} from '../../../providers/config';
import {RegisterPage} from '../register/register';
import {OtpPage} from '../otp/otp';
import {ListPage} from '../../list/list';
import {HomePage} from '../../home/home';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

	public loginForm: any;
  public model:any = {};
  public disableButton : boolean;

  constructor(
	public navCtrl: NavController, 
	public navParams: NavParams,
	public viewCtrl: ViewController,
  	private storage: Storage,
  	public app: App,
  	private auth : AuthService,
    private shared: SharedService,
    private spinner: Ng4LoadingSpinnerService
  ) {
		
  	}

  	ionViewDidLoad() {
		
		console.log('ionViewDidLoad LoginPage');
  	}

  login() {
      
        this.auth.signin(this.model).subscribe(res => {
        this.model = {};
        this.storage.set('user', res.data);
        this.auth.setLoggedInStatus(true);
        this.navCtrl.setRoot(ListPage);

      }, 
      error => {
        this.shared.handleError(error);
      });

  }

  goToRegister(){
	
	this.navCtrl.push(RegisterPage);
	
  }

  goToForgotPassword(){
    this.navCtrl.setRoot(OtpPage);
  }
  
  popView(){
     this.navCtrl.pop();
   }

}
