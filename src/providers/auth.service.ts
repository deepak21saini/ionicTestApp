import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Observable, Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

  
@Injectable()

export class AuthService {

    private subject = new Subject<any>();

    constructor() { }

    setLoggedInStatus(staus: boolean) {
        this.subject.next(staus);
    }

    isLoggedIn(): Observable<any> {
        return this.subject.asObservable();
    }


}
