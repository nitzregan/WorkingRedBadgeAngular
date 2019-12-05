import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Team } from '../models/team';
import { Observable } from 'rxjs';

const Api_Url = 'https://thepack.azurewebsites.net/';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  constructor(private http: HttpClient) { }
  getTeamByID(TeamID) {
    return this.http.get(`${Api_Url}/api/Team?TeamId=${TeamID}`, { headers: this.getHeaders() });
  }
  getTeamsByUserID(UserID) {
    return this.http.get(`${Api_Url}/api/TeamsByUser?UserID=${UserID}`, { headers: this.getHeaders() });
  }
  createTeam(team: Team, ProfileID) {
    return this.http.post(`${Api_Url}/api/Team?ProfileID=${ProfileID}`, team, { headers: this.getHeaders() });
  }
  addAthleteToRoster(ProfileID, TeamID) {
    return this.http.put(`${Api_Url}/api/AddPlayer?ProfileID=${ProfileID}&TeamID=${TeamID}`,{ headers: this.getHeaders() });
  }
  removeAthleteFromRoster(ProfileID, TeamID) {
    return this.http.put(`${Api_Url}/api/RemovePlayer?ProfileID=${ProfileID}&TeamID=${TeamID}`, { headers: this.getHeaders() });
  }
  updateTeam(team: Team) {
    return this.http.put(`${Api_Url}/api/Team`, team, { headers: this.getHeaders() });
  }
  deleteTeam(TeamID) {
    return this.http.delete(`${Api_Url}/api/Team?TeamId=${TeamID}`, { headers: this.getHeaders() });
  }
  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}

