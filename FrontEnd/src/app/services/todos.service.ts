import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TODO } from '../models/todo';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators' ;

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private http: HttpClient) { }

  getAllTodos(): Observable<TODO[]>{
    const headers = new HttpHeaders();
    const url = 'http://localhost:3000/todos';

    headers.append('Content-Type', 'application/json');

    const todolist = this.http
      .get<TODO[]>(url)
      .pipe(map((data: any) => data.result));

    return todolist;
  }
}
