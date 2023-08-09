import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'config',
  template: `
    <h1>Url {{config.url}}!</h1>
    {{runChangeDetection}}
  `,
  changeDetection: ChangeDetectionStrategy.OnPush, // По умолчанию Default
})
export class ConfigComponent {
  @Input() config = { url: '' };
  get runChangeDetection() {
    console.log('Checking the view config');
    return true;
  }
}
