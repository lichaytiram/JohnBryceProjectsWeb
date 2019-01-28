import { Component } from '@angular/core';
import { Todo } from '../shared/models/Todo.model';

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.css']
})
export class ShowListComponent {

  public select_by: string = "date";
  public instance: Todo[];

  constructor() {
    this.instance = JSON.parse(localStorage.getItem("todo_key"));
  }

  public change_it() {
    if (this.select_by == "date") {
      this.instance = this.instance.sort((a, b) => (a.date > b.date) ? 1 : ((b.date > a.date) ? -1 : 0));
    }

    else if (this.select_by == "time") {
      this.instance = this.instance.sort((a, b) => (a.time > b.time) ? 1 : ((b.time > a.time) ? -1 : 0));
    }

    else
      this.instance = this.instance.sort((a, b) => (a.text[0] > b.text[0]) ? 1 : ((b.text[0] > a.text[0]) ? -1 : 0));
  }

  public delete(name: Todo) {
    this.instance = this.instance.filter(save => save != name);
    localStorage.setItem("todo_key", JSON.stringify(this.instance));
  }
}