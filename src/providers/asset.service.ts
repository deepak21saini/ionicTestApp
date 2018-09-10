import { Injectable } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
import { Observable, Subject } from 'rxjs';
import { Storage } from '@ionic/storage';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()

export class AssetService {

  headers = new Headers();
  
	constructor(
     private http: Http,
     private storage: Storage,
    ){
      
  }

	getAssetList(){
      this.headers.append("Authorization", 'Bearer ' + localStorage.getItem('auth_token'));
      return this.http.get("http://asm.nascenture.com/api/getAssets", {
        headers: this.headers
      })
      .map((res:Response) => res.json())
      .catch(error => {
          return Observable.throw(error.json());
      })
  }
}