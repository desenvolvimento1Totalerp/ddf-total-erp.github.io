import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from '../../environments/environment.prod';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  urlAuth: string;
  urlCallback: string;
  urlGateway: string;
  jwtPayload: any;

  constructor(
    private http: HttpClient,
    private jwtHelperService: JwtHelperService
  ) {
    this.urlAuth = `${environment.urlAuth}/oauth`;
    this.urlCallback = `${environment.urlCallback}/dashboard`;
    this.urlGateway = `${environment.urlGateway}/oauth`;
    this.carregarToken();
  }

  redirectLogin(): void {
    // tslint:disable-next-line: max-line-length
    window.location.replace(`${this.urlAuth}/authorize?client_id=${environment.userClient}&response_type=code&redirect_uri=${this.urlCallback}`);
  }

  gerarToken(code: string): Promise<void> {
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/x-www-form-urlencoded')
      .append('Accept', 'application/json')
      .append('Authorization', `Basic ${btoa(environment.userClient + ':' + environment.passwordClient)}`);

    const body = `grant_type=authorization_code&redirect_uri=${this.urlCallback}&scope=read&code=${code}`;

    return this.http.post(`${this.urlGateway}/token`, body, { headers })
      .toPromise()
      .then((response: { access_token: string }) => {
        this.armazenarToken(response.access_token);
        window.location.replace(`${this.urlCallback}`);
      })
      .catch(error => {
        return Promise.reject(error);
      });
  }

  /*obterTokenDeprecate(): Promise<void> {
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/json; charset=utf-8');

    return this.http.post(this.url, { username: 'ddf', password: 'oTqhLmuN' }, { headers })
      .toPromise()
      .then((response: { token: string }) => {
        this.armazenarToken(response.token);
      })
      .catch(response => {
        return Promise.reject(response);
      });
  }*/

  isAccessTokenInvalid() {
    const token = localStorage.getItem('token');

    return !token || this.jwtHelperService.isTokenExpired(token);
  }

  private armazenarToken(token: string) {
    this.jwtPayload = this.jwtHelperService.decodeToken(token);
    localStorage.setItem('token', token);
  }

  private carregarToken() {
    const token = localStorage.getItem('token');

    if (token) {
      this.armazenarToken(token);
    }
  }

  limparAccessToken(): void {
    localStorage.removeItem('token');
    this.jwtPayload = null;
  }

  logout(): void {
    this.limparAccessToken();
    window.location.replace(`${environment.urlAuth}/logout?redirect_uri=${this.urlCallback}`);
  }
}
