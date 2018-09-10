import { Injectable } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
import { Observable, Subject } from 'rxjs';
import { Storage } from '@ionic/storage';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()

export class AssetService {
	constructor(
     private http: Http,
     private storage: Storage,
    ){
      
  }

	getAssetList(){
		  let headers = new Headers();
      let token = localStorage.getItem('auth_token');
      headers.append("Authorization", 'Bearer ' + token);
      return this.http.get("http://asm.nascenture.com/api/getAssets", {
        headers: headers
      })
      .map((res:Response) => res.json())
      .catch(error => {
          return Observable.throw(error.json());
      })
  }
}