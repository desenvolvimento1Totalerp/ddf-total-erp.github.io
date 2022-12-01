import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { DocumentosFiscais } from '../core/model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DocumentoService {

  url: string;

  constructor(
    private http: HttpClient
  ) {
    this.url = environment.url;
  }

  obterDadosNfe(): Promise<DocumentosFiscais> {
    return this.http.get<DocumentosFiscais>(`${this.url}/nfes`).toPromise();
  }

  obterDadosCte(): Promise<DocumentosFiscais> {
    return this.http.get<DocumentosFiscais>(`${this.url}/ctes`).toPromise();
  }

  obterDadosMdfe(): Promise<DocumentosFiscais> {
    return this.http.get<DocumentosFiscais>(`${this.url}/mdfes`).toPromise();
  }

  obterDadosNfse(): Promise<DocumentosFiscais> {
    return this.http.get<DocumentosFiscais>(`${this.url}/nfses`).toPromise();
  }

  obterCorStatusDocumento(qtdEnvio: number, qtdRejeitado: number): string {
    let cor: string;

    if ((qtdEnvio > 10) || (qtdRejeitado > 10)) {
      cor = '#EA4335';
    } else if ((qtdEnvio >= 5 && qtdEnvio <= 10) || (qtdRejeitado >= 5 && qtdRejeitado <= 10)) {
      cor = '#FBBC05';
    } else if (qtdEnvio < 5 && qtdRejeitado < 5) {
      cor = '#00D01C';
    }

    return cor;
  }

  obterClassProcessoEnvioRejeitado(qtd: number): string {
    let classe = 'list-group-item ';

    if (qtd < 5) {
      classe += 'list-group-item-success';
    } else if (qtd >= 5 && qtd <= 10) {
      classe += 'list-group-item-warning';
    } else if (qtd > 10) {
      classe += 'list-group-item-danger';
    }

    return classe;
  }
}
