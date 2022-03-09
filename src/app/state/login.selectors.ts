import { User } from '../auth/model/user.model';
import { createSelector, createFeatureSelector } from '@ngrx/store';

export const Users = createFeatureSelector<ReadonlyArray<User>>('users');

// вернем список пользователей
export const selectUsers = createSelector(
  Users,
  (users) => {
    return users;
  }
);
