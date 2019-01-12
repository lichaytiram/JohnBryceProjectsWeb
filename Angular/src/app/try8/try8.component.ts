import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-try8',
  templateUrl: './try8.component.html',
  styleUrls: ['./try8.component.css']
})
export class Try8Component {

  public str: string;
  public list: string[];

  public set(str: string): void {
    this.str = str
  }

  constructor() {
    this.list = [];
  }
  public change() {
    this.list.push(this.str);
  }

}
