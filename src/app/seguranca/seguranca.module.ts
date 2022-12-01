import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JwtModule, JwtHelperService } from '@auth0/angular-jwt';
import { environment } from '../../environments/environment';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { DdfHttpInterceptor } from './ddf-http-interceptor';


export function tokenGetter(): string {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,

    JwtModule.forRoot({
      config: {
        headerName: 'X-Auth-Token',
        authScheme: '',
        tokenGetter,
        whitelistedDomains: environment.whiteListedDomains,
        blacklistedRoutes: environment.blackListedRoutes
      }
    })
  ],
  providers: [
    JwtHelperService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: DdfHttpInterceptor,
      multi: true
    }
  ]
})
export class SegurancaModule { }
