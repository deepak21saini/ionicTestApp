import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { SharedService } from '../../providers/shared.service';
import { EventsService } from '../../providers/events.service';

/**
 * Generated class for the EditShagunPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-shagun',
  templateUrl: 'edit-shagun.html',
})
export class EditShagunPage {

	shagun:any;
	shagunForm:any;
	model = {
	  	name:'',
	  	tag:'',
	  	gift:'',
		amount : '',
	  	gift_image:null,
	  	gift_url:'',
	    type : 'edit'
	  };

	isGift:boolean = false;
    buttonText = 'Add Gift';

  constructor(
  		public navCtrl: NavController, 
  		public navParams: NavParams,
  		public loading: LoadingController,
  		public eventsService: EventsService, 
  		public shared: SharedService,
  		private alertCtrl: AlertController) {


  		if(this.navParams.data && this.navParams.data.shagun){
	  		this.shagun = this.navParams.data.shagun;

	  		this.model = {
			  	name: this.shagun.name,
			  	tag: (this.shagun.tag == null) ? this.shagun.tag : '',
			  	gift: (this.shagun.gift == null) ? this.shagun.gift : '',
				amount :this.shagun.amount,
				gift_url : this.shagun.gift_image,
			  	gift_image:null,
			    type : 'edit'
			};

			if(this.shagun.gift_image || this.shagun.gift){
				this.isGift = true;
				this.buttonText = 'Cancel Gift';
			}

			//console.log(this.model);

	  	}


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditShagunPage');
  }


    addGift(){

	    this.isGift = !this.isGift;
	    if(this.isGift){
	      this.buttonText = 'Cancel Gift';
	    }
	    else{
	      this.model.gift_image = null;
	      this.model.gift = '';
	      this.buttonText = 'Add Gift';
	    }

    }


    handleFileInput(files: FileList) {
       this.model.gift_image = files.item(0);
  }


  update(){

    const formData: FormData = new FormData();
    if (this.model.gift_image) {
    	formData.append('gift_image', this.model.gift_image, this.model.gift_image.name);
    }
	
	formData.append('name', this.model.name);
	formData.append('amount', this.model.amount);
	formData.append('tag', this.model.tag );
	formData.append('id', this.shagun.id);
	formData.append('event_id', this.shagun.event_id);
	formData.append('gift', this.model.gift);
    
    //console.log(formData);

  	let loader = this.loading.create({ });
        loader.present().then(() => {
          this.eventsService.updateShagun(formData).subscribe(res => {
            this.navCtrl.getPrevious().data.updateShagun = res.data;
            this.eventsService.setEventShagun(this.model);
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


  deleteImage(){
  
      let alert = this.alertCtrl.create({
      title: 'Confirm delete',
      message: 'Are you sure you want to delete?',
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
           
            let formData = {id : this.shagun.id};
		  	let loader = this.loading.create({ });
		        loader.present().then(() => {
		          this.eventsService.deleteShagunImage(formData).subscribe(res => {
		             this.shagun.gift_image = null;
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



}
