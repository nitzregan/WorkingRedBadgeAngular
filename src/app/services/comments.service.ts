import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Comments } from '../models/comments';
import { Observable } from 'rxjs';
import { APIURL } from '../../environments/environment.prod';

const Api_Url = 'https://thepack.azurewebsites.net'

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  constructor(private http: HttpClient) { }
  getCommentsByID(CommentID) {
    return this.http.get(`${APIURL}/api/Comment?CommentID=${CommentID}`, { headers: this.getHeaders() });
  }
  getCommentsByProfile(ProfileID) {
    return this.http.get(`${APIURL}/api/Comment?ProfileID=${ProfileID}`, { headers: this.getHeaders() });
  }
  createComment(comments: Comments, ProfileID) {
    return this.http.post(`${APIURL}/api/Comment?ProfileID=${ProfileID}`, comments, { headers: this.getHeaders() });
  }
  deleteComment(CommentID) {
    return this.http.delete(`${APIURL}/api/Comment?CommentID=${CommentID}`, { headers: this.getHeaders() });
  }
  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}