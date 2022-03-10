import { createReducer, on } from '@ngrx/store';
import { User } from '../models/user.model';
import { login } from './login.action';

export const initialState: ReadonlyArray<User> = [
  {
    login: 'Danil',
    password: '1234'
  },
  {
    login: 'Alex',
    password: '5678'
  },
];

export const loginReducer = createReducer(
  initialState,
  // on(login, (state, { username, password }) => {
  //   return state.find(user => user.login === username && user.password === password);
  //   }
  // )
);
