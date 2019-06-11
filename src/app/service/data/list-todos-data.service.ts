import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Todo } from "src/app/list-todos/list-todos.component";

@Injectable({
  providedIn: "root"
})
export class ListTodosDataService {
  constructor(private http: HttpClient) {}

  loadListTodosData() {
    return this.http.get<Todo[]>("http://localhost:8080/user/1/todos");
  }

  deleteTodoData(id: number) {
    return this.http.delete(`http://localhost:8080/user/1/todos/${id}`);
  }

  retrieveTodoData(id: number) {
    return this.http.get<Todo>(`http://localhost:8080/user/1/todos/${id}`);
  }

  updateTodoData(id: number, todo: Todo) {
    return this.http.put(`http://localhost:8080/user/1/todos/${id}`, todo);
  }

  createTodoData(todo: Todo) {
    return this.http.post(`http://localhost:8080/user/1/todos`, todo);
  }
}
