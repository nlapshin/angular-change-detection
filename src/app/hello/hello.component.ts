import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `
    <h1>Hello {{name}}!</h1>
    {{runChangeDetection}}
  `
})
export class HelloComponent {
  @Input() name: string = '';
  get runChangeDetection() {
    console.log('Checking the view hello');
    return true;
  }
}
