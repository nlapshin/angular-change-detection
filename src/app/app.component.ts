import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <hello></hello>
    <button (click)="onClick()">Trigger change detection</button>
    <config [config]="config"></config>
    <button (click)="changeConfig()">Config change</button>
    <users></users>
    <async-list></async-list>
  `
})
export class AppComponent {
  public config = {
    url: 'url'
  };

  constructor() {
    // setInterval(() => console.log('Main interval event'), 1000);
  }

  onClick() {
    console.log('on click');
  }

  changeConfig() {
    this.config = { ...this.config, url: 'new Url'};
  }
}
