import { Injectable } from '@angular/core';
import { RegisterUser } from '../models/register-user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from '../models/token';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { UserInfo } from '../models/user-info';
import { APIURL } from '../../environments/environment.prod';

const Api_Url = 'https://thepack.azurewebsites.net';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userInfo: Token;
  isLoggedIn = new Subject<boolean>();
  constructor(private http: HttpClient, private router: Router) { }
  register(regUserData: RegisterUser) {
    return this.http.post(`${APIURL}/api/Account/Register`, regUserData)
  }
  login(loginInfo) {
    const authString =
      `grant_type=password&username=${encodeURI(loginInfo.email)}&password=${encodeURI(loginInfo.password)}`
    return this.http.post(`${APIURL}/token`, authString).subscribe((token: Token) => {
      localStorage.setItem('id_token', token.access_token);
      this.currentUser().subscribe((_userInfo: UserInfo) => {
        console.log(_userInfo)
        localStorage.setItem('role', _userInfo.Role);
        localStorage.setItem('UserID', _userInfo.UserID);
        this.router.navigate([`profile/get-profile/${_userInfo.UserID}`]).then(() => {window.location.reload()});
        this.isLoggedIn.next(true);
      });
      // console.log(token);
      // this.isLoggedIn.next(true);
      // this.http.get(`${Api_Url}/api/Account/UserInfo`, { headers: this.setHeaders() }).subscribe((info: any) => {
      //   console.log(info);
      //   this.router.navigate([`profile/get-profile/${info.UserID}`]);
      // });
    });
  }
  currentUser(): Observable<Object> {
    if (!localStorage.getItem('id_token')) {
      return new Observable(observer => observer.next(false));
    }
    const authHeader = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
    return this.http.get(`${APIURL}/api/Account/UserInfo`, { headers: authHeader });
  }
  logout() {
    localStorage.clear();
    this.isLoggedIn.next(false);
    this.http.post(`${APIURL}/api/Account/Logout`, { header: this.setHeaders() });
    this.router.navigate(['/login']).then(() => {window.location.reload()});
  }
  private setHeaders(): HttpHeaders {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}