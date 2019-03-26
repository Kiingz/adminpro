import { CommonModule } from '@angular/common';
// tslint:disable-next-line: no-submodule-imports
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { LoginGuardGuard, SettigsService, SharedService, SidebarService, UsuarioService } from './service.index';

@NgModule({
	declarations: [],
	imports: [ CommonModule, HttpClientModule ],
	providers: [ SettigsService, SidebarService, SharedService, UsuarioService, LoginGuardGuard ]
})
export class ServiceModule {}
