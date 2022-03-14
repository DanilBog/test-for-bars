import { Injectable } from '@angular/core';
import { Doc } from './model/document.model';
import { Store } from '@ngrx/store';
import { selectDocument, selectDocs, selectDoc } from '../state/documents.selectors';
import {
  retrievedDocumentList,
  addDocument,
  removeDocument,
} from '../state/documents.action';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DocumentsService {

  documents: Doc[] = [
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

  constructor(private store: Store) { }

  getDocuments(): Observable<readonly Doc[]> {
    return this.store.select(selectDocs);
  }

  // getDocument(id: number): Observable<Doc> {
  //   return this.store.select(selectDoc({id}));
  // }

  // getNumberOfDocument(): number {
  //   let maxId = 0;
  //   this.documents.forEach((item: Doc) => {
  //     if (maxId < item.id) {
  //       maxId = item.id;
  //     }
  //   });
  //   return maxId;
  // }

  // deleteDocument(id: number): void {
  //   const index = this.documents.findIndex(item => item.id === id);
  //   this.documents.splice(index, 1);
  // }
}
