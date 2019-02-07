import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RootObject } from '../models/Todo';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  public student_info = {
    selected: null,
    selected_one: null
  }

  constructor(private http: HttpClient) {
    this.get();
  }

  public get() {
    this.http.get<RootObject[]>("http://localhost:8081/Web/StudentServlet")
      .subscribe(
        result => this.student_info.selected = result,
        problem => console.log(problem)
      );
  }

  public get_one() {
    this.http.get<RootObject>(`http://localhost:8081/Web/StudentServlet?name=${this.student_info.selected_one}`)
      .subscribe(
        result => this.student_info.selected_one = result,
        problem => console.log(problem)
      );
  }

}
