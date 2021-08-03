import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = '';
  password = '';

  constructor(private authService: AuthenticationService) { }

  ngOnInit(): void {
  }

  login(){
    this.authService.authenticate(this.user, this.password).subscribe(
      () => {
        console.log('Autenticado com sucesso!');
      },(error) =>{
        alert("Usuário ou senha inválido");
        console.log(error);
      }
    )
  }

}
