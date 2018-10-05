import { Injectable } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
import { Observable } from 'rxjs';
import {Config} from './config';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()

export class EventsService {

    headers;

    constructor( private http: Http){ 

        this.http = http;
        this.headers = new Headers();
        this.headers.append("Authorization", 'Bearer ' + localStorage.getItem('auth_token'));

    }

    
    getEventsList(){

        return this.http.get(Config.API_URLS.EVENTS.LIST, {
            headers: this.headers
        })
        .map(function (res) { 
            return res.json(); 
        })
        .catch(function (error) {
            return Observable.throw(error.json());
        });

    }

    addEvent(data){

        return this.http.post(Config.API_URLS.EVENTS.ADD, data, {
            headers: this.headers
        })
        .map((res:Response) => res.json())
        .catch(error => {
            return Observable.throw(error.json());
        })

    }

    deleteEvent(eventId:number){

        return this.http.post(Config.API_URLS.EVENTS.DELETE, {event_id:eventId}, {
            headers: this.headers
        })
        .map((res:Response) => res.json())
        .catch(error => {
            return Observable.throw(error.json());
        })

    }


    addShagun(data){

        return this.http.post(Config.API_URLS.EVENTS.ADD_SHAGUN, data, {
            headers: this.headers
        })
        .map((res:Response) => res.json())
        .catch(error => {
            return Observable.throw(error.json());
        })

    }

    getShaguns(eventId:number){

        return this.http.get(Config.API_URLS.EVENTS.SHAGUNS+'/'+eventId, {
            headers: this.headers
        })
        .map(function (res) { 
            return res.json(); 
        })
        .catch(function (error) {
            return Observable.throw(error.json());
        });

    }
 

}

  