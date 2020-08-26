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
  Delete: Todo[] = [];
  done: Todo [] = [];
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
moveToDone(value) {
  let done = this.lists.find((x) => x.todo === value)
  this.done.push(done);
  this.lists = this.lists.filter((x) => x.todo !== value);
}
moveToPendingDone(value) {
  let done = this.pending.find((x) => x.todo === value);
  this.done.push(done);
  this.pending = this.done.filter((x) => x.todo !== value)
}
moveToDelete(value) {
  let Delete = this.pending.find((x) => x.todo === value);
  this.Delete.push(Delete);
  this.pending = this.Delete.filter((x) => x.todo !== value);
}
moveToReset(value:string) {
let item = this.pending.find((x) => x.todo === value)
this.lists.push(item);
this.pending = this.pending.filter((x) => x.todo !== value);
}
}








