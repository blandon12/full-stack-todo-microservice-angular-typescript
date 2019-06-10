import { Component, OnInit } from "@angular/core";
import { ListTodosDataService } from "../service/data/list-todos-data.service";

export class Todo {
  constructor(
    public id: number,
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
  todos = [
    // new Todo(1, "learn cook", false, new Date(), 1),
    // new Todo(2, "learn dance", false, new Date(), 1)
    // { id: 1, description: "learn cook" },
    // { id: 2, description: "learn dance" }
  ];

  constructor(private listTodosDataService: ListTodosDataService) {}

  ngOnInit() {
    console.log(this.listTodosDataService.loadListTodosData());
    this.listTodosDataService
      .loadListTodosData()
      .subscribe(response => this.handleSuccessfulMessage(response));
  }

  handleSuccessfulMessage(response) {
    console.log(response);
    this.todos = response;
  }
}
