import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/model/todo';
import { TodoService } from 'src/app/service/todo.service';

@Component({
  selector: 'ns-main-todo',
  templateUrl: './main-todo.component.html',
  styleUrls: ['./main-todo.component.css']
})
export class MainTodoComponent implements OnInit {

  todoService!:TodoService;
  

  constructor(todoService:TodoService) { 
    this.todoService = todoService;
  }

  ngOnInit(): void {
  }

  newTodo(title:string,content:string){
    this.todoService.addTodo(new Todo(title,content));
  }

}
