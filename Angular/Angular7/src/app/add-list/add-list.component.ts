import { Component } from '@angular/core';
import { Time } from '@angular/common';
import { todo } from '../shared/models/todo.model';

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.css']
})
export class AddListComponent {

  public date: Date;
  public time: Time;
  public text: string;
  public list: todo[] = [];

  public delete() {
    this.list = [];
    this.set();
  }

  public send() {
    let todo_add: todo = new todo(this.date, this.time, this.text);
    this.list.push(todo_add);
    this.set();
  }

  public set() {
    localStorage.setItem("todo_key", JSON.stringify(this.list));
  }
}
