import { Injectable } from '@angular/core';
import { BehaviorSubject, concatAll, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { Contact } from '../models/contact.model';
const USERS_DB = 'users'
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {

  }
  getusers(): User[] {
    const users = localStorage.getItem(USERS_DB)
    return users ? JSON.parse(users) : [{_id: 'u101',name: "Erez Eitan", coins: 100, transactions: []  }]
  }

  private _users$ = new BehaviorSubject<User[]>([])
  public users$ = this._users$.asObservable()

  private _loggedInUser$ = new BehaviorSubject<User>(this.getusers()[0])
  public loggedInUser$ = this._loggedInUser$.asObservable()
  
  public loadUsers(){
    const users = this.getusers()
    this._users$.next(users)
  }
  
  public login(name:string){
    const user = this.getusers().find(user => user.name === name)
    if(!user){
      throw new Error(`User ${name} not found`)
    }
    this._loggedInUser$.next(user)
  }
  public signup(name:string){
    const user = this._getNewUser(name)
    this.getusers().push(user)
    this._saveUser(user)
    this._loggedInUser$.next(user)
  }

  private _saveUser(user: User) {
    const users = this.getusers()
    users.push(user)
    localStorage.setItem(USERS_DB, JSON.stringify(users))
  }
  public addTransaction(contact: Contact, amount:number):void {
    if (amount > this._loggedInUser$.value.coins) throw new Error(`Insufficient funds`)
    this._loggedInUser$.value.transactions.push({
      toId: contact._id || '',
      to: contact.name,
      at: Date.now(),
      amount
    })

  }

  // private _updateUser(){
    // this._usersDB = this._usersDB.filter(user => user._id !== this._loggedInUser$.value._id)
    // this._usersDB.push(this._loggedInUser$.val)
  // }

  private _getNewUser(name:string){
    return {
      _id: this._makeId(),
       name,
      coins: 100,
      transactions: []
    }
  }

  private _makeId(length = 6) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return txt;
}
}
