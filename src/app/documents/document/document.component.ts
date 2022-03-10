import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/auth/auth.service';
import { removeDocument } from 'src/app/state/documents.action';
import { Doc } from '../model/document.model';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})
export class DocumentComponent {

  @Input() document: Doc;

  constructor(private authService: AuthService,
              private store: Store) { }

  deleteDocument(): void {
    if (this.authService.userName.value === this.document.author) {
      this.store.dispatch(removeDocument({docId: this.document.id}));
    }
  }

 }
