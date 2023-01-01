import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'mister-bitcoin';
  constructor(private userService: UserService){}
  // user$!: Observable<User>
  user!: User
  subscription!: Subscription

  ngOnInit(): void{
    // this.userService.getUser()
    // this.user$ = this.userService.loggedInUser$
    // console.log(this.user$);
    this.subscription = this.userService.loggedInUser$.subscribe(user => {
            this.user = user
        })
    
  }
}
