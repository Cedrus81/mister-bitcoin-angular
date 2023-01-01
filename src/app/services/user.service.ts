import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }
  private _usersDB =  [{
    name: "Erez Eitan", 
    coins: 100, 
    transactions: [] 
  }]
  private _users$ = new BehaviorSubject<User[]>([])
  public users$ = this._users$.asObservable()

  private _loggedInUser$ = new BehaviorSubject<User>(this._usersDB[0])
  public loggedInUser$ = this._loggedInUser$.asObservable()
  public getUser(): void {
    //! placeholder
    const user = this._loggedInUser$.value
    this._loggedInUser$.next(user)
  }
}
