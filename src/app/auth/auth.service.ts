import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from './model/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  users: User[] = [
    {
      login: 'Danil',
      password: '1234'
    },
    {
      login: 'Alex',
      password: '5678'
    },
  ];

  userName = new BehaviorSubject('');

  constructor() { }

  signIn(user: User): boolean {
    const currentUser = this.users.find(item => item.login == user.login && item.password == user.password);
    if (currentUser) {
      this.userName.next(currentUser.login);
      return true;
    }
    else {
      return false;
    }
  }

  signUp(user: User): void {
    this.users.push(user);
    this.userName.next(user.login);
    console.log('users', this.users);
  }
}
