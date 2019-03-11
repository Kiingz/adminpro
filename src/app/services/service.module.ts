import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettigsService, SidebarService, SharedService } from './service.index';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[
    SettigsService,
    SidebarService,
    SharedService
  ],
})
export class ServiceModule { }
