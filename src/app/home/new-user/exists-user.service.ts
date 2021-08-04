import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { NewUserService } from './new-user.service';
import { first, map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ExistsUserService {

  constructor(private newUserService: NewUserService) { }

  existUser(){
    return(control: AbstractControl) => {
      return control.valueChanges.pipe(
        switchMap((userName) => this.newUserService.checkExistUser(userName)),
        map((existUser) => (existUser ? {existUser: true} : null)),
        first()
      );
    }
  }
}
