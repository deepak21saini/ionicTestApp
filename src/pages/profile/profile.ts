import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ModalController } from 'ionic-angular';
import { FileUploadService } from '../../providers/file-upload.service';
import { SharedService } from '../../providers/shared.service';
import { ProfileService } from '../../providers/profile.service';
import { AuthService } from '../../providers/auth.service';
import { Config } from '../../providers/config';
import { Storage } from '@ionic/storage';
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
  res: any;
  user_id: any;
  public model:any = {};
  constructor(
		public navCtrl: NavController, 
		public navParams: NavParams,
    public fileUpload: FileUploadService,
    public shared: SharedService,
    public loading: LoadingController,
    public profile: ProfileService,
    public auth: AuthService,
    private storage:Storage,
    public modalCtrl: ModalController
		) {

    this.storage.get('user').then((val) => {
       this.user_id = val.id;
       this.getUserDetail();
    }); 
		
	}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  presentProfileModal(column, val) {
    let label = column;
    column = column.toLowerCase().replace(' ', '_');
    let profileModal = this.modalCtrl.create('UpdateprofilePage', {label:label, column: column, val:val});

    profileModal.onDidDismiss(data => {
      if(data){
        this.userinfo = data;
      }
      
    });

    profileModal.present();
  }

  getUserDetail(){
    let loader = this.loading.create({});
    this.postData = {user_id:this.user_id};
    loader.present().then(() => {
    this.profile.getUser(this.postData).subscribe(res => { 
        if(res.data){
           this.userinfo = res.data;
           if(res.data.image){
              this.photo = Config.SITE_URL+'/public/upload/user/'+res.data.image;
           }
           
        }
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

  handleFileInput(files: FileList) {
      this.fileToUpload = files.item(0);
      this.uploadFile();
  }

  uploadFile() {
    let loader = this.loading.create({});
    if(this.fileToUpload){
      loader.present().then(() => {
      this.fileUpload.postFile(this.fileToUpload).subscribe((res:any) => {
        if(res.data){
          this.photo = Config.SITE_URL+res.data.image;
        }
      }, error => {
         this.shared.handleError(error);
         loader.dismiss();
      },
      () => {
        loader.dismiss();
      });
    });
    }else {
      this.shared.AlertMessage('Error', 'Please select image to upload'); 
    }
   
  }

  logout(){
    this.auth.logout();
  }
}
