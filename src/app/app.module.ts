import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { ConfigComponent } from './config/config.component'
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user.component';
import { AsyncListComponent } from './async/async-list.component';
import { AsyncItemComponent } from './async/async-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    ConfigComponent,
    UsersComponent,
    UserComponent,
    AsyncListComponent,
    AsyncItemComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
