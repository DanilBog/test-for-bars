import { createAction, props } from '@ngrx/store';
import { Doc } from '../documents/model/document.model';


export const addDocument = createAction(
  '[Document List] Add Document',
  props<{ docId: number }>()
);

export const removeDocument = createAction(
  '[Document Collection] Remove Document',
  props<{ docId: number }>()
);

export const retrievedDocumentList = createAction(
  '[Document List/API] Retrieve Documents Success',
  props<{ docs: ReadonlyArray<Doc> }>()
);
