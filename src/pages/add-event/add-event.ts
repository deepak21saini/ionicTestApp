import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { SharedService } from '../../providers/shared.service';
import { EventsService } from '../../providers/events.service';
import { EventsPage } from '../events/events';

/**
 * Generated class for the AddEventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-event',
  templateUrl: 'add-event.html',
})
export class AddEventPage {
  
  model = {};
  eventForm:any;

  constructor(
  		public navCtrl: NavController, 
  		public navParams: NavParams,
  		public loading: LoadingController,
  		public eventsService: EventsService, 
  		public shared: SharedService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddEventPage');
  }

  add(){

  	let loader = this.loading.create({ });
        loader.present().then(() => {
          this.eventsService.addEvent(this.model).subscribe(res => {
            this.model = {};
            this.shared.AlertMessage('Success', 'Event added successfully.');
            this.navCtrl.getPrevious().data.addEvent = res.data;
            this.navCtrl.pop();

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

}
