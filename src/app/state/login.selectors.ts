import { User } from '../models/user.model';
import { createSelector, createFeatureSelector } from '@ngrx/store';

export const Users = createFeatureSelector<ReadonlyArray<User>>('users');

// вернем список пользователей
export const selectUsers = createSelector(
  Users,
  (users) => {
    return users;
  }
);

export const selectUser = (props: { user: User }) => createSelector(
  Users,
  (users) => {
    return users.find(user => user.login === props.user.login && user.password === props.user.password);
  }
);
