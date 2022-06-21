import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2 [style.color]="hasError ? 'red': 'blue'">Welcome {{name}}</h2>
    <h2 [style.color]="highLightColor">Santiabo Bernabeu</h2>
    <h2 [ngStyle]="titleStyles">Luis Figo</h2>
  `,
  styles: []
})
export class TestComponent {

  hasError: boolean = false;
  name: string = "Real Madrid";
  highLightColor: string = "orange";
  titleStyles = {
    color: "blue",
    fontStyle: "italic"
  };

  constructor() { }

}
