import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { SharedService } from '../../providers/shared.service';
import { EventsService } from '../../providers/events.service';

/**
 * Generated class for the AddShagunPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-shagun',
  templateUrl: 'add-shagun.html',
})
export class AddShagunPage {
  
  model = {
  	name:'',
  	city:'',
  	address:'',
  	gift:'',
	amount : '',
  	gift_image:null
  };
  event:any;
  shagunForm:any;

  constructor(
  		public navCtrl: NavController, 
  		public navParams: NavParams,
  		public loading: LoadingController,
  		public eventsService: EventsService, 
  		public shared: SharedService

  		) {

	  		if(this.navParams.data && this.navParams.data.event){
	  			this.event = this.navParams.data.event;
	  		}

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddShagunPage');
  }

  handleFileInput(files: FileList) {
       this.model.gift_image = files.item(0);
  }


  add(){

    
    const formData: FormData = new FormData();
    if (this.model.gift_image) {
    	formData.append('gift_image', this.model.gift_image, this.model.gift_image.name);
    }
	
	formData.append('name', this.model.name);
	formData.append('amount', this.model.amount);
	formData.append('city', this.model.city );
	formData.append('event_id', this.event.id);
	formData.append('gift', this.model.gift);
    
    console.log(formData);

  	let loader = this.loading.create({ });
        loader.present().then(() => {
          this.eventsService.addShagun(formData).subscribe(res => {
            //this.model = {};
            this.shared.AlertMessage('Success', 'Shagun added successfully.');
            this.navCtrl.getPrevious().data.addShagun = res.data;
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
