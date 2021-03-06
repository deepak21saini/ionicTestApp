import { Component, ViewChild } from '@angular/core';
import { IonicPage, App, NavController, NavParams, ViewController, Navbar, LoadingController } from 'ionic-angular';
import {AuthService} from '../../../providers/auth.service';
import {SharedService} from '../../../providers/shared.service';
import { EventsService } from '../../../providers/events.service';
import {RegisterPage} from '../register/register';
import {OtpPage} from '../otp/otp';
import {EventsPage} from '../../events/events';
import { Storage } from '@ionic/storage';
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
  public passwordType : string = 'password';

  constructor(
	public navCtrl: NavController, 
	public navParams: NavParams,
	public viewCtrl: ViewController,
  	public app: App,
  	private auth : AuthService,
    private shared: SharedService,
    public loading: LoadingController,
    private eventsService: EventsService,
    private storage: Storage
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
            this.storage.set('user', res.data);
            localStorage.setItem('auth_token', res.data.access_token);
            localStorage.setItem('notifications', res.notifications);
            let viewedNotifications = parseInt(localStorage.getItem('viewedNotifications'));
            this.eventsService.setViewedNotifications(viewedNotifications);
			      this.auth.setLoggedInStatus(true);
            this.auth.setUser(res.data);
            this.navCtrl.setRoot(EventsPage);
          },
          error => {
            this.shared.handleError(error);
            loader.dismiss();
          },
          () => {
            loader.dismiss();
          });
      }); 
      
  }

  changePasswordType(){

    if(this.passwordType == 'password'){
        this.passwordType = 'text';
    }
    else{
        this.passwordType = 'password';
    }

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
