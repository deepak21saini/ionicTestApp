import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { EventsService } from '../../providers/events.service';
import { SharedService } from '../../providers/shared.service';
import { AddEventPage } from '../add-event/add-event';
import { EventDetailsPage } from '../event-details/event-details';
import { EditEventPage } from '../edit-event/edit-event';


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
  search:string;
  timer = null;
  filteredEvents: Array<{}>;
  isDataLoaded:boolean = false;
  classArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n',
      'o','p','q','r','s', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  constructor(
  		public navCtrl: NavController,
  		public navParams: NavParams,
  		private eventsService: EventsService,
  		public loading: LoadingController,
  		public shared: SharedService,
      private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {

		this.getEvents();
  }

  ionViewWillEnter() {

    let newEvent = this.navParams.get('addEvent');
    if(newEvent){
        this.navParams.data.addEvent = null;
        this.events.unshift(newEvent);
        this.assignCopy();
    }

    let updateEvent = this.navParams.get('updateEvent');
    if(updateEvent ){
        this.navParams.data.updateEvent = null;
        this.events.forEach((item, index) =>  {
			if(updateEvent.id == item['id']){
				this.events[index] = updateEvent; 
			}
            
        });
        this.assignCopy();
    }

      
  } 

  getEvents(){

  	this.events = [];
    let loader = this.loading.create({});
    loader.present().then(() => {
       
      this.eventsService.getEventsList().subscribe(res => { 
      	this.events = res.data;
        this.assignCopy();
        this.isDataLoaded = true;
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

  goToAdd() {
    this.navCtrl.push(AddEventPage);
  }

  goToEventDetail(event){
  	this.navCtrl.push(EventDetailsPage, {
      event: event
    });
  }

  edit(event){
    this.navCtrl.push(EditEventPage, {
      event: event
    });
  }


  delete(event){

    let alert = this.alertCtrl.create({
      title: 'Confirm delete',
      message: 'Are you sure you want to delete this event?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Delete',
          handler: () => {
           
              let loader = this.loading.create({});
              loader.present().then(() => {
                 
                this.eventsService.deleteEvent(event.id).subscribe(res => { 
                   
                  this.events = Object.assign([], this.events).filter(
                      item => item.id != event.id
                  );

                  this.assignCopy();
                  //this.shared.AlertMessage('Success', 'Event deleted successfully.');
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
      ]
    });

    alert.present();

  }

  assignCopy(){
     this.filteredEvents = Object.assign([], this.events);
  }

  onSerachInput(){
        
      if(!this.search){
        this.assignCopy();
        return false;
      }

      this.filteredEvents = Object.assign([], this.events).filter(
          item => item.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1
      );
      
  }

  onCancelSerach(){
      this.assignCopy();
  }


  randomIndex(){
    return Math.floor(Math.random() * 25) + 1;
  }

}
