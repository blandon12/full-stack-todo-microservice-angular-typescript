import { Component, OnInit } from "@angular/core";
import { ListTodosDataService } from "../service/data/list-todos-data.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Todo } from "../list-todos/list-todos.component";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"]
})
export class TodoComponent implements OnInit {
  id: number;
  todo: Todo;

  constructor(
    private todoDataService: ListTodosDataService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params["id"];
    this.todo = new Todo("", false, new Date(), 1);
    this.todoDataService.retrieveTodoData(this.id).subscribe(data => {
      this.todo = data;
    });
  }

  saveTodo() {
    if (this.id === -1) {
      this.todoDataService.createTodoData(this.todo).subscribe(data => {
        console.log(data);
        this.router.navigate(["todos"]);
      });
    } else {
      this.todoDataService
        .updateTodoData(this.id, this.todo)
        .subscribe(data => {
          console.log(data);
          this.router.navigate(["todos"]);
        });
    }
  }
}
