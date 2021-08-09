import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

const API = environment.apiUrl;

export interface Comments {
  date: Date;
  text: string;
  userName: string;
}

export class CommentsService{

  constructor(private http: HttpClient) { }

  searchComments(id: number): Observable<Comments>{
    return this.http.get<Comments>(`${API}/photos/${id}/comments`)
  }

  addComment(id: number, commentText: string): Observable<Comments>{
    return this.http.post<Comments>(`${API}/photos/${id}/comments`, {commentText})
  }

}
