import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {


  public first_name1: String = "Eve";
  public last_name1: String = "Holt";
  public avatar1: String = "https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg";
  public first_name2: String = "Charles";
  public last_name2: String = "Morris";
  public avatar2: String = "https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg";
  public first_name3: String = "Tracey";
  public last_name3: String = "Ramos";
  public avatar3: String = "https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg";


  public jn =
    [
      {
        "first_name": "Eve",
        "last_name": "Holt",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg"
      },
      {
        "first_name": "Charles",
        "last_name": "Morris",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg"
      },
      {
        "first_name": "Tracey",
        "last_name": "Ramos",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg"
      }
    ]


  constructor() { }

  ngOnInit() {
  }

}
