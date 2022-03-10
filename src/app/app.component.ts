import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectDocument, selectDocumentsState, selectDocs, selectDoc } from './state/documents.selectors';
import { selectUsers } from './state/login.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'bars';

  constructor(private store: Store) {}


  ngOnInit(): void {
    this.store.select(selectDocumentsState).subscribe(item => console.log('selectDocumentsState', item));
    this.store.select(selectDocs).subscribe(item => console.log('selectDocs', item));
    this.store.select(selectDocs).subscribe(item => console.log('selectDocs', item));
    this.store.select(selectUsers).subscribe(users => console.log('selectUsers', users));
    this.store.select(selectDoc({id: 1})).subscribe(doc => console.log('doc', doc));
    const a = 5;
    const b = '5';
    if (a.toString() === b) { console.log('eq'); }
  }
}
