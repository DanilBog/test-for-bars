import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentsComponent } from './documents.component';
import { DocumentComponent } from '../document/document.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    DocumentsComponent,
    DocumentComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    DocumentsComponent,
  ]
})
export class DocumentsModule { }
