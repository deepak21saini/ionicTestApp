import {Component} from '@angular/core';
import {NavController } from 'ionic-angular';
import { Headers} from '@angular/http';
import { Storage } from '@ionic/storage';
import {AuthService} from '../../providers/auth.service';
import {HomePage} from '../home/home'

@Component({
    selector: 'logout',
    template: ''
})
export class LogoutPage {
	headers = new Headers();
	constructor(public navCtrl: NavController, private storage: Storage, private auth : AuthService) { 
 		
        this.storage.remove('user').then(() => {
        	this.auth.setLoggedInStatus(false);
	      	this.navCtrl.setRoot(HomePage);
	      	localStorage.removeItem('token');
	      	this.storage.clear();
	      	 
	    });

	}

}
