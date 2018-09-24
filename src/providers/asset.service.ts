import { Injectable } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
import { Observable } from 'rxjs';
import {Config} from './config';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()

export class AssetService {

  headers = new Headers();
  
	constructor(
     private http: Http
    ){
      this.headers.append("Authorization", 'Bearer ' + localStorage.getItem('auth_token'));
  }

	getAssetList(){
      
      return this.http.get(Config.API_URLS.ASSETS, {
        headers: this.headers
      })
      .map((res:Response) => res.json())
      .catch(error => {
          return Observable.throw(error.json());
      })
  }
}