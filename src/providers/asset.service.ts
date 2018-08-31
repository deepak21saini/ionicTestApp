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
    ){}

  createAuthorizationHeader(
    headers: Headers
    ) {
    headers.append('Authorization', 'Bearer ' +
      this.storage.get('auth_token')); 
  }

	getAssetList(){
		  let headers = new Headers();
      this.createAuthorizationHeader(headers);
    	return this.http.get("http://asm.nascenture.com/api/getAssets", {
        headers: headers
      })
        .map((res:Response) => res.json())
        .catch(error => {
          	return Observable.throw(error.json());
      	})
    	 
    }
}