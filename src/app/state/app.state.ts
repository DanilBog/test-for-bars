import { Doc } from 'src/app/documents/model/document.model';

export interface AppState {
  documents: ReadonlyArray<Doc>;
  collection: ReadonlyArray<string>;
}
