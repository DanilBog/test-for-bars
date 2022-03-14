import { createAction, props } from '@ngrx/store';
import { User } from '../models/user.model';

export const signIn = createAction(
  '[Login Page] Login',
  props<{ user: User }>()
);

export const signUp = createAction(
  '[Login Page] Login',
  props<{ user: User }>()
);
