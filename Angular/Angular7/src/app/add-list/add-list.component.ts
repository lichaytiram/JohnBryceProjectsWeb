import { Component } from '@angular/core';
import { Time } from '@angular/common';
import { Todo } from '../shared/models/Todo.model';

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.css']
})
export class AddListComponent {

  public date: Date;
  public time: Time;
  public text: string;
  public list: Todo[] = JSON.parse(localStorage.getItem("todo_key"));

  public delete() {
    this.list = [];
    this.set();
  }

  public send() {
    if (this.list == null)
      this.list = [];
    let add_todo: Todo = new Todo(this.date, this.time, this.text);
    this.list.push(add_todo);
    this.set();
  }

  public set() {
    localStorage.setItem("todo_key", JSON.stringify(this.list));
  }
}
