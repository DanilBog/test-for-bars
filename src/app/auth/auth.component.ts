import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from './auth.service';
import { User } from '../models/user.model';

import { Store } from '@ngrx/store';
import { login } from '../state/login.action';
import { selectUser } from '../state/login.selectors';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})

export class AuthComponent implements OnInit, OnDestroy {

  user: User = {
    login: '',
    password: '',
  };

  currentUser: string;
  sub: Subscription;
  error: string;
  constructor(
    private authService: AuthService,
    private router: Router,
    private store: Store)
  { }

  ngOnInit(): void {
    this.sub = this.authService.userName.subscribe(login => this.currentUser = login);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  signIn(): void {
    // if (!this.authService.signIn(this.user)) {
    //   this.error = 'Login or password incorrect';
    // } else {
    //   this.error = '';
    // }

    this.store.select(selectUser({user: this.user})).subscribe(user => {
      if (!user) {
        this.error = 'Login or password incorrect';
      } else {
        this.error = '';
        this.authService.userName.next(user.login);
      }
    });
  }

  signUp(): void {
    if (this.user.login.length < 4 || this.user.password.length < 4) {
      this.error = 'Login and password length must be more than 4 symbols';
      return;
    }
    // this.authService.signUp(this.user);
    this.store.dispatch(login({ user: this.user }));
    this.error = 'You are registred, now SignIn';
  }

  signOut(): void {
    this.authService.userName.next('');
    this.router.navigate(['/']);
  }

  // for store
  // onSubmit(username: string, password: string): void {
  //   this.store.dispatch(login({ user: this.user }));
  // }


}
