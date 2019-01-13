import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-try7',
  templateUrl: './try7.component.html',
  styleUrls: ['./try7.component.css']
})
export class Try7Component {

  public list = [
    {
      "Id_info": 0,
      "Name_info": "Carrillo Stewart",
      "Gender_info": "male",
      "Favourite_fruit _info": "melon"
    },
    {
      "Id_info": 1,
      "Name_info": "Ramos Wall",
      "Gender_info": "male",
      "Favourite_fruit_info": "strawberry"
    },
    {
      "Id_info": 2,
      "Name_info": "Figueroa Sampson",
      "Gender_info": "male",
      "Favourite_fruit_info": "mango"
    }
  ]

}
