import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'async-item',
  template: `
    <div>{{name}} {{runChangeDetection}}</div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AsyncItemComponent {
  @Input() name: string = '';

  get runChangeDetection() {
    console.log('Checking the view async-item');
    return true;
  }
}
