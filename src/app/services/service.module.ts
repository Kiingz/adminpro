import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettigsService, SidebarService, SharedService, UsuarioService } from './service.index';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers:[
    SettigsService,
    SidebarService,
    SharedService,
    UsuarioService
  ],
})
export class ServiceModule { }
