import { Component, OnInit } from '@angular/core';
import { Try12Service } from '../try12.service';
import { IMovieList } from '../try12.model';

@Component({
  selector: 'app-try13',
  templateUrl: './try13.component.html',
  styleUrls: ['./try13.component.css']
})
export class Try13Component {

  send(movie: IMovieList) {
    this.array.set_Arraylist([movie.movie_name, movie.id, movie.price, movie.movie_date]);
  }
  constructor(private array: Try12Service) { }


  public movie: IMovieList[] = [
    {
      "id": 1,
      "movie_name": "Coraline",
      "price": 7.13,
      "movie_date": "07/09/2017"
    },
    {
      "id": 2,
      "movie_name": "Finding Dory",
      "price": 10.09,
      "movie_date": "12/12/2016"
    },
    {
      "id": 3,
      "movie_name": "The Wailing",
      "price": 10.69,
      "movie_date": "03/09/2017"
    },
    {
      "id": 4,
      "movie_name": "The Void",
      "price": 8.85,
      "movie_date": "10/30/2017"
    },
    {
      "id": 5,
      "movie_name": "Tower",
      "price": 8.47,
      "movie_date": "04/06/2017"
    }
  ]



}
