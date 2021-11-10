import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from './auth.service';
import { User } from './model/user.model';

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
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.sub = this.authService.userName.subscribe(login => this.currentUser = login);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  signIn(): void {
    if (!this.authService.signIn(this.user)) {
      this.error = 'Login or password incorrect';
    } else {
      this.error = '';
    }
  }

  signUp(): void {
    this.authService.signUp(this.user);
  }

  signOut(): void {
    this.authService.userName.next('');
  }


}
