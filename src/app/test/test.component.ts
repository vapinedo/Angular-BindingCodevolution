import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2 class="text-success">Welcome {{name}}</h2>
    <h2 [class]="successClass">Tony Kroos</h2>
    <h2 class="text-special" [class]="successClass">Karin Benzema</h2>
    <h2 [class.text-danger]="hasError">Casemiro</h2>
    <h2 [ngClass]="messageClasses">Vinicius Jr</h2>
  `,
  styles: [`
    .text-success {
      color: green;
    }
    .text-danger {
      color: red;
    }
    .text-special {
      font-style: italic;
    }
  `]
})
export class TestComponent implements OnInit {

  hasError: boolean = true;
  isSpecial: boolean = true;
  messageClasses = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  };
  name: string = "To Real Madrid";
  successClass: string = "text-success";

  constructor() { }

  ngOnInit(): void {
  }

  greetUser() {
    return "Hello " + this.name;
  }

}
