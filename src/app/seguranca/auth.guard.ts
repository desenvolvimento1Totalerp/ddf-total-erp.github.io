import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (route.queryParamMap.has('code')) {
      this.auth.gerarToken(route.queryParamMap.get('code').valueOf()).then(() => {
        this.validarToken();
      });
    } else {
      this.validarToken();
    }

    return true;
  }

  private validarToken() {
    if (this.auth.isAccessTokenInvalid()) {
      console.log('Navegação com access token inválido. Obtendo novo token...');
      this.auth.redirectLogin();
    }
  }
}
