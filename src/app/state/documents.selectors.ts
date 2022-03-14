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

/** вернем документ */
export const selectDoc = (props: { id: number }) => createSelector(
  Docs,
  (docs): Doc => {
    // tslint:disable-next-line:triple-equals
    return docs.find(doc => doc.id == props.id);
  }
);

/** проверим автора по id */
export const checkAuthorById = (props: { id: number, author: string }) => createSelector(
  Docs,
  (docs) => {
    return docs.some(d => d.author === props.author && d.id === props.id);
  }
);

/** вернем максимальный id */
export const getMaxDocId = createSelector(
  Docs,
  (docs): number => {
    let maxId = 0;
    docs.forEach((item: Doc) => {
      if (maxId < item.id) {
        maxId = item.id;
      }
    });
    return maxId;
  }
);


export const selectDocument = createSelector(
  Docs,
  selectDocumentsState,
  (docs, documents) => {
    return documents.map((id) => docs.find((doc) => doc.id === id));
  }
);
