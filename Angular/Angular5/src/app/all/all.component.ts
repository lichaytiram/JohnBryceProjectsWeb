import { Component } from '@angular/core';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent {

  public array1: string[] = null;
  public array2: string[] = null;

  constructor() {
    this.array1 = [];
    this.array2 = [];
    let length = localStorage.length;
    for (let index = 0; index < length; index++) {
      let key = localStorage.key(index)
      this.array1.push(key);
      this.array2.push(localStorage.getItem(key));
    }
  }

}
