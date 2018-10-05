import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ShagunsPage } from '../shaguns/shaguns';
import { AddShagunPage } from '../add-shagun/add-shagun';

/**
 * Generated class for the EventDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-event-details',
  templateUrl: 'event-details.html',
})
export class EventDetailsPage {

  event:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  	if(this.navParams.data && this.navParams.data.event){
  		this.event = this.navParams.data.event;

  	}

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventDetailsPage');
  }


  addShagun(){

  	this.navCtrl.push(AddShagunPage, {
      event: this.event
    });
  }

  viewShaguns(){

  	this.navCtrl.push(ShagunsPage, {
      event: this.event
    });
  }


}
