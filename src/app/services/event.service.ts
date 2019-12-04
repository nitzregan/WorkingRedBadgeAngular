import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Event } from '../models/Event';
import { Observable } from 'rxjs';
const Api_Url= 'https://thepack.azurewebsites.net/'
@Injectable({
  providedIn: 'root'
})
export class EventService {
  constructor(private http: HttpClient) { }
  getEvents(teamID) {
    return this.http.get(`${Api_Url}/api/event?TeamID=${teamID}`, { headers: this.getHeaders() });
  }
  CreateEvent(event: Event){
    return this.http.post(`${Api_Url}/api/event`, event, {headers: this.getHeaders() });
  }
  EditEvent(event: Event){
    return this.http.put(`${Api_Url}/api/event`, event, {headers: this.getHeaders() });
  }
  EventDetail(EventID, TeamID) :Observable<Event>{
    return this.http.get(`${Api_Url}/api/Event?EventID=${EventID}&TeamID=${TeamID}`, {headers: this.getHeaders() });
  }
  DeleteEvent(EventID){
    return this.http.delete(`${Api_Url}/api/Event?EventID=${EventID}`, {headers: this.getHeaders() });
  }
  
  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}