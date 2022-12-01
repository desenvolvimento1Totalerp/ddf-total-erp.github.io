import { Component, OnInit } from '@angular/core';
import { ErrorHandlerService } from '../../core/error-handler.service';
import { QuartzService } from '../quartz.service';
import { Quartz } from '../../core/model';

@Component({
  selector: 'app-status-jvm',
  templateUrl: './status-jvm.component.html',
  styleUrls: ['./status-jvm.component.css']
})
export class StatusJvmComponent implements OnInit {

  app1 = new Quartz();
  app2 = new Quartz();
  app3 = new Quartz();
  qtdTarefas: number;

  constructor(
    private errorHandlerService: ErrorHandlerService,
    private quartzService: QuartzService
  ) { }

  ngOnInit() {
    this.quartzService.obterStatusApp(1)
      .then(resultado => {
        this.app1 = resultado;
        this.qtdTarefas = resultado.quantidadeTarefa;
      }).catch(
        erro => {
          this.errorHandlerService.handle(erro);
        }
      );

    this.quartzService.obterStatusApp(2)
      .then(resultado => this.app2 = resultado)
      .catch(
        erro => {
          this.errorHandlerService.handle(erro);
        }
      );

    this.quartzService.obterStatusApp(3)
      .then(resultado => this.app3 = resultado)
      .catch(
        erro => {
          this.errorHandlerService.handle(erro);
        }
      );
  }

  obterStatusEscrito(quartz: Quartz): string {
    return this.quartzService.obterStatusEscrito(quartz.status);
  }

  obterCorStatus(quartz: Quartz): string {
    return this.quartzService.obterCorStatus(quartz.status);
  }

}
