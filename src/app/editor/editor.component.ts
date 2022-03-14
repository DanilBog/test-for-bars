import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Doc } from '../documents/model/document.model';
import { addDocument, updateDocument } from '../state/documents.action';
import { getMaxDocId, selectDoc } from '../state/documents.selectors';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit, OnDestroy {

  document: Doc = {
    title: '',
    date: new Date().toLocaleDateString(),
    id: null,
    note: '',
    author: '',
  };
  id: number;
  message = '';
  private subscription: Subscription;
  private sub: Subscription;
  private subStore: Subscription;

  constructor(
    private activateRoute: ActivatedRoute,
    private router: Router,
    private store: Store
  )
  {
    this.subscription = activateRoute.params.subscribe(params => this.id = Number(params.id));
  }

  ngOnInit(): void {
    if (this.id !== 0) {
      this.subStore = this.store.select(selectDoc({id: this.id})).subscribe(doc => this.document = {... doc} );
    } else {
      this.subStore = this.store.select(getMaxDocId).pipe(
        map(maxId => {
          if (maxId !== this.document.id) {
            this.document.id = maxId;
          }
        })
      ).subscribe();
    }
  }

  ngOnDestroy(): void {
    this.subStore.unsubscribe();
    this.subscription.unsubscribe();
  }

  update(): void {
    this.message = '';
  }

  edit(): void {
    if (this.validate()) {
    this.message = 'Document has been edit';
    this.store.dispatch(updateDocument({document: this.document}));
    }
  }

  add(): void{
    if (this.validate()) {
      this.store.dispatch(addDocument({document: this.document}));
      this.router.navigate(['/']);
    //   this.message = 'Document added';
    //   setTimeout(() => {
    //     this.router.navigate(['/']);
    //   }, 1000);
    }
  }

  validate(): boolean {
    if (  this.document.id === 0 ||
          this.document.date === '' ||
          this.document.title === '' ||
          this.document.note === '') {
      this.message = 'Fields cannot be empty and Num cannot be 0';
      return false;
    }
    return true;
  }

}
