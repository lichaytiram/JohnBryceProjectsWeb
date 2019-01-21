import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RootObject } from '../models/university.model';

@Injectable({
  providedIn: 'root'
})
export class UniversityService {

  public country: any = {
    selected: null
  }

  constructor(private http: HttpClient) {
    this.get("israel");
  }

  public get(country: string): void {
    this.http.get(`http://universities.hipolabs.com/search?country=${country}`)
      .subscribe(
        res => this.country.selected = res[0],
        err => console.log(err)
      );
  }
}
