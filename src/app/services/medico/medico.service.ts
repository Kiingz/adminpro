import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { URL_SERVICIOS } from 'src/app/config/config';
import { UsuarioService } from '../usuario/usuario.service';
import { Medico } from 'src/app/models/medico.model';

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

	cargarMedico(id: string) {
		const url = URL_SERVICIOS + '/medico/' + id;
		return this.http.get(url).pipe(map((resp: any) => resp.medico));
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

	guardarMedico(medico: Medico) {
		let url = URL_SERVICIOS + '/medico/';
		url += '?token=' + this._usuarioService.token;

		return this.http.post(url, medico).pipe(
			map((resp: any) => {
				swal('Medico Creado', medico.nombre, 'success');
				return resp.medico;
			})
		);
	}
}
