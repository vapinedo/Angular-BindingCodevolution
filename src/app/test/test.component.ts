import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2>Welcome {{name}}</h2>
    <h2>{{greeting}}</h2>
    <button (click)="greet($event)">Greet</button>
    <button (click)="greeting='Welcome to Home'">Greet</button>
  `,
  styles: []
})
export class TestComponent {

  name: string = "Real Madrid";
  greeting: string = "";

  greet(event: MouseEvent) {
    console.log(event)
    this.greeting = event.type;
  }

  constructor() { }
}
