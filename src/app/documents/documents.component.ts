import { Component, OnInit } from '@angular/core';
import { DocumentsService } from './documents.service';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent implements OnInit {

  documents: any;

  constructor(private documentService: DocumentsService) { }

  ngOnInit(): void {
    this.documents = this.documentService.getDocuments();
  }

}
