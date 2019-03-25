import { Injectable } from "@angular/core";
import { Usuario } from "src/app/models/usuario.model";
import { HttpClient } from "@angular/common/http";
import { URL_SERVICIOS } from "src/app/config/config";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class UsuarioService {
  constructor(public http: HttpClient) {
    console.log("Servicio de usuario listo");
  }
  
  login( usuario: Usuario, recordar: boolean = false){
    let url = URL_SERVICIOS + '/login';
    return this.http.post( url, usuario);
  }

  crearUsuario(usuario: Usuario) {
    let url = URL_SERVICIOS + "/usuario";
    return this.http.post(url, usuario).pipe(
      map((resp: any) => {
        swal("Usuario Creado!", usuario.email, "success");
        return resp.usuario;
      })
    );
  }
}
