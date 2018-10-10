import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ViewController } from 'ionic-angular';
import { ProfileService } from '../../providers/profile.service';
import { SharedService } from '../../providers/shared.service';
import { AuthService } from '../../providers/auth.service';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the UpdateprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-update-profile',
  templateUrl: 'update-profile.html',
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
  	public viewCtrl: ViewController,
    public auth: AuthService
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
 
      if(this.column == 'full_name'){
          let full_name = value.split(" ");
          this.model.first_name = full_name[0];
           
          if(full_name.length > 1){
               this.model.last_name = full_name[1];
          }
      }
      else{
          this.model[this.column] = value;
      }
      
      this.profile.updateProfile(this.model).subscribe(res => {
        this.model = {};
        if(res){
          this.storage.set('user', res.data);
          this.userinfo = res.data;
          this.auth.setUser(res.data);
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
