import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { SharedService } from '../../providers/shared.service';
import { EventsService } from '../../providers/events.service';

/**
 * Generated class for the FeedbackPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feedback',
  templateUrl: 'feedback.html',
})

export class FeedbackPage {
  
  model = {};
  feedbackForm:any;

  constructor(
  		public navCtrl: NavController, 
  		public navParams: NavParams,
  		public loading: LoadingController,
  		public eventsService: EventsService, 
  		public shared: SharedService) {
 

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedbackPage');
  }


  send(){
 
  		let loader = this.loading.create({ });
        loader.present().then(() => {
          this.eventsService.sendFeedback(this.model).subscribe(res => {
            this.model = {};
            this.shared.AlertMessage('Success', 'Thank you for taking the time to provide us with your feedback.');
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
