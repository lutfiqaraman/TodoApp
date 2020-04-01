import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private http: HttpClient) { }

  getTodos() {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    const url = 'http://localhost:3000/todos';
    const header = { headers };

    const result = this.http.get(url, header);

    return result;
  }
}
