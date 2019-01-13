import { Component } from '@angular/core';
import { Try14Service } from '../try14.service';

@Component({
  selector: 'app-try14',
  templateUrl: './try14.component.html',
  styleUrls: ['./try14.component.css']
})
export class Try14Component {

  public show = this.instance;

  constructor(private instance: Try14Service) { }
  public arr: string[] = [];

  do() {
    this.arr = [];
    for (let i = 0; i < this.show.number; i++)
      this.arr.push(this.show.name);
  }
}