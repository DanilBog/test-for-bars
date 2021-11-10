import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DocumentsService } from '../documents/documents.service';
import { Document } from '../shared/model/document.model';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})
export class DocumentComponent implements OnInit {

  @Input() document: Document;
//  @Output() id = new EventEmitter<number>();

  constructor(private documentService: DocumentsService) { }

  ngOnInit(): void {
  }

  deleteDocument(): void {
  //  this.id.emit(this.document.id);
    this.documentService.deleteDocument(this.document.id);
  }
 }
