import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  public my_name;

  public root = {
    company: null
  }

  constructor(private http: HttpClient, private router: Router) { }

  public get_user_name(token: number): void {

    let observable = this.http.get(`http://localhost:8080/users/name/0?token=${token}`);

    observable.subscribe(

      res => {

        this.my_name = res;


      },
      err => alert("Oh crap !.... Error! Status: " + err.status + ", Message: " + err.message)

    );

  }

}
