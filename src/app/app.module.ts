import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ToastModule } from 'primeng/toast';

import { AppComponent } from './app.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';

import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { DdfComponent } from './ddf/ddf.component';
import { SegurancaModule } from './seguranca/seguranca.module';
import { DocumentosFiscaisModule } from './documentos-fiscais/documentos-fiscais.module';
import { HttpClientModule } from '@angular/common/http';
import { QuartzModule } from './quartz/quartz.module';
import { DbModule } from './db/db.module';

registerLocaleData(ptBr);

@NgModule({
  declarations: [
    AppComponent,
    DdfComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,

    ToastModule,

    CoreModule,
    SegurancaModule,
    DocumentosFiscaisModule,
    QuartzModule,
    DbModule,
    AppRoutingModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
