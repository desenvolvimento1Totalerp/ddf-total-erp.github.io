import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConexoesComponent } from './conexoes/conexoes.component';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';



@NgModule({
  declarations: [ConexoesComponent],
  imports: [
    CommonModule,
    PanelModule,
    TableModule,
  ],
  exports: [
    ConexoesComponent
  ]
})
export class DbModule { }
