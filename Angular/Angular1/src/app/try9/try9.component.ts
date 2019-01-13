import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-try9',
  templateUrl: './try9.component.html',
  styleUrls: ['./try9.component.css']
})
export class Try9Component {

  public first_name: string = "lichay";
  public last_name: string = "tiram";
  public temp_first_name: string;
  public temp_last_name: string;
  public checklog: boolean = false;


  public check(): boolean {
    if (this.first_name == this.temp_first_name && this.last_name == this.temp_last_name) {
      this.checklog = true;
      return true;
    }
    return false;
  }
}
