import { Component, OnInit } from '@angular/core';
import { TodosService } from 'src/app/services/todos.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: object;

  constructor(private todosservice: TodosService) { }

  ngOnInit(): void {
    this.todosservice.getTodos().subscribe((data) => {
      this.todos = data;
    });
  }

}
