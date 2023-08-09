import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'users',
  template: `
    <div>
      <user *ngFor="let user of users" [name]="user"></user>
      <button (click)="addUser()">Add user</button>
      <button (click)="editUser()">Edit user</button>
      {{runChangeDetection}}
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersComponent {
  private addCount = 0;
  private editCount = 0;
  public users = [ 'Admin', 'Anon', 'User' ];

  constructor(private cdr: ChangeDetectorRef) {
    // Таймеры, сетевые запросы, промисы.
    this.cdr.detach();
    
    setInterval(() => {
      console.log('Manual change detect onPush')
      this.cdr.detectChanges(); // detectChanges - запускает ручками проверку изменений.
    }, 1000);

    // веб-сокет, который слушает сообщения от сервера
    // И хочет каждую секунду обновлять view
    // собрать 5-10 сообщений и отобразить.
    // Может быть, какие-то служебные сообщения.
  }

  get runChangeDetection() {
    console.log('Checking the view: users');
    return true;
  }

  addUser() {
    this.users.push(`New User ${++this.addCount}`)
  }

  editUser() {
    this.users[0] = `Edit user ${++this.editCount}`;
  }
}
