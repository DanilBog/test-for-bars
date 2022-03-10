import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { DocumentsService } from '../documents/documents.service';
import { Doc } from '../documents/model/document.model';
import { addDocument } from '../state/documents.action';
import { selectDoc } from '../state/documents.selectors';

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

  constructor(
    private documentService: DocumentsService,
    private activateRoute: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private store: Store
  )
  {
    this.subscription = activateRoute.params.subscribe(params => this.id = params.id);
  }

  ngOnInit(): void {
    this.sub = this.authService.userName.subscribe(login => this.document.author = login);
    if (this.id != 0) {
      this.store.select(selectDoc({id: this.id})).subscribe(doc => {console.log('doc', doc); this.document = doc; });
    } else {
      this.document.id = 1 + this.documentService.getNumberOfDocument();
    }
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  update(): void {
    this.message = '';
  }

  edit(): void {
    if (this.validate()) {
    this.message = 'Document has been edit';
    }
  }

  add(): void{
    if (this.validate()) {
    //  this.documentService.addDocument(this.document);
      this.store.dispatch(addDocument({document: this.document}));
      this.message = 'Document added';
      setTimeout(() => {
        this.router.navigate(['/']);
      }, 1000);
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
