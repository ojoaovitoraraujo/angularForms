import { Injectable } from '@angular/core';
import { TokenService } from '../token.service';
import { User } from './user';
import jwt_decode from 'jwt-decode';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private subjectUser = new BehaviorSubject<User>({});

  constructor(private tokenService: TokenService) {
    if(this.tokenService.haveToken()){
      this.decodeJWT();
    }
  }

  private decodeJWT(){
    const token = this.tokenService.getToken();
    const user = jwt_decode(token) as User;
    this.subjectUser.next(user);
  }

  getUser() {
    return this.subjectUser.asObservable();
  }

  saveToken(token:string){
    this.tokenService.saveToken(token);
    this.decodeJWT();
  }

  logout(){
    this.tokenService.deleteToke();
    this.subjectUser.next({});
  }

  isLoggedIn(){
    return this.tokenService.haveToken;
  }
}

