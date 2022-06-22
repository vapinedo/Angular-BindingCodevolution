import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2>Welcome {{name}}</h2>
    <input #myInput type="text" />
    <button (click)="logMessage(myInput)">Log</button>
  `,
  styles: []
})
export class TestComponent {

  name: string = "Real Madrid";

  constructor() { }

  logMessage(value: any) {
    
  }
}
