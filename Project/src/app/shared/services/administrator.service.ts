import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdministratorService {

  public root = {
    administrator: null
  }

  constructor(private http: HttpClient) { }


}
