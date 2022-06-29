import { Injectable } from '@angular/core';
import { Todo } from '../model/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {


  private _todos: Todo[] = [];

  public get todos(): Todo[] {
    return this._todos;
  }
  public set todos(value: Todo[]) {
    this._todos = value;
  }


  constructor() { }

  addTodo(todo:Todo){
    this._todos.push(todo);
  }

  remove(todo:Todo){
    this._todos = this._todos.filter((to)=>to.id!==todo.id);
  }

  update(todo:Todo){
    this._todos.forEach((to)=>{
      if(to.id===todo.id){
        to = todo;
      }
    })
  }
}
