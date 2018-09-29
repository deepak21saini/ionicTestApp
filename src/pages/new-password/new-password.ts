import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { SharedService } from '../../providers/shared.service';
import { AuthService } from '../../providers/auth.service';
import { LoginPage } from '../auth/login/login';
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
  email: any;

	public disableButton : boolean;
  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams,
  	public loading: LoadingController,
  	private shared: SharedService,
    private auth: AuthService
  	) {
    this.email = this.navParams.data.email;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewPasswordPage');
  }

  createNewPassword(){
  	this.disableButton = true;
  	let loader = this.loading.create({});
  	loader.present().then(() => {
      this.model.email = this.email;
	  	if(this.model.new_password != this.model.new_password_confirmation){
	      this.shared.AlertMessage('Error', 'Password did not match');  
	      loader.dismiss();
	      this.disableButton = false;
        return false
	     }

	    this.auth.newPassword(this.model).subscribe(data => {
        this.shared.AlertMessage('Success', 'New password created successfully');
        this.navCtrl.push(LoginPage);
      }, 
      error => {
        this.shared.handleError(error);
        this.disableButton = false;
        loader.dismiss();
      },
      () => {
        loader.dismiss();
      });
 	  });

  }
}
