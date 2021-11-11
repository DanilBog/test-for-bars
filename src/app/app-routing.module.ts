import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentsComponent } from './documents/documents.component';
import { EditorComponent } from './editor/editor.component';
import { EditorGuard } from './editor/editor.guard';

const routes: Routes = [
  { path: 'edit/:id', component:  EditorComponent, canActivate: [EditorGuard]},
  { path: '', component:  DocumentsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [EditorGuard],
})
export class AppRoutingModule { }
