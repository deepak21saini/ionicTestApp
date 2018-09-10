import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Observable, Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {Config} from './config';

@Injectable()

export class SignupService {

    constructor(private http: Http) { }
    
    updateProfile(data){

      let options = {};
      return this.http.put(Config.API_ENDPOINT+'opt/'+data.id, data, options)
        .map((res:Response) => res.json())
        .catch(error => {
            return Observable.throw(error.json());
      })


    }
}
