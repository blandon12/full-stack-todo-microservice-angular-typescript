import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Todo } from "src/app/list-todos/list-todos.component";

@Injectable({
  providedIn: "root"
})
export class ListTodosDataService {
  constructor(private http: HttpClient) {}

  loadListTodosData() {
    return this.http.get<Todo>("http://localhost:8080/todos/userid/1");
  }
}
