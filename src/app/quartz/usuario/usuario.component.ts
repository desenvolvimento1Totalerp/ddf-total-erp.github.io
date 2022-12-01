import { Component, OnInit } from '@angular/core';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { UsuarioDTO } from '../../core/model';
import { QuartzService } from '../quartz.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  dto = new UsuarioDTO();

  constructor(
    private errorHandlerService: ErrorHandlerService,
    private quartzService: QuartzService
  ) { }

  ngOnInit() {
    this.quartzService.obterUsuarioDTO()
      .then((dto: UsuarioDTO) => {
        this.dto = dto;
      }).catch(erro => {
        this.errorHandlerService.handle(erro);
      });
  }

}
