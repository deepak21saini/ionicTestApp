import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { EventsService } from '../../providers/events.service';
import { SharedService } from '../../providers/shared.service';
import { AddShagunPage } from '../add-shagun/add-shagun';

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
  filteredShaguns: Array<{}>;
  search:string;
  isDataLoaded:boolean = false;

  constructor(
  		public navCtrl: NavController, 
  		public navParams: NavParams,
  		public loading: LoadingController,
  		public eventsService: EventsService, 
  		public shared: SharedService,
      private alertCtrl: AlertController
  	) {

  		if(this.navParams.data && this.navParams.data.event){
	  		this.event = this.navParams.data.event;
	  		this.getShaguns();
		}

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShagunsPage');
  }


  ionViewWillEnter() {
    
    let newShagun = this.navParams.get('addShagun');
    if(newShagun){
        this.navParams.data.addShagun = null;
        this.shaguns.unshift(newShagun);
        this.assignCopy();
    }


    let updateShagun = this.navParams.get('updateShagun');
    if(updateShagun){
        this.navParams.data.updateShagun = null;
        this.shaguns.forEach((item, index) =>  {
            if(updateShagun.id == item['id']){
              this.shaguns[index] = updateShagun; 
            }
            this.assignCopy();
         });
      } 

  } 

  assignCopy(){
     this.filteredShaguns = Object.assign([], this.shaguns);
  }

  getShaguns(){

	    let loader = this.loading.create({});
	    loader.present().then(() => {
	       
	      this.eventsService.getShaguns(this.event.id).subscribe(res => { 
	      	this.shaguns = res.data.amount;
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


  delete(shagun){

    let alert = this.alertCtrl.create({
      title: 'Confirm delete',
      message: 'Are you sure you want to delete this shagun?',
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
                 
                this.eventsService.deleteShagun(shagun.id).subscribe(res => { 
                   
                  this.shaguns = Object.assign([], this.shaguns).filter(
                      item => item.id != shagun.id
                  );

                  this.assignCopy();
                  this.shared.AlertMessage('Success', 'Shagun deleted successfully.');

                  let data = {
                      type : 'delete',
                      amount : shagun.amount,
                      gift : shagun.gift,
                      gift_image : shagun.gift_image

                  }
                  this.eventsService.setEventShagun(data);
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


  onSerachInput(){
        
      if(!this.search){
        this.assignCopy();
        return false;
      }

      this.filteredShaguns = Object.assign([], this.shaguns).filter(
          item => item.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1
      );
      
  }

  onCancelSerach(){
      this.assignCopy();
  }


  goToAdd() {
    this.navCtrl.push(AddShagunPage, {
      event: this.event
    });
  }

  edit(shagun) {
    this.navCtrl.push('EditShagunPage', {
      shagun: shagun
    });
  }


}
