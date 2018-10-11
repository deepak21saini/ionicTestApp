import { Component } from '@angular/core';
import { IonicPage, LoadingController } from 'ionic-angular';
import { EventsService } from '../../providers/events.service';
import { SharedService } from '../../providers/shared.service';

/**
 * Generated class for the NotificationsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notifications',
  templateUrl: 'notifications.html',
})
export class NotificationsPage {
	
	isDataLoaded : boolean = false;
	notifications:any;

  constructor(
  		private eventsService: EventsService,
  		public loading: LoadingController,
  		public shared: SharedService) 
  {

  		

  }

  ionViewDidLoad() {
    	let loader = this.loading.create({});
    	loader.present().then(() => {
       
	      this.eventsService.getNotifications().subscribe(res => { 
	      		this.notifications = res.data;
	      		let viewedNotifications = this.notifications.length; 
	      		localStorage.setItem('viewedNotifications', viewedNotifications);
	      		this.eventsService.setViewedNotifications(viewedNotifications);
	      }, 
	      error => {
	         this.shared.handleError(error);
	         loader.dismiss();
	         this.isDataLoaded = true;
	      },
	      () => {
	        loader.dismiss();
	      });
	        
	    });
  }




}
