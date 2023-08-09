import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'async-list',
  template: `
    <div>
      <async-item *ngFor="let user of $users | async" [name]="user"></async-item>
      <button (click)="addUser()">Add async user</button>
      <button (click)="editUser()">Edit async user</button>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AsyncListComponent {
  private addCount = 0;
  private editCount = 0;
  private users = [ 'Admin', 'Anon', 'User' ];
  public $users = new BehaviorSubject(this.users);

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
    this.users.push(`New User ${++this.addCount}`);
    this.$users.next(this.users);
  }

  editUser() {
    this.users[0] = `Edit user ${++this.editCount}`;
    this.$users.next(this.users);
  }
}


// Внутри async pipe
// if (oldValue !== newValue) {
//   this.cdr.detectChanges();
// }
