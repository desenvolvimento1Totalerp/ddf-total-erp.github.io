import { Component, OnInit } from '@angular/core';
import { DbService } from '../db.service';
import { StatActivityDTO } from '../../core/model';
import { ErrorHandlerService } from '../../core/error-handler.service';

@Component({
  selector: 'app-conexoes',
  templateUrl: './conexoes.component.html',
})
export class ConexoesComponent implements OnInit {

  corTravadas: string;
  travadas: StatActivityDTO[];
  ativas: StatActivityDTO[];
  ociosas: StatActivityDTO[];

  constructor(
    private errorHandlerService: ErrorHandlerService,
    private dbService: DbService
  ) { }

  ngOnInit() {
    this.carregarAtivas();
    this.carregarOciosas();
    this.carregarTravadas();
  }

  private carregarTravadas(): void {
    this.dbService.obterConexoesTravadas()
      .then(dto => {
        this.travadas = dto;
        this.corTravadas = this.obterCorStatusTravadas();
      })
      .catch(erro => {
        this.errorHandlerService.handle(erro);
      });
  }

  private carregarAtivas(): void {
    this.dbService.obterConexoesAtivasOrOciosas(false)
      .then(dto => this.ativas = dto)
      .catch(erro => {
        this.errorHandlerService.handle(erro);
      });
  }

  private carregarOciosas(): void {
    this.dbService.obterConexoesAtivasOrOciosas(true)
      .then(dto => this.ociosas = dto)
      .catch(erro => {
        this.errorHandlerService.handle(erro);
      });
  }

  obterCorStatus(total: number, maximo: number): string {
    return this.dbService.obterCorStatus(total, maximo);
  }

  obterCorStatusTravadas(): string {
    return this.dbService.obterCorStatus(this.travadas.length, 0);
  }

}
