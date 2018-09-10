import { Component, ViewChild } from '@angular/core';
import { Storage } from '@ionic/storage';
import { IonicPage, App, NavController, NavParams, ViewController, Navbar, LoadingController } from 'ionic-angular';
import {AuthService} from '../../../providers/auth.service';
import {SharedService} from '../../../providers/shared.service';
import {RegisterPage} from '../register/register';
import {OtpPage} from '../otp/otp';
import {AssetPage} from '../../asset/asset';
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
  @ViewChild(Navbar) navBar: Navbar;
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
    private spinner: Ng4LoadingSpinnerService,
    public loading: LoadingController
  ) {
		
  	}

  	ionViewDidLoad() {
  		console.log('ionViewDidLoad LoginPage');
      this.navBar.backButtonClick = (e:UIEvent)=>{
        this.navCtrl.popToRoot();
      }
  	}

  login() {
        let loader = this.loading.create({ });
        loader.present().then(() => {
          this.auth.signin(this.model).subscribe(res => {
            this.model = {};
            localStorage.setItem('auth_token', res.data.access_token);
            this.auth.setLoggedInStatus(true);
            this.navCtrl.setRoot(AssetPage);
          },
          error => {
            this.shared.handleError(error);
          });

          loader.dismiss();
      }); 
      
  }

  goToRegister(){
	   this.navCtrl.push(RegisterPage);
  }

  goToForgotPassword(){
    this.navCtrl.push(OtpPage);
  }
  
  popView(){
     this.navCtrl.pop();
   }

}
