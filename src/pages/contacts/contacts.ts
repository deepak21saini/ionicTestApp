import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Contacts  } from '@ionic-native/contacts';

/**
 * Generated class for the ContactsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contacts',
  templateUrl: 'contacts.html',
})
export class ContactsPage {
  
  contactlist:any;

  constructor(private contacts: Contacts, public navCtrl: NavController, public navParams: NavParams) {

  	this.contacts.find(['displayName', 'name', 'phoneNumbers', 'emails'], {filter: "", multiple: true})
    .then(data => {
      this.contactlist = data
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactsPage');
  }

}
