import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentsComponent } from './documents/documents.component';
import { EditorComponent } from './editor/editor.component';

const routes: Routes = [
  { path: 'edit/:id', component:  EditorComponent},
  { path: '', component:  DocumentsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
