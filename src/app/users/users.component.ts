import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'users',
  template: `
    <div>
      <user *ngFor="let user of users" [name]="user"></user>
      <button (click)="addUser()">Add user</button>
      <button (click)="editUser()">Edit user</button>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersComponent {
  private addCount = 0;
  private editCount = 0;
  public users = [ 'Admin', 'Anon', 'User' ];

  constructor(private cdr: ChangeDetectorRef) {
    // setInterval(() => {
      // console.log('Manual change detect onPush')
      // this.cdr.detectChanges();
    // }, 1000);
  }

  get runChangeDetection() {
    console.log('Checking the view');
    return true;
  }

  addUser() {
    this.users.push(`New User ${++this.addCount}`)
  }

  editUser() {
    this.users[0] = `Edit user ${++this.editCount}`;
  }
}
