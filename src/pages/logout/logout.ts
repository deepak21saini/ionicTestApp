import {Component} from '@angular/core';
import {NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {AuthService} from '../../providers/auth.service';
import {HomePage} from '../home/home'

@Component({
    selector: 'logout',
    template: ''
})
export class LogoutPage {

	constructor(public navCtrl: NavController, private storage: Storage, private auth : AuthService) { 
 		
        this.storage.remove('user').then(() => {
        	this.auth.setLoggedInStatus(false);
      		this.storage.clear();
	      	this.navCtrl.setRoot(HomePage);
	    });


	}

}
