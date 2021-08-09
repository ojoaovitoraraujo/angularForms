import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { UserService } from 'src/app/authentication/user/user.service';
import { Animals } from '../animals';
import { AnimalsService } from '../animals.service';

@Component({
  selector: 'app-animals-list',
  templateUrl: './animals-list.component.html',
  styleUrls: ['./animals-list.component.css']
})
export class AnimalsListComponent implements OnInit {
  animals$ !: Observable<Animals>;

  constructor(private userService: UserService, private animalsService: AnimalsService) { }

  ngOnInit(): void {
    this.animals$ = this.userService.getUser().pipe(
      switchMap((user) => {
        const userName = user.name ?? '';
        return this.animalsService.userList(userName);
      })
    )
  }

}
