import { Component } from '@angular/core';
import { todo } from '../shared/models/todo.model';

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.css']
})
export class ShowListComponent {

  public select_by: string = "date";
  public instance: todo[];
  public chosen: todo[];

  constructor() {
    this.instance = JSON.parse(localStorage.getItem("todo_key"));
  }

  public change_it() {
    if (this.select_by == "date") {
      this.chosen = this.instance.sort(
        // (a, b) => { return <any>a.date.getMonth - <any>b.date.getMonth }
        // (a, b) => parseFloat(<any>a.date.getMonth) - parseFloat(<any>b.date.getMonth)
        function compare(a, b) {
          if (a.date.getTime < b.date.getTime)
            return -1;
          if (a.date.getTime > b.date.getTime)
            return 1;
          return 0;
        }
      )
      console.log("1");
    }

    else if (this.select_by == "time") {
      this.chosen = this.instance.sort((a, b) => (a.time.minutes + "" > b.time.minutes + "") ? 1 : ((b.time.minutes + "" > a.time.minutes + "") ? -1 : 0));
    }
      // this.chosen = this.instance.sort(
      //   // (a, b) => { return a.time.hours - b.time.hours }
      //   // (a, b) => parseFloat(a.time.hours + "") - parseFloat(b.time.hours + "")
      //   function compare(a, b) {
      //     if (a.time.hours < b.time.hours)
      //       return -1;
      //     if (a.time.hours > b.time.hours)
      //       return 1;
      //     return 0;
      //   }
      // )
      // console.log("2");

    else
      this.chosen = this.instance.sort((a, b) => (a.text[0] > b.text[0]) ? 1 : ((b.text[0] > a.text[0]) ? -1 : 0));
  }
}


