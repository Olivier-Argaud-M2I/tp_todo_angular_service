import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainTodoComponent } from './todo/main-todo/main-todo.component';
import { TodoComponent } from './todo/todo/todo.component';

@NgModule({
  declarations: [
    AppComponent,
    MainTodoComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
