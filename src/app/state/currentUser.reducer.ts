import { createReducer, on } from '@ngrx/store';
import { User } from '../models/user.model';
import { currentUserIn, currentUserOut } from './currentUser.action';

export const initialState: Readonly<User> = {
  login: undefined,
  password: undefined
};

export const currentUsesReducer = createReducer(
  initialState,
  on(currentUserIn, (state, { currentUser }) => {
    return currentUser;
    }
  ),
  on(currentUserOut, (state) => {
    return  { login: undefined,
              password: undefined};
    }
  )
);
