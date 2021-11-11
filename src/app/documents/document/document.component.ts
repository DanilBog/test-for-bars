import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { DocumentsService } from '../documents.service';
import { Doc } from '../model/document.model';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})
export class DocumentComponent implements OnInit {

  @Input() document: Doc;
//  @Output() id = new EventEmitter<number>();

  constructor(private documentService: DocumentsService,
              private authService: AuthService) { }

  ngOnInit(): void {
  }

  deleteDocument(): void {
    if (this.authService.userName.value == this.document.author) {
      this.documentService.deleteDocument(this.document.id);
    }
  }
 }
