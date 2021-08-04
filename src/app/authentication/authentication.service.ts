import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http'
import { Observable } from 'rxjs';
import { UserService } from './user/user.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient: HttpClient, private userService: UserService) { }

  authenticate(user: string, password: string ): Observable<HttpResponse<any>> {
    return this.httpClient.post('http://localhost:3000/user/login',
      {
        userName: user,
        password: password
      },
      {
        observe: 'response'
      }
    ).pipe(
      tap((res) => {
        const authToken = res.headers.get('x-access-token') ?? 'token';
        this.userService.saveToken(authToken);
      })
    )
  }
}
