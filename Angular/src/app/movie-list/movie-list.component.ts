import { Component, OnInit } from '@angular/core';
import { noUndefined } from '@angular/compiler/src/util';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  public id: number = null;

  public clearAll() {
    alert("all clear");
    this.id = null;
  }


  public inside(id: number) {
    this.id = id - 1;
  }

  public movie = [
    {
      "id": "1",
      "movie_name": "Coraline",
      "price": "7.13",
      "movie_date": "07/09/2017"
    },
    {
      "id": "2",
      "movie_name": "Finding Dory",
      "price": "10.09",
      "movie_date": "12/12/2016"
    },
    {
      "id": "3",
      "movie_name": "The Wailing",
      "price": "10.69",
      "movie_date": "03/09/2017"
    },
    {
      "id": "4",
      "movie_name": "The Void",
      "price": "8.85",
      "movie_date": "10/30/2017"
    },
    {
      "id": "5",
      "movie_name": "Tower",
      "price": "8.47",
      "movie_date": "04/06/2017"
    }
  ]


  constructor() { }

  ngOnInit() {
  }
}
