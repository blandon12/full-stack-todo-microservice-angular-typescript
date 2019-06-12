import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Todo } from "src/app/list-todos/list-todos.component";
import { API_URL } from "src/app/app.constants";

@Injectable({
  providedIn: "root"
})
export class ListTodosDataService {
  constructor(private http: HttpClient) {}

  loadListTodosData() {
    return this.http.get<Todo[]>(`${API_URL}/user/1/todos`);
  }

  deleteTodoData(id: number) {
    return this.http.delete(`${API_URL}/user/1/todos/${id}`);
  }

  retrieveTodoData(id: number) {
    return this.http.get<Todo>(`${API_URL}/user/1/todos/${id}`);
  }

  updateTodoData(id: number, todo: Todo) {
    return this.http.put(`${API_URL}/user/1/todos/${id}`, todo);
  }

  createTodoData(todo: Todo) {
    return this.http.post(`${API_URL}/user/1/todos`, todo);
  }
}
