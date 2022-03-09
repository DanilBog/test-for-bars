import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Doc } from '../documents/model/document.model';

export const selectDocs = createFeatureSelector<ReadonlyArray<Doc>>('docs');

export const selectDocumentsState = createFeatureSelector<
  ReadonlyArray<number>>('documents');

export const selectDocumentCollection = createSelector(
  selectDocs,
  selectDocumentsState,
  (docs, documents) => {
    return documents.map((id) => docs.find((doc) => doc.id === id));
  }
);
