import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { retry } from "rxjs/operators";

@Component({
  selector: "app-rxjs",
  templateUrl: "./rxjs.component.html",
  styles: []
})
export class RxjsComponent implements OnInit {
  constructor() {
    this.regresaObserbavle()
      .pipe(retry(3))
      .subscribe(
        numero => console.log("Subs ", numero),
        error => console.error("Error en el obs", error),
        () => console.log("El observador Termino!")
      );
  }

  ngOnInit() {}

  regresaObserbavle(): Observable<number> {
    return new Observable<number>(observer => {
      let contador = 0;
      let intervalo = setInterval(() => {
        contador += 1;
        observer.next(contador);
        if (contador === 3) {
          clearInterval(intervalo);
          observer.complete();
        }
        if (contador === 2) {
          //clearInterval(intervalo);
          observer.error("Help!");
        }
      }, 1000);
    });
  }
}
