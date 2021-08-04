import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ExistsUserService } from './exists-user.service';
import { lowercaseValidator } from './lowercase.validator';
import { NewUser } from './new-user';
import { NewUserService } from './new-user.service';
import { userPasswordEqualsValidator } from './user-password-equals.validator';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  newUserForm!: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private newUserService: NewUserService,
    private existsUserService: ExistsUserService,
    private router: Router,
  ){}

  ngOnInit(): void {
    this.newUserForm = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      fullName: ['', [Validators.required, Validators.minLength(4)]],
      userName: ['', [lowercaseValidator], [this.existsUserService.existUser()]],
      password: [''],
    },
    {
      validators: [userPasswordEqualsValidator]
    }
    );
  }

  register(){
    if(this.newUserForm.valid){
      const newUser = this.newUserForm.getRawValue() as NewUser;

      this. newUserService.registerNewUser(newUser).subscribe(
        ()=> {
          this.router.navigate(['']);
        },
        (error) => {
          console.log(error);
        }
      );
    }

  }

}
