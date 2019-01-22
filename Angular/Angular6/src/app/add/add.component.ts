import { Component } from '@angular/core';
import { Todo } from './shared/models/todo.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {


  public name: string;
  public id: number;
  public arrayTodo: Todo[] = [];

  public send() {
    let todo: Todo = new Todo();
    todo.name = this.name;
    todo.id = this.id;
    this.arrayTodo.push(todo);
    this.local_storage();
  }
  public delete() {
    this.arrayTodo = [];
    this.local_storage();
  }

  public local_storage() {
    localStorage.setItem("key", JSON.stringify(this.arrayTodo));
  }


}
