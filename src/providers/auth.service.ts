import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Observable, Subject } from 'rxjs';
import { App } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {Config} from './config';
  
@Injectable()

export class AuthService {

    private subject = new Subject<any>();
    private user = new Subject<any>();

    constructor(private http: Http, private storage:Storage, public appCtrl: App) {
        
     }

    signup(data:any){
    	 
    	let options = {};
    	return this.http.post(Config.API_URLS.REGISTER, data, options)
        .map((res:Response) => res.json())
        .catch(error => {
          	return Observable.throw(error.json());
      	})
    	 
    }

    signin(data:any) {
      let options = {};
      return this.http.post(Config.API_URLS.LOGIN, data, options)
        .map((res:Response) => res.json())
        .catch(error => {
            return Observable.throw(error.json());
       })

    }

    activateAccount(data){
    	let options = {};
    	return this.http.post(Config.API_URLS.VERIFY_PIN, data, options)
        .map((res:Response) => res.json())
        .catch(error => {
          	return Observable.throw(error.json());
      	})
    }


    resetPassword(data){

      let options = {};
      return this.http.post(Config.API_URLS.FORGOT_PASSWORD, data, options)
        .map((res:Response) => res.json())
        .catch(error => {
            return Observable.throw(error.json());
      })

    }

    updatePassword(data){

      let options = {};
      return this.http.post(Config.API_ENDPOINT+'opt/updatePassword', data, options)
        .map((res:Response) => res.json())
        .catch(error => {
            return Observable.throw(error.json());
      })

    }

    resendOTP(data){
      let options = {};
      return this.http.post(Config.API_URLS.SEND_PIN, data, options)
        .map((res:Response) => res.json())
        .catch(error => {
            return Observable.throw(error.json());
      })

    }

    verifyPin(data){
      return this.http.post(Config.API_URLS.VERIFY_PIN, data)
        .map((res:Response) => res.json())
        .catch(error => {
            return Observable.throw(error.json());
      })
    }

    setLoggedInStatus(staus: boolean) {
        this.subject.next(staus);
    }

    setUser(data) {
        this.user.next(data);
    }

    getUser(): Observable<any> {
        return this.user.asObservable();
    }

    logout(){
      this.storage.remove('user').then(() => {
          this.setLoggedInStatus(false);
          localStorage.removeItem('token');
          this.storage.clear();
          this.appCtrl.getRootNav().setRoot('HomePage');
      });
     
     }

    newPassword(data){
        return this.http.post(Config.API_URLS.RESET_PASSWORD, data)
          .map((res:Response) => res.json())
          .catch(error => {
              return Observable.throw(error.json());
        })
    }

    isLoggedIn(): Observable<any> {
        return this.subject.asObservable();
    }

}
