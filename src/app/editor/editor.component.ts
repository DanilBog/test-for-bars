import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DocumentsService } from '../documents/documents.service';
import { Document } from '../shared/model/document.model';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

  document: Document;
  id: number;
  private subscription: Subscription;

  constructor(
    private documentService: DocumentsService,
    private activateRoute: ActivatedRoute,
    private router: Router,
  )
  {
    this.subscription = activateRoute.params.subscribe(params => this.id = params.id);
  }

  ngOnInit(): void {
    if (this.id == 0) {
      this.document = {
        title: 'Title',
        date: 'Date',
        id: 0,
        note: 'Note',
        author: 'Author',
      };
      console.log(this.document);
    } else {
      this.document = this.documentService.getDocument(this.id);
    }
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
