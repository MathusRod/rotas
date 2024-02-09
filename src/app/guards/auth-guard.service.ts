import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { AuthService } from '../login/auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanLoad{
  constructor(
    private authService: AuthService,

    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean>
    | Promise<boolean | UrlTree> {
      console.log("AuthGuard")
      return this.verificarAcesso()
  }

  private verificarAcesso(){
    if (this.authService.usuarioEstaAutenticado()) {
      return true;
    }

    this.router.navigate(['/login']);

    return false;
  }

  canLoad(route: Route): Observable<boolean> | Promise<boolean> |boolean {
      console.log("canLoad: verificando se o usuário está autenticado")
      return this.verificarAcesso()
  }
}
