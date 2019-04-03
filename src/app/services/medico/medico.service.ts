import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { URL_SERVICIOS } from 'src/app/config/config';
import { UsuarioService } from '../usuario/usuario.service';

@Injectable({
	providedIn: 'root'
})
export class MedicoService {
	totalMedicos: number = 0;
	constructor(public http: HttpClient, public _usuarioService: UsuarioService) {}

	cargarMedicos() {
		const url = URL_SERVICIOS + '/medico';
		return this.http.get(url).pipe(
			map((resp: any) => {
				this.totalMedicos = resp.total;
				return resp.medicos;
			})
		);
	}

	buscarMedicos(termino: string) {
		const url = URL_SERVICIOS + '/busqueda/coleccion/medicos/' + termino;
		return this.http.get(url).pipe(map((resp: any) => resp.medicos));
	}

	borrarMedico(id: string) {
		let url = URL_SERVICIOS + '/medico/' + id;
		url += '?token=' + this._usuarioService.token;
		return this.http.delete(url).pipe(
			map((resp: any) => {
				swal('Medico Borrado', 'Medico borrado correctamente', 'success');
				return resp;
			})
		);
	}
}
