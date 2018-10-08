import { Injectable } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Config} from './config';

@Injectable()

export class ProfileService {
    
    headers;

    constructor(private http: Http) {

        this.http = http;
        this.headers = new Headers();
        this.headers.append("Authorization", 'Bearer ' + localStorage.getItem('auth_token'));

    }

    getUser(data:any){
 
    	return this.http.post(Config.API_URLS.GETUSERBYID, data,{
          headers: this.headers
          })
        .map((res:Response) => res.json())
        .catch(error => {
          	return Observable.throw(error.json());
      	})
    	 
    }

    updateProfile(data:any){
       
      return this.http.post(Config.API_URLS.UPDATE_PROFILE, data,{
          headers: this.headers
        })
        .map((res:Response) => res.json())
        .catch(error => {
            return Observable.throw(error.json());
        })
       
    }

     deleteImage(){
      
      return this.http.post(Config.API_URLS.DELETE_IMAGE, '',{
          headers: this.headers
        })
        .map((res:Response) => res.json())
        .catch(error => {
            return Observable.throw(error.json());
        })
       
    }
}
