import { Component, OnInit } from '@angular/core';
import { DocumentoService } from '../documento.service';
import { DocumentosFiscais } from '../../core/model';
import { ErrorHandlerService } from '../../core/error-handler.service';

@Component({
  selector: 'app-nfe',
  templateUrl: './nfe.component.html',
  styleUrls: []
})
export class NfeComponent implements OnInit {

  dados = new DocumentosFiscais();

  constructor(
    private documentoService: DocumentoService,
    private errorHandlerService: ErrorHandlerService
  ) { }

  ngOnInit() {
    this.documentoService.obterDadosNfe()
      .then(dados => this.dados = dados)
      .catch(erro => {
        this.errorHandlerService.handle(erro);
      });
  }

  obterCorStatusDocumento(): string {
    return this.documentoService.obterCorStatusDocumento(this.dados.envio, this.dados.rejeitado);
  }

  obterClassProcessoEnvio(): string {
    return this.documentoService.obterClassProcessoEnvioRejeitado(this.dados.envio);
  }

  obterClassRejeitado(): string {
    return this.documentoService.obterClassProcessoEnvioRejeitado(this.dados.rejeitado);
  }

}
