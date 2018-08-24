import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Observable, Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {API_ENDPOINT} from './config';
  
@Injectable()

export class AuthService {

    private subject = new Subject<any>();

    constructor(private http: Http) { }

    signup(data:any){
    	 
    	let options = {};
    	return this.http.post(API_ENDPOINT+'opt', data, options)
        .map((res:Response) => res.json())
        .catch(error => {
          	return Observable.throw(error.json());
      	})
    	 
    }

    signin(data:any) {

      let options = {};
      return this.http.post(API_ENDPOINT+'opt/signin', data, options)
        .map((res:Response) => res.json())
        .catch(error => {
            return Observable.throw(error.json());
       })

    }

    activateAccount(data){
    	let options = {};
    	return this.http.post(API_ENDPOINT+'opt/authenticateOPT', data, options)
        .map((res:Response) => res.json())
        .catch(error => {
          	return Observable.throw(error.json());
      	})
    }


    resetPassword(data){

      let options = {};
      return this.http.post(API_ENDPOINT+'opt/forgotPassword', data, options)
        .map((res:Response) => res.json())
        .catch(error => {
            return Observable.throw(error.json());
      })

    }

    updatePassword(data){

      let options = {};
      return this.http.post(API_ENDPOINT+'opt/updatePassword', data, options)
        .map((res:Response) => res.json())
        .catch(error => {
            return Observable.throw(error.json());
      })

    }

    resendOTP(data){
      let options = {};
      return this.http.post(API_ENDPOINT+'opt/resendOTP', data, options)
        .map((res:Response) => res.json())
        .catch(error => {
            return Observable.throw(error.json());
      })

    }

    setLoggedInStatus(staus: boolean) {
        this.subject.next(staus);
    }

    isLoggedIn(): Observable<any> {
        return this.subject.asObservable();
    }


}