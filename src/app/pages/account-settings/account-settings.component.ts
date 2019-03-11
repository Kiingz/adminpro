import { Component, OnInit } from "@angular/core";
import { SettigsService } from 'src/app/services/settigs.service';

@Component({
  selector: "app-account-settings",
  templateUrl: "./account-settings.component.html",
  styles: []
})
export class AccountSettingsComponent implements OnInit {
  constructor( public _ajustes: SettigsService ) {}

  ngOnInit() {}

  cambiarColor(tema: string, link: any) {
    this.aplicarCheck(link);
    this._ajustes.aplicarTema(tema);
  }

  aplicarCheck(link: any) {
    let selectores: any = document.getElementsByClassName("selector");
    for (let ref of selectores) {
      ref.classList.remove("working");
    }
    link.classList.add("working");
  }
}
