import { createReducer, on } from '@ngrx/store';
import { addDocument, removeDocument } from './documents.action';

export const initialState: ReadonlyArray<number> = [];

export const documentReducer = createReducer(
  initialState,
  on(removeDocument, (state, { docId }) => state.filter((id) => id !== docId)),
  // on(addDocument, (state, { bookId }) => {
  //   if (state.indexOf(bookId) > -1) return state;

  //   return [...state, bookId];
  // })
);
