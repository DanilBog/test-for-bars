import { createReducer, on } from '@ngrx/store';
import { User } from '../auth/model/user.model';

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
  initialState
);
