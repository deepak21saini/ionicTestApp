import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Observable, Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()

export class AssetService {
	constructor(private http: Http){}

	getAssetList(){
		
    	return this.http.get("http://asm.nascenture.com/api/getAssets")
        .map((res:Response) => res.json())
        .catch(error => {
          	return Observable.throw(error.json());
      	})
    	 
    }
}