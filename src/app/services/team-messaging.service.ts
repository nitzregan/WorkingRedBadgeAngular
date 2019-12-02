import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TeamMessaging } from '../models/team-messaging';
import { Observable } from 'rxjs';

const Api_Url = 'https://localhost:44373/'

@Injectable({
  providedIn: 'root'
})
export class TeamMessagingService {

  constructor(private http: HttpClient) { }

  getTeamMessageByID(MessageID) {
    return this.http.get(`${Api_Url}/api/TeamMessaging?MessageID=${MessageID}`, { headers: this.getHeaders() });
  }

  getTeamMessages() {
    return this.http.get(`${Api_Url}/api/TeamMessaging`, { headers: this.getHeaders() });
  }

  createTeamMessage(teamMessage: TeamMessaging) {
    return this.http.post(`${Api_Url}/api/TeamMessaging`, teamMessage, { headers: this.getHeaders() });
  }

  updateTeamMessage(teamMessage: TeamMessaging) {
    return this.http.put(`${Api_Url}/api/TeamMessaging`, teamMessage, { headers: this.getHeaders() });
  }

  deleteTeamMessage(MessageID) {
    return this.http.delete(`${Api_Url}/api/TeamMessaging?MessageID=${MessageID}`, { headers: this.getHeaders() });
  }

  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}
