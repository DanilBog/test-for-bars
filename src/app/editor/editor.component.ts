import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { DocumentsService } from '../documents/documents.service';
import { Doc } from '../documents/model/document.model';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit, OnDestroy {

  document: Doc = {
    title: 'Title',
    date: 'Date',
    id: 0,
    note: 'Note',
    author: 'Author',
  };
  id: number;
  private subscription: Subscription;
  private sub: Subscription;

  constructor(
    private documentService: DocumentsService,
    private activateRoute: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  )
  {
    this.subscription = activateRoute.params.subscribe(params => this.id = params.id);
  }

  ngOnInit(): void {
    this.sub = this.authService.userName.subscribe(login => this.document.author = login);

    if (this.id != 0) {
      this.document = this.documentService.getDocument(this.id);
    }

  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  edit(): void {
    console.log('title', this.document.title);
    console.log('note', this.document.note);
  }

  add(): void{
    this.documentService.addDocument(this.document);
    this.router.navigate(['/']);
  }

}
