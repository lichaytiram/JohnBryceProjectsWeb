import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RootObject } from '../models/try17.model';

@Injectable({
  providedIn: 'root'
})
export class Try18Service {

  public bearinfo: any = {
    "selected": null
  };

  constructor(private http: HttpClient) { }

  public getSpecificBeer(id: number) {
    this.http.get<RootObject[]>(`https://api.punkapi.com/v2/beers/${id}`)
      .subscribe(
        res => { this.bearinfo.selected = res[0] }
      )
  }
}
