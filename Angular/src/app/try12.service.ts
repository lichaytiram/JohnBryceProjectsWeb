import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Try12Service {

  public Arraylist: any = ["empty", "empty", "empty", "empty"];

  public set_Arraylist(new_arr: any[]): void {
    this.Arraylist = new_arr;
  }

}
