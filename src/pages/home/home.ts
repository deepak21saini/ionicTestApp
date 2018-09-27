import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {RegisterPage} from '../auth/register/register';
import {LoginPage} from '../auth/login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	constructor(
		public navCtrl: NavController
		) {

	}
	goToRegister(){
		this.navCtrl.push(RegisterPage);
	}

	goToLogin(){
		this.navCtrl.push(LoginPage);
	}
}
