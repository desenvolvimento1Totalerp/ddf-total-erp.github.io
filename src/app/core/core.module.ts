import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada.component';
import { NaoAutorizadoComponent } from './nao-autorizado.component';
import { ErrorHandlerService } from './error-handler.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from '../seguranca/auth.service';
import { MessageService } from 'primeng/api';
import { RouterModule } from '@angular/router';

import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    NavbarComponent,
    PaginaNaoEncontradaComponent,
    NaoAutorizadoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ButtonModule
  ],
  exports: [
    NavbarComponent
  ],
  providers: [
    ErrorHandlerService,
    JwtHelperService,
    AuthService,
    MessageService
  ]
})
export class CoreModule { }
