import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-try2',
  templateUrl: './try2.component.html',
  styleUrls: ['./try2.component.css']
})
export class Try2Component implements OnInit {

  public color = "blue";
  public show: boolean = true;
  public is_show() {
    this.show = !this.show;
  }
  public color_change(color: string) {
    console.log("got new color");

    this.color = color;
  }
  public list_of_person = [
    {
      "id": "61045",
      "first_name": "omer",
      "last_name": "ohshe"
    },
    {
      "id": "8522542",
      "first_name": "oded",
      "last_name": "omesha"
    },
    {
      "id": "74542522",
      "first_name": "polina",
      "last_name": "pori"
    },
    {
      "id": "245",
      "first_name": "efi",
      "last_name": "soops"
    },
    {
      "id": "78782",
      "first_name": "shoshi",
      "last_name": "arima"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
