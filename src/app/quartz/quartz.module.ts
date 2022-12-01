import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusJvmComponent } from './status-jvm/status-jvm.component';
import { PanelModule } from 'primeng/panel';
import { UsuarioComponent } from './usuario/usuario.component';



@NgModule({
  declarations: [
    StatusJvmComponent,
    UsuarioComponent
  ],
  imports: [
    CommonModule,
    PanelModule
  ],
  exports: [
    StatusJvmComponent,
    UsuarioComponent
  ]
})
export class QuartzModule { }
