import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { StatActivityDTO } from '../core/model';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  url: string;

  constructor(private http: HttpClient) {
    this.url = environment.url;
  }

  obterConexoesTravadas(): Promise<StatActivityDTO[]> {
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/json; charset=utf-8');
    return this.http
      .get<StatActivityDTO[]>(`${this.url}/db/conexoes/travadas`, { headers })
      .toPromise();
  }

  obterConexoesAtivasOrOciosas(ociosa: boolean): Promise<StatActivityDTO[]> {
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/json; charset=utf-8');
    return this.http
      .get<StatActivityDTO[]>(`${this.url}/db/conexoes/${ociosa ? 'ociosas' : 'ativas'}`, { headers })
      .toPromise();
  }

  obterCorStatus(total: number, maximo: number): string {
    let cor: string;

    if (total > maximo) {
      cor = '#EA4335';
    } else {
      cor = '#00D01C';
    }

    return cor;
  }
}
