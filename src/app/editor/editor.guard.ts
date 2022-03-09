import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { DocumentsService } from '../documents/documents.service';
import { selectDoc } from '../state/documents.selectors';

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
      if (this.authService.userName.value) {
        if (route.params.id == 0) {
          return true;
        } else {
          // const document =
          console.log('route.params.id', route.params.id);
          this.store.select(selectDoc({id: route.params.id})).subscribe(document => {
            console.log('docum', document);
            if (document.author === this.authService.userName.value) {
              return true;
            }
            else {
              return false;
            }
          });
        }
      } else {
        return false;
      }
  }
}
