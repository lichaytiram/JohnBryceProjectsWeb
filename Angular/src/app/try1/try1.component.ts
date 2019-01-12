import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-try1',
  templateUrl: './try1.component.html',
  styleUrls: ['./try1.component.css']
})

export class Try1Component implements OnInit {

  public id: number = 0;
  public add(): void {
    this.id++;
  }
  public title: String = "choose what do you want from list";
  public listTitle = ["Iphone", "Laptop", "Xbox", "playstation", "Television", "Dog"];
  public emptyArr = ["empty", "empty", "empty"];

  public check(s: string) {
    for (let index = 0; index < this.emptyArr.length; index++) {
      if ((this.emptyArr[index] == "empty")){
        this.emptyArr[index] = s;
        break;
      }
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
