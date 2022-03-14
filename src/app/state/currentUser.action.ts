import { createAction, props } from '@ngrx/store';
import { User } from '../models/user.model';

export const currentUserIn = createAction(
  '[Login Page] currentUserIn',
  props<{ currentUser: User }>()
);

export const currentUserOut = createAction(
  '[Login Page] currentUserOut'
);

