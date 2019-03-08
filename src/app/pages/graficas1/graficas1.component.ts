import { Component, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-graficas1',
  templateUrl: './graficas1.component.html',
  styles: []
})
export class Graficas1Component implements OnInit {

  @Output() graficos: any = {
    'grafico1': {
      'labels': ['Con Frijoles', 'Con Natilla', 'Con tocino'],
      'multiDataSet':  [24, 30, 46],
      'chartType': 'doughnut',
      'leyenda': 'El pan se come con'
    },
    'grafico2': {
      'label': ['Hombres', 'Mujeres'],
      'multiDataSet':  [4500, 6000],
      'chartType': 'doughnut',
      'leyenda': 'Entrevistados'
    },
    'grafico3': {
      'labels': ['Si', 'No'],
      'multiDataSet':  [95, 5],
      'chartType': 'doughnut',
      'leyenda': '¿Le dan gases los frijoles?'
    },
    'grafico4': {
      'labels': ['No', 'Si'],
      'multiDataSet':  [85, 15],
      'chartType': 'doughnut',
      'leyenda': '¿Le importa que le den gases?'
    },
  };

  constructor() { }

  ngOnInit() {
  }


}
