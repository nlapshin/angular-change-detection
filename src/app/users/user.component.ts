import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'user',
  template: `
    <div>{{name}} {{runChangeDetection}}</div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserComponent {
  @Input() name: string = '';

  get runChangeDetection() {
    console.log('Checking the view: user');
    return true;
  }
}
