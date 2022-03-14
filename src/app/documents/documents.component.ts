import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectDocs } from '../state/documents.selectors';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent implements OnInit {

  documents: any;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.documents = this.store.select(selectDocs);
  }

}
