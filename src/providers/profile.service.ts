import { Injectable } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Storage } from '@ionic/storage';
import {Config} from './config';
  
@Injectable()

export class ProfileService {
    headers = new Headers();
    constructor(private http: Http, private storage:Storage) {
    
      this.storage.get('user').then((val) => {
        this.headers.append("Authorization", 'Bearer ' +val.access_token);
      });   
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
}
