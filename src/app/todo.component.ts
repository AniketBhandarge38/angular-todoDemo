import { Component, OnInit } from "@angular/core";

@Component({
  selector: "todo-app",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"]
})
export class todoComponent implements OnInit {
  data = [
    { id: 1, name: "Wake up at 6:00 AM", done: false, date: new Date() },

    { id: 2, name: "Do Workout ", done: false, date: new Date() },

    { id: 3, name: "Push code to github", done: false, date: new Date() }
  ];

  show: boolean = true;
  value: string;
  id: number;

  constructor() {}

  create(item) {
    this.data.push({
      id: Date.now(),
      name: item,
      done: false,
      date: new Date()
    });
  }

  remove(id) {
    this.data = this.data.filter(item => {
      if (item.id != id) {
        return item;
      }
    });
  }

  edit(id, title) {
    this.show = true;
    this.value = title;
    this.id = id;
  }

  update(title) {
    this.data.map(item => {
      if (item.id === this.id) {
        item["name"] = title;
      }
    });
    this.show = false;
  }

  setTaskComplete(id) {
    this.data.map(item => {
      if (item.id === id) {
        item["done"] = true;
      }
    });
  }

  ngOnInit() {}
}
