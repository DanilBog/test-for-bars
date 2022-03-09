import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DocumentsModule } from './documents/documents.module';
import { EditorComponent } from './editor/editor.component';
import { FormsModule } from '@angular/forms';
import { AuthComponent } from './auth/auth.component';
import { StoreModule } from '@ngrx/store';
import { documentsReducer } from '../app/state/documents.reducer';
import { documentReducer } from '../app/state/document.reducer';
import { loginReducer } from './state/login.reducer';



@NgModule({
  declarations: [
    AppComponent,
    EditorComponent,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DocumentsModule,
    FormsModule,
    StoreModule.forRoot({ docs: documentsReducer, document: documentReducer, users: loginReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
