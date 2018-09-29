import { Injectable } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Config} from './config';

@Injectable()

export class ProfileService {
 
    constructor(private http: Http) {}

    getUser(data:any){

      let headers = new Headers();
      headers.append("Authorization", 'Bearer ' +localStorage.getItem('token'));
    	return this.http.post(Config.API_URLS.GETUSERBYID, data,{
          headers: headers
          })
        .map((res:Response) => res.json())
        .catch(error => {
          	return Observable.throw(error.json());
      	})
    	 
    }

    updateProfile(data:any){

      let headers = new Headers();
      headers.append("Authorization", 'Bearer ' +localStorage.getItem('token'));
      return this.http.post(Config.API_URLS.UPDATE_PROFILE, data,{
          headers: headers
        })
        .map((res:Response) => res.json())
        .catch(error => {
            return Observable.throw(error.json());
        })
       
    }
}
