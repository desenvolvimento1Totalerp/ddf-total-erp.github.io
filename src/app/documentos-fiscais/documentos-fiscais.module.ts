import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NfeComponent } from './nfe/nfe.component';

import { PanelModule } from 'primeng/panel';
import { ScrollPanelModule } from 'primeng/scrollpanel';

import { CteComponent } from './cte/cte.component';
import { MdfeComponent } from './mdfe/mdfe.component';
import { NfseComponent } from './nfse/nfse.component';
import { DocumentoService } from './documento.service';


@NgModule({
  declarations: [
    NfeComponent,
    CteComponent,
    MdfeComponent,
    NfseComponent
  ],
  imports: [
    CommonModule,
    PanelModule,
    ScrollPanelModule
  ],
  exports: [
    NfeComponent,
    CteComponent,
    MdfeComponent,
    NfseComponent
  ],
  providers: [
    DocumentoService
  ]
})
export class DocumentosFiscaisModule { }
