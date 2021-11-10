import { Injectable } from '@angular/core';
import { Doc } from './model/document.model';

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

  constructor() { }

  getDocuments(): Doc[] {
    return this.documents;
  }

  getDocument(id: number): Doc {
    return this.documents.find(item => item.id == id);
  }

  editDocument(document: Document): void {

  }

  addDocument(document: Doc): void {
    this.documents.push(document);
  }

  deleteDocument(id: number): void {
    const index = this.documents.findIndex(item => item.id == id);
    this.documents.splice(index, 1);
  }
}