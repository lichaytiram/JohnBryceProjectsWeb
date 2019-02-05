import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RootObject } from '../models/Todo';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  public student_info = {
    selected: null
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
}
