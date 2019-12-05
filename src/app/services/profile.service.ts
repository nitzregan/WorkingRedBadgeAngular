import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Profile } from '../models/Profile';
import { APIURL } from '../../environments/environment.prod';

const Api_Url = 'https://thepack.azurewebsites.net'

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  GetProfile(UserID) {
    console.log(UserID)
      return this.http.get(`${APIURL}/api/Profile?UserID=${UserID}`, {headers: this.getHeaders() });
  }
  GetAllProfiles() {
    return this.http.get(`${APIURL}/api/Profile`, {headers: this.getHeaders() });
  }

  GetAllProfilesByTeam(TeamID) {
    return this.http.get(`${APIURL}/api/Profile?TeamID=${TeamID}`, {headers: this.getHeaders() });
  }

  UpdateProfile(ProfileEdit) {
    return this.http.put(`${APIURL}/api/Profile`, ProfileEdit, {headers: this.getHeaders() });
  }

  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}
