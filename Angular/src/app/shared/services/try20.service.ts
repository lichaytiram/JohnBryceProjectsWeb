import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RootObject } from '../models/Itry20.model';

@Injectable({
  providedIn: 'root'
})
export class Try20Service {

  public index: number = 0;

  public crime_street_info: any = {
    selected: null
  }

  constructor(private http: HttpClient) {
    this.get_year_of_crime();
  }

  public get_year_of_crime() {
    this.http.get<RootObject[]>("https://data.police.uk/api/crimes-street-dates")
      .subscribe(
        res => this.crime_street_info.selected = res
      );
  }
}
