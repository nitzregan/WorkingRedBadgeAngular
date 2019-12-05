import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TeamMessaging } from '../models/team-messaging';
import { Observable } from 'rxjs';

const Api_Url = 'https://thepack.azurewebsites.net'

@Injectable({
  providedIn: 'root'
})
export class TeamMessagingService {
  constructor(private http: HttpClient) { }
  getTeamMessageByID(MessageID) {
    return this.http.get(`${Api_Url}/api/TeamMessaging?messageId=${MessageID}`, { headers: this.getHeaders() });
  }
  getTeamMessages(TeamID) {
    return this.http.get(`${Api_Url}/api/TeamMessaging?TeamID=${TeamID}`, { headers: this.getHeaders() });
  }
  createTeamMessage(teamMessage: TeamMessaging, TeamID) {
    return this.http.post(`${Api_Url}/api/TeamMessaging?TeamID=${TeamID}`, teamMessage, { headers: this.getHeaders() });
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
