import { Injectable } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
import { Observable } from 'rxjs';
import {Config} from './config';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()

export class AssetService {

	constructor(
     private http: Http
    ){ }

	getAssetList(){

      let headers = new Headers();
      headers.append("Authorization", 'Bearer ' +localStorage.getItem('token'));
      return this.http.get(Config.API_URLS.ASSETS, {
        headers: headers
      })
      .map((res:Response) => res.json())
      .catch(error => {
          return Observable.throw(error.json());
      })
  }
}