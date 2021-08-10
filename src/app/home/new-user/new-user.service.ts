import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { NewUser } from './new-user';

const API = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class NewUserService {

  constructor(private httpClient: HttpClient) { }


  registerNewUser(newUser: NewUser) {
    return this.httpClient.post(`${API}/user/signup`, newUser);
  }

  checkExistUser(userName: String){
    return this.httpClient.get(`${API}/user/exists/${userName}`)
  }

}
