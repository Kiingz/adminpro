import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { UsuarioService } from "../services/service.index";
import { Usuario } from "../models/usuario.model";

declare function init_plugins();
declare const gapi:any;
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  email:string;
  recuerdame: boolean = false;
  auth2: any;

  constructor(public router: Router, public _usuarioService: UsuarioService) {}

  ngOnInit() {
    init_plugins();
    this.googleInit();
    // el || hace que this.email tome el valor siguiente en caso
    // de que no exista el 'email' en el localStorage
    this.email = localStorage.getItem('email') || '';
    if( this.email.length > 0){
      this.recuerdame = true;
    }
  }

  googleInit(){
    gapi.load('auth2', ()=>{
      this.auth2 = gapi.auth2.init({
        client_id: '195195714072-bi1o5j0vmiit3es6h8aps5p4ekv2lf9h.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
        scope: 'profile email'
      });
      this.attachSignin(document.getElementById('btnGoogle'));
    })
  };

  attachSignin( element ){
    this.auth2.attachClickHandler(element, {}, (googleUser) =>{
      // let token = googleUser.getBasicProfile();
      let token = googleUser.getAuthResponse().id_token;
      this._usuarioService.loginGoogle( token ).subscribe( ()=> window.location.href = '#/dashboard');
    })
  }

  ingresar(forma: NgForm) {
    if (forma.invalid) {
      return;
    }
    let usuario = new Usuario(null, forma.value.email, forma.value.password);

    this._usuarioService
      .login(usuario, forma.value.recuerdame)
      .subscribe( correcto => this.router.navigate(['/dashboard']));
    // this.router.navigate(['/dashboard'])
  }
}
