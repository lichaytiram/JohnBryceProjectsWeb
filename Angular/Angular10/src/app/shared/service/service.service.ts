import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RootObject } from '../model/model';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  public info: any = {
    name: null,
    password: null
  }

  constructor(private http: HttpClient) { }

  public login(name: string, password: string): void {

    this.http.get<RootObject>(`http://localhost:8081/Web/authentication?command=login&$username=${name}&password=${password}`)
      .subscribe(
        res => (this.info.name = res.user_name, this.info.password = res.password),
        
        problem => console.log(problem)
      );
  }

}
