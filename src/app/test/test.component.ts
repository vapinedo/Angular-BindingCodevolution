import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2>Welcome {{name}}</h2>
    <input id="test" type="text" value="Valp">
    <input bind-disabled="isDisabled" type="text" value="Valp">
  `,
  styles: []
})
export class TestComponent implements OnInit {

  public name = "Valp";
  public myId = "testId";
  public isDisabled = true;
  public siteUrl = window.location.href;

  constructor() { }

  ngOnInit(): void {
  }

  greetUser() {
    return "Hello " + this.name;
  }

}
