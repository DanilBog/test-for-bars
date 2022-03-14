import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { DocumentsService } from '../documents/documents.service';
import { checkAuthorById, selectDoc } from '../state/documents.selectors';

@Injectable({
  providedIn: 'root'
})
export class EditorGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private documentService: DocumentsService,
    private store: Store ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      // console.log('login', this.authService.userName.value);
      // const id: number = Number(route.params.id);
      // const id: number = route.params.id;
      // console.log('id', id, 'type', typeof(id));
      if (this.authService.userName.value) {
        if (route.params.id === '0') {
          return true;
        } else {
          return this.store.select(checkAuthorById({author: this.authService.userName.value, id: Number(route.params.id)}));
        }
      } else {
        return false;
      }
  }
}