import { User } from '../models/user.model';
import { createSelector, createFeatureSelector } from '@ngrx/store';

export const currentUser = createFeatureSelector<Readonly<User>>('currentUser');

// вернем список пользователей
export const selectCurrentUser = createSelector(
  currentUser,
  (user) => {
    return user;
  }
);
