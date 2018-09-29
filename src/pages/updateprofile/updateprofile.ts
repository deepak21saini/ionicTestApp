import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ViewController } from 'ionic-angular';
import { ProfileService } from '../../providers/profile.service';
import { SharedService } from '../../providers/shared.service';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the UpdateprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-updateprofile',
  templateUrl: 'updateprofile.html',
})
export class UpdateprofilePage {
  userinfo: any;
  label:any;
  column:any;
  val: any;
  public model:any = {};
  constructor(public navCtrl: NavController, 
  	public navParams: NavParams, 
  	public loading: LoadingController,
  	public profile: ProfileService,
  	public shared: SharedService,
  	public storage: Storage,
  	public viewCtrl: ViewController
  	) {

     this.label = navParams.get('label');
  	 this.column = navParams.get('column');
  	 this.val = navParams.get('val');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpdateprofilePage');
  }

  updateProfile(){

  	let loader = this.loading.create({ });
    loader.present().then(() => {
      let value = this.model.name;
      this.model = {};
      this.model[this.column] = value;
      this.profile.updateProfile(this.model).subscribe(res => {
        this.model = {};
        if(res){
          this.storage.set('user', res.data);
          this.userinfo = res.data;
        }
       
      },
      error => {
        this.shared.handleError(error);
        loader.dismiss();
      },
      () => {
        loader.dismiss();
        this.dismiss();
      });
  	}); 
  }

   dismiss() {
    this.viewCtrl.dismiss(this.userinfo);
   }

}
