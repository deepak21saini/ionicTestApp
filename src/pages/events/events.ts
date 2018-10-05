import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { EventsService } from '../../providers/events.service';
import { SharedService } from '../../providers/shared.service';
import { AddEventPage } from '../add-event/add-event';
import { EventDetailsPage } from '../event-details/event-details';

/**
 * Generated class for the EventsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-events',
  templateUrl: 'events.html',
})
export class EventsPage {
 
  events: Array<{}>;

  constructor(
  		public navCtrl: NavController,
  		public navParams: NavParams,
  		private eventsService: EventsService,
  		public loading: LoadingController,
  		public shared: SharedService) {
  }

  ionViewDidLoad() {

		this.getEvents();
  }


  getEvents(){

  	this.events = [];
    let loader = this.loading.create({});
    loader.present().then(() => {
       
      this.eventsService.getEventsList().subscribe(res => { 
      	this.events = res.data;
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

  goToAdd() {
    this.navCtrl.push(AddEventPage);
  }

  goToEventDetail(event){
  	this.navCtrl.push(EventDetailsPage, {
      event: event
    });
  }


  delete(event){

  	let loader = this.loading.create({});
    loader.present().then(() => {
       
      this.eventsService.deleteEvent(event.id).subscribe(res => { 
      	this.getEvents();
      	this.shared.AlertMessage('Success', 'Event deleted successfully.');
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
