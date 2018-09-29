import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { LoadingController, AlertController } from 'ionic-angular';

@Injectable()

export class SharedService {

    constructor(
      public loadingCtrl: LoadingController,
      public alertCtrl: AlertController,
    ) { }

  handleError (error:any) {

    let errorMessage = '';
    let errors = error.errors;
    
    if(errors){
      for (var i in errors) {
         errorMessage += errors[i][0]+'<br/>';
      }

    }else {
       errorMessage +=error.message;
    }
   
    this.AlertMessage('Error', errorMessage || 'Oops! something went wrong');
  }

  AlertMessage (type, message) {

    const alert = this.alertCtrl.create({
        title: type,
        subTitle: message,
        buttons: ['Ok']
      });
      alert.present();
  }

  startLoading (){
     const loading = this.loadingCtrl.create({
      duration: 500
    });
    loading.present();
  }
}
