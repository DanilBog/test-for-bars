import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Doc } from '../documents/model/document.model';

export const Docs = createFeatureSelector<ReadonlyArray<Doc>>('docs');

export const selectDocumentsState = createFeatureSelector<ReadonlyArray<number>>('documents');

// export const selectDoc = createFeatureSelector<Readonly<Doc>>('doc');

// export const selectFeature = (selectDocs, id: number) => docs.find(item => item.id === id);

/** вернем список документов */
export const selectDocs = createSelector(
  Docs,
  (docs) => {
    return docs;
  }
);

export const selectDoc = (props: { id: number }) => createSelector(
  Docs,
  (docs): Doc => {
    return docs.find(doc => doc.id === props.id);
  }
);

export const selectDocument = createSelector(
  Docs,
  selectDocumentsState,
  (docs, documents) => {
    return documents.map((id) => docs.find((doc) => doc.id === id));
  }
);
