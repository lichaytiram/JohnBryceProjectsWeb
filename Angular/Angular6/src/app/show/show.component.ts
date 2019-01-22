import { Component } from '@angular/core';
import { Todo } from '../add/shared/models/todo.model';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent {

  public Todolist: Todo[] = undefined;

  public
  constructor() {
    this.Todolist = JSON.parse(localStorage.getItem("key"));
  }

}
