import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { EventsService } from '../../providers/events.service';
import { SharedService } from '../../providers/shared.service';

/**
 * Generated class for the ShagunsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-shaguns',
  templateUrl: 'shaguns.html',
})
export class ShagunsPage {
  
   shaguns: Array<{}>;
   event:any;

  constructor(
  		public navCtrl: NavController, 
  		public navParams: NavParams,
  		public loading: LoadingController,
  		public eventsService: EventsService, 
  		public shared: SharedService
  	) {

  		if(this.navParams.data && this.navParams.data.event){
	  		this.event = this.navParams.data.event;
	  		this.getShaguns();
		}

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShagunsPage');
  }

    getShaguns(){

	    let loader = this.loading.create({});
	    loader.present().then(() => {
	       
	      this.eventsService.getShaguns(this.event.id).subscribe(res => { 
	      	this.shaguns = res.data.amount;
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
