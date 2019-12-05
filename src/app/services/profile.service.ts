import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Profile } from '../models/Profile';

const Api_Url = 'https://localhost:44373/'

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  GetProfile(UserID) {
    console.log(UserID)
      return this.http.get(`${Api_Url}/api/Profile?UserID=${UserID}`, {headers: this.getHeaders() });
  }
  GetAllProfiles() {
    return this.http.get(`${Api_Url}/api/Profile`, {headers: this.getHeaders() });
  }

  GetAllProfilesByTeam(TeamID) {
    return this.http.get(`${Api_Url}/api/Profile?TeamID=${TeamID}`, {headers: this.getHeaders() });
  }

  UpdateProfile(ProfileEdit) {
    return this.http.put(`${Api_Url}/api/Profile`, ProfileEdit, {headers: this.getHeaders() });
  }

  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}
