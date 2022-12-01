import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Quartz, UsuarioDTO } from '../core/model';

@Injectable({
  providedIn: 'root'
})
export class QuartzService {

  url: string;

  constructor(
    private http: HttpClient
  ) {

    this.url = environment.url;
  }

  obterUsuarioDTO(): Promise<UsuarioDTO> {
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/json; charset=utf-8');
    return this.http.get<UsuarioDTO>(`${this.url}/usuario`, { headers }).toPromise();
  }

  obterStatusApp(codigoApp: number): Promise<Quartz> {
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/json; charset=utf-8');
    return this.http.get<Quartz>(`${this.url}/quartz/java${codigoApp}`, { headers }).toPromise();
  }

  obterStatusEscrito(status: number): string {
    let descricao: string;
    switch (status) {
      case 0: {
        descricao = 'ERROR';
        break;
      }
      case 1: {
        descricao = 'LIGADO';
        break;
      }
      case 2: {
        descricao = 'PAUSADO';
        break;
      }
      case 3: {
        descricao = 'DESLIGADO';
        break;
      }
      default: {
        descricao = 'Erro ao obter status';
        break;
      }
    }
    return descricao;
  }

  obterCorStatus(status: number): string {
    let cor: string;
    switch (status) {
      case 0: {
        cor = '#EEA465';
        break;
      }
      case 1: {
        cor = '#00d01c';
        break;
      }
      case 2: {
        cor = '#FBBC05';
        break;
      }
      case 3: {
        cor = '#EA4335';
        break;
      }
      default: {
        cor = '#EA4335';
        break;
      }
    }
    return cor;
  }
}
