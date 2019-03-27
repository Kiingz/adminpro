import { CommonModule } from '@angular/common';
// tslint:disable-next-line: no-submodule-imports
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {
	LoginGuardGuard,
	SettigsService,
	SharedService,
	SidebarService,
	SubirArchivoService,
	UsuarioService
} from './service.index';

@NgModule({
	declarations: [],
	imports: [ CommonModule, HttpClientModule ],
	providers: [ SettigsService, SidebarService, SharedService, UsuarioService, LoginGuardGuard, SubirArchivoService ]
})
export class ServiceModule {}
