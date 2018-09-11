import { Injectable } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
import { Observable, Subject } from 'rxjs';
import { Storage } from '@ionic/storage';
import {Config} from './config';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()

export class FileUploadService {
	headers = new Headers();
	constructor(
     private http: Http
    ){ }
	postFile(fileToUpload: File): Observable<boolean> {
		this.headers.append("Authorization", 'Bearer ' + localStorage.getItem('auth_token'));
	    const formData: FormData = new FormData();
	    formData.append('image', fileToUpload, fileToUpload.name);
	    return this.http
	      .post(Config.API_URLS.USERIMAGE, formData,{
        	headers: this.headers
      		})
	      .map((res:Response) => res.json())
	      .catch(error => {
          	return Observable.throw(error.json());
      		})
	}
}