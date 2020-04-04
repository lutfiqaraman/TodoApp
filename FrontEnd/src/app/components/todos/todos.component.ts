import { Component, OnInit } from '@angular/core';
import { TodosService } from 'src/app/services/todos.service';
import { TODO } from 'src/app/models/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todolist: TODO[] = [];

  constructor(private todoservice: TodosService) { }

  ngOnInit(): void {
    this.getAllTodos();
  }

  getAllTodos() {
    this.todoservice
      .getAllTodos()
      .subscribe(todos => this.todolist = todos);
  }

}
