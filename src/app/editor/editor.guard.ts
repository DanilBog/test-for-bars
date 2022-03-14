import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { DocumentsService } from '../documents/documents.service';
import { currentUser } from '../state/currentUser.selector';
import { checkAuthorById, selectDoc } from '../state/documents.selectors';

@Injectable({
  providedIn: 'root'
})
export class EditorGuard implements CanActivate {
  constructor(
    private documentService: DocumentsService,
    private store: Store ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.store.select(currentUser).pipe(
        switchMap(user => {
          if (user.login) {
            if (route.params.id === '0') {
              return of(true) ;
            } else {  // здесь нужно сделать еще один запрос, он вернет Observable<boolean>
              return this.store.select(checkAuthorById({author: user.login, id: Number(route.params.id)}));
            }
          } else {
            return of(false);
          }
        })
      );
  }
}
