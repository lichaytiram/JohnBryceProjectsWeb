import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RootObject } from '../models/try17.model';
import { Wrapper } from '../models/try17';


@Injectable({
  providedIn: 'root'
})
export class Try17Service {

  public my_info: Wrapper = new Wrapper();

  constructor(private http: HttpClient) {
    this.getInfo();
  }

  public getInfo() {
    this.http.get<RootObject>("https://reqres.in/api/users?page=5")
      .subscribe(
        res => { this.my_info.get_my_info = res },
        error => { console.log(error) }
      )
  }
}
