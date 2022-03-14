import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { currentUser } from 'src/app/state/currentUser.selector';
import { removeDocument } from 'src/app/state/documents.action';
import { Doc } from '../model/document.model';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})
export class DocumentComponent {

  @Input() document: Doc;

  constructor(private store: Store) { }

  deleteDocument(): void {
    this.store.select(currentUser).subscribe(user => {
      if (user.login === this.document.author) {
        this.store.dispatch(removeDocument({docId: this.document.id}));
      }
    });
  }

 }
