import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NewUser } from './new-user';

@Injectable({
  providedIn: 'root'
})
export class NewUserService {

  constructor(private httpClient: HttpClient) { }


  registerNewUser(newUser: NewUser) {
    return this.httpClient.post('http://localhost:3000/user/singup', newUser);
  }

}
