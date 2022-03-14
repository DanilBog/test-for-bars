import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { User } from '../models/user.model';
import { Store } from '@ngrx/store';
import { signUp } from '../state/login.action';
import { selectUser } from '../state/login.selectors';
import { currentUserIn, currentUserOut } from '../state/currentUser.action';
import { currentUser } from '../state/currentUser.selector';
import { map } from 'rxjs/operators';

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

  currentUser$: Observable<string>;
  sub: Subscription;
  error: string;
  constructor(
    private router: Router,
    private store: Store)
  { }

  ngOnInit(): void {
    this.currentUser$ = this.store.select(currentUser).pipe(
      map(user => user.login)
    );
  }

  ngOnDestroy(): void {
  //  this.sub.unsubscribe();
  }

  signIn(): void {
    this.store.select(selectUser({user: this.user})).subscribe(user => {
      if (!user) {
        this.error = 'Login or password incorrect';
      } else {
        this.error = '';
        this.store.dispatch(currentUserIn({currentUser: user}));
      }
    });
  }

  signUp(): void {
    if (this.user.login.length < 4 || this.user.password.length < 4) {
      this.error = 'Login and password length must be more than 4 symbols';
      return;
    }
    this.store.dispatch(signUp({ user: this.user }));
    this.error = 'You are registred, now SignIn';
  }

  signOut(): void {
    this.store.dispatch(currentUserOut());
    this.router.navigate(['/']);
  }
}
