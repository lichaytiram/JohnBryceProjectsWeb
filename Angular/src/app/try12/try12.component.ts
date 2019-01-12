import { Component, OnInit } from '@angular/core';
import { Try12Service } from '../try12.service';

@Component({
  selector: 'app-try12',
  templateUrl: './try12.component.html',
  styleUrls: ['./try12.component.css']
})
export class Try12Component {

  public list = this.array;

  constructor(private array: Try12Service) { }

  public check(): boolean {
    if (this.list.Arraylist[2] == "empty")
      return false;
    return true;
  }
}
