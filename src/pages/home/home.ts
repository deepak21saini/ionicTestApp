import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {RegisterPage} from '../auth/register/register';
import {LoginPage} from '../auth/login/login';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	constructor(
		public navCtrl: NavController) {} 
		goToRegister(){
		this.navCtrl.push(RegisterPage);
		}
		public backgroundImage = 'assets/imgs/ani-bg.png';        
		goToLogin(){
		this.navCtrl.push(LoginPage);
	}
}
