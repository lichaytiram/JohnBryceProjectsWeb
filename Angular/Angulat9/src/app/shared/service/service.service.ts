import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
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
    this.http.get<string[]>(this.url + "?get_basket=get")
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

  public post_basket(value: string): void {

    this.http.post(this.url + "?name_basket=" + value, "")
      .subscribe();
  }

  public delete_basket(value: string): void {
    const params = new HttpParams().set('id', value);
    this.http.delete<string>(this.url + "?delete=" + value)
      .subscribe();
  }
  //, {params}
}
