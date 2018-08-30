import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Observable, Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { LoadingController, AlertController } from 'ionic-angular';

import {API_ENDPOINT} from './config';

@Injectable()

export class SharedService {

    constructor(
      private http: Http,
      public loadingCtrl: LoadingController,
      public alertCtrl: AlertController,
    ) { }

  handleError (error:any) {

    let errorMessage = '';
    let errors = error[0];

    for (var i in errors) {
        errorMessage += errors[i][0]+'<br/>';
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
