import { createReducer, on } from '@ngrx/store';

import { retrievedDocumentList } from './documents.action';
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
  on(retrievedDocumentList, (state, { docs }) => docs)
);
