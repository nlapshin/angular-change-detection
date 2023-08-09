import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!-- <hello></hello> -->
    <button (click)="onClick()">Trigger change detection</button>
<!-- 
    <config [config]="config"></config>
    <button (click)="changeConfig()">Change config</button> -->

    <!-- <users></users> -->
    <async-list></async-list>
  `
})
export class AppComponent {
  public config = {
    url: 'url'
  };

  constructor() {
    // setInterval(() => console.log('Main interval event'), 2000);
  }

  onClick() {
    console.log('on click');
  }

  changeConfig() {
    // Сейчас ничего не произойдет
    // this.config.url = 'new Url';
    // Изменить ссылку на переменную
    // this.config = { ...this.config, url: 'new Url' };
  }
}




  
// <!-- 
// <button (click)="changeConfig()">Config change</button>
// 
// <async-list></async-list> -->
