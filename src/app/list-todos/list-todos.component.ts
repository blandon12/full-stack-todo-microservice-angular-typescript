import { Component, OnInit } from "@angular/core";
import { ListTodosDataService } from "../service/data/list-todos-data.service";
import { Router } from "@angular/router";

export class Todo {
  constructor(
    // public id: number,
    public description: string,
    public completed: boolean,
    public date: Date,
    public uid: number
  ) {}
}

@Component({
  selector: "app-list-todos",
  templateUrl: "./list-todos.component.html",
  styleUrls: ["./list-todos.component.css"]
})
export class ListTodosComponent implements OnInit {
  todos: Todo[];
  deleteMessage: string;

  constructor(
    private listTodosDataService: ListTodosDataService,
    private router: Router
  ) {}

  ngOnInit() {
    this.refreshTodoList();
  }

  refreshTodoList() {
    this.listTodosDataService
      .loadListTodosData()
      .subscribe(response => this.handleSuccessfulMessage(response));
  }

  handleSuccessfulMessage(response) {
    console.log(response);
    this.todos = response;
  }

  deleteTodo(id) {
    this.listTodosDataService.deleteTodoData(id).subscribe(response => {
      console.log(response);
      this.refreshTodoList();
      this.deleteMessage = `Delete of Todo ${id} success!`;
    });
  }

  updateTodo(id) {
    console.log(`update todo ${id}`);
    this.router.navigate([`todos/${id}`]);
  }

  createTodo() {
    this.router.navigate(["todos/-1"]);
  }
}
