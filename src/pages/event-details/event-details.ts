import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ShagunsPage } from '../shaguns/shaguns';
import { AddShagunPage } from '../add-shagun/add-shagun';
import { EventsService } from '../../providers/events.service';

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

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private eventsService: EventsService
    ){

  	if(this.navParams.data && this.navParams.data.event){
  		this.event = this.navParams.data.event;

  	}

    this.eventsService.getEventShagun().subscribe(data => {

        let amount = parseInt(data.amount);
        
        if(data.type == 'add'){
            this.event.total_member = this.event.total_member + 1;

            if(amount){
              this.event.total_amount = this.event.total_amount + amount;
            }

            if(data.gift || data.gift_image){
                this.event.total_gift = this.event.total_gift + 1;
            }
        }
        else if(data.type == 'delete'){
            this.event.total_member = this.event.total_member - 1;

            if(amount){
              this.event.total_amount = this.event.total_amount - amount;
            }

            if(data.gift || data.gift_image){
                this.event.total_gift = this.event.total_gift - 1;
            }
        }
        else if(data.id == this.event.id){
            this.event = data;
        }

    });

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
