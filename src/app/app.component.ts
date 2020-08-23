import { Component, OnInit } from "@angular/core";
import { Todo } from "./todo";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "todo";
  value: string;
  lists: Todo[] = [];
  pending: Todo[] = [];
  ngOnInit() {}
  addTodo(value: string) {
    console.log(value);
    const newItem: Todo = {
      id: new Date(),
      todo: value,
      status: "all",
    };
    console.log(newItem);
    this.lists.push(newItem);
    this.value = "";
  }
  moveToPending(value) {
    let pending = this.lists.find((x) => x.todo === value);
    this.pending.push(pending);
    this.lists = this.lists.filter((x) => x.todo !== value);
  }
}

