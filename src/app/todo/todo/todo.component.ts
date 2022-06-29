import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/model/todo';
import { TodoService } from 'src/app/service/todo.service';

@Component({
  selector: 'ns-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @Input()todo!:Todo;

  todoService!:TodoService;

  constructor(todoService:TodoService) { 
    this.todoService = todoService;
  }

  ngOnInit(): void {
  }

  validerChange(){

  }

  suppr(){
    this.todoService.remove(this.todo);
  }

}
