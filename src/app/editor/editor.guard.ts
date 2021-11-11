import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { DocumentsService } from '../documents/documents.service';

@Injectable({
  providedIn: 'root'
})
export class EditorGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private documentService: DocumentsService ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.authService.userName.value) {
        if (route.params.id == 0) {
          return true;
        } else {
          const document = this.documentService.getDocument(route.params.id);
          if (document.author == this.authService.userName.value) {
            return true;
          }
          else {
            return false;
          }
        }
      } else {
        return false;
      }
  }
}
