import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Comment, Comments } from './comments';

const API = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http: HttpClient) { }

  searchComments(id: number): Observable<Comments>{
    return this.http.get<Comments>(`${API}/photos/${id}/comments`)
  }

  addComment(id: number, commentText: string): Observable<Comments>{
    return this.http.post<Comments>(`${API}/photos/${id}/comments`, {commentText})
  }
}

