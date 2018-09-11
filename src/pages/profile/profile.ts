import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {FileUploadService} from '../../providers/file-upload.service';
import {SharedService} from '../../providers/shared.service';
import {ProfileService} from '../../providers/profile.service';
import {Config} from '../../providers/config';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
	userinfo:any;
  fileToUpload: File = null;
  photo:any;
  postData:any;
  constructor(
		public navCtrl: NavController, 
		public navParams: NavParams,
		private storage: Storage,
    public fileUpload: FileUploadService,
    public shared: SharedService,
    public loading: LoadingController,
    public profile: ProfileService
		) {
		
	}

  ionViewDidLoad() {
      console.log('ionViewDidLoad ProfilePage');
      let user_id = localStorage.getItem('user_id');
      this.postData = {user_id:user_id};
      this.profile.getUser(this.postData).subscribe(res => { 
        this.userinfo = res.data;
        console.log(this.userinfo);
      }, 
      error => {
         this.shared.handleError(error);
      });
    

  }

  handleFileInput(files: FileList) {
      this.fileToUpload = files.item(0);
  }

  uploadFile() {
    let loader = this.loading.create({});
    loader.present().then(() => {
      this.fileUpload.postFile(this.fileToUpload).subscribe(res => {
        if(res){
          //this.photo = Config.SITE_URL+'/'+res.data.image;
        }
      }, error => {
         this.shared.handleError(error);
        });
      loader.dismiss();
    });
  }


}
