import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-try4',
  templateUrl: './try4.component.html',
  styleUrls: ['./try4.component.css']
})
export class Try4Component {

  public name: string = "default";
  public set(name) {
    this.name = name;
  }
}
