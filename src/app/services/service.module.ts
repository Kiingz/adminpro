import { CommonModule } from '@angular/common';
// tslint:disable-next-line: no-submodule-imports
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ModalUploadService } from '../components/modal-upload/modal-upload.service';
import {
	AdminGuard,
	HospitalService,
	LoginGuardGuard,
	MedicoService,
	SettigsService,
	SharedService,
	SidebarService,
	SubirArchivoService,
	UsuarioService,
	VerificaTokenGuard
} from './service.index';

@NgModule({
	declarations: [],
	imports: [ CommonModule, HttpClientModule ],
	providers: [
		SettigsService,
		SidebarService,
		SharedService,
		UsuarioService,
		LoginGuardGuard,
		AdminGuard,
		SubirArchivoService,
		ModalUploadService,
		HospitalService,
		MedicoService,
		VerificaTokenGuard
	]
})
export class ServiceModule {}
