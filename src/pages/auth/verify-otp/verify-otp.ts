import { Component, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import {AuthService} from '../../../providers/auth.service';
import {SharedService} from '../../../providers/shared.service';

import {LoginPage} from '../login/login';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/timer'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/take'
import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the VerifyOtpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-verify-otp',
  templateUrl: 'verify-otp.html',
})
export class VerifyOtpPage {

	public model:any = {otp:{first: '', second: '', third: '', fourth: ''}};
  @ViewChild('passcode1') passcode1;
  @ViewChild('passcode2') passcode2;
  @ViewChild('passcode3') passcode3;
  
	public disableButton : boolean;
  public mobile:number;
  public count : number = 60;
  private timer;
  private maxTime = 60;

	constructor(
		public navCtrl: NavController, 
		public navParams: NavParams,
		private auth : AuthService,
    public toastCtrl: ToastController,
    private shared: SharedService,
    public loading: LoadingController
		) {
   
    this.mobile = this.navParams.data.mobile;

	}

	ionViewDidLoad() {
	   console.log('ionViewDidLoad VerifyOtpPage');
	}

	activateAccount(){
		this.disableButton = true;
		let loader = this.loading.create({});
    this.model.otp_number = this.model.otp.first+this.model.otp.second+this.model.otp.third+this.model.otp.fourth;
    loader.present().then(() => {
	    this.auth.activateAccount(this.model).subscribe(data => { 
          this.model = {};
	        this.model = {otp:{first: '', second: '', third: '', fourth: ''}};
	        this.shared.AlertMessage('Success', 'Your account has been activated successfully');
	        this.navCtrl.setRoot(LoginPage);
	    }, 
	    error => {
	      this.shared.handleError(error);
        this.disableButton = false;
	    });

      loader.dismiss();
    });
  }


  resendOTP(){
    let loader = this.loading.create({ });
    loader.present().then(() => {
      this.auth.resendOTP({mobile : this.mobile}).subscribe(data => {

        let toast = this.toastCtrl.create({
            message: 'OTP sent successfully',
            cssClass: 'mytoast',
            duration: 1000
        });
        toast.present(toast);
        this.maxTime = this.count;
        this.StartTimer();
          
      }, 
      error => {
        this.shared.handleError(error);
        this.disableButton = false;
    
      });
      loader.dismiss();
    });
  }

  StartTimer() {
    this.timer = setTimeout(x => 
     {
        if(this.maxTime > 0) { 
          this.maxTime -= 1;
          this.StartTimer();
          
        }
         
     }, 1000);
  }

  keyTab(event, max){
   
    let element = event.srcElement.nextElementSibling; // get the sibling element

    if(element == null)  // check if its null
        return;
    else
        element.focus();   // focus if not null
  }

  nextInput(event, index){
    console.log(index);
     this.setFocus(index);
  }

  setFocus(index){
       switch(index){
         case 1:
         this.passcode1.setFocus();
         break;
         case 2:
         this.passcode2.setFocus();
         break;
         case 3:
         this.passcode3.setFocus();
         break;
         
         }
    }
}
