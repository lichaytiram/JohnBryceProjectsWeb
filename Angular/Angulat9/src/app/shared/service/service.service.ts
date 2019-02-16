import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  public url: string = "http://localhost:8081/Web/basket";
  public item_list = {
    all_list: null,
    selected: null
  }

  // public json = {
  //   name: null
  // }

  constructor(private http: HttpClient) {
    this.get();
  }

  public get(): void {
    this.http.get<string[]>(this.url)
      .subscribe(
        res => this.item_list.all_list = res,
        err => console.log(err)
      )
  }

  public get_basket(): void {
    this.http.get<string[]>(this.url)
      .subscribe(
        res => this.item_list.selected = res,
        err => console.log(err)
      )
  }

  public post(value: string): void {
    // this.json.name = value;

    this.http.post(this.url + "?name=" + value, /*JSON.stringify(this.json)*/"")
      .subscribe();
  }
}
