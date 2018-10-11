import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { EventsService } from '../../providers/events.service';
import { SharedService } from '../../providers/shared.service';


/**
 * Generated class for the EditEventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-event',
  templateUrl: 'edit-event.html',
})
export class EditEventPage {

   event:any;
   model = {};
   eventForm:any;

  constructor(
  		public navCtrl: NavController, 
  		public navParams: NavParams,
  		private eventsService: EventsService,
  		public shared: SharedService,
  		public loading: LoadingController) 
  {

	  	if(this.navParams.data && this.navParams.data.event){
	  		this.event = this.navParams.data.event;

	  		this.model = {
	  			event_id : this.event.id,
	  			name : this.event.name,
	  			start_date : this.event.start_date,
	  			end_date : this.event.end_date,
          start_time : this.event.start_time,
          end_time : this.event.end_time,
	  			notes : this.event.notes,
	  		};

	  	}
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditEventPage');
  }


  update(){

  	let loader = this.loading.create({ });
        loader.present().then(() => {
          this.eventsService.editEvent(this.model).subscribe(res => {
            this.model = {};
            //this.shared.AlertMessage('Success', 'Event added successfully.');
            this.navCtrl.getPrevious().data.updateEvent = res.data;
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
