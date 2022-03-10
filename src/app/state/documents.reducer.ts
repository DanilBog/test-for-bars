import { createReducer, on } from '@ngrx/store';

import { removeDocument, addDocument } from './documents.action';
import { Doc } from '../documents/model/document.model';

export const initialState: ReadonlyArray<Doc> = [
  {
    title: 'Document 1',
    date: '01.11.21',
    id: 1,
    note: ' The first document',
    author: 'Danil'
  },
  {
    title: 'Document 2',
    date: '07.11.21',
    id: 2,
    note: ' The second document',
    author: 'Alex'
  },
];

export const documentsReducer = createReducer(
  initialState,
  on(removeDocument, (state, { docId }) => {
    return state.filter(doc => doc.id !== docId);
  }),
  on(addDocument, (state, { document }) => {
    return [ ... state, document ];
  })
);
