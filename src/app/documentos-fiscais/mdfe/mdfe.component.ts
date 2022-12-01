import { Component, OnInit } from '@angular/core';
import { DocumentosFiscais } from '../../core/model';
import { DocumentoService } from '../documento.service';
import { ErrorHandlerService } from '../../core/error-handler.service';

@Component({
  selector: 'app-mdfe',
  templateUrl: './mdfe.component.html',
  styleUrls: []
})
export class MdfeComponent implements OnInit {

  dados = new DocumentosFiscais();

  constructor(
    private documentoService: DocumentoService,
    private errorHandlerService: ErrorHandlerService
  ) { }

  ngOnInit() {
    this.documentoService.obterDadosMdfe()
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
