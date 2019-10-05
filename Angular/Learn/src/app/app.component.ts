import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Learn';

  public hasError: boolean = true;
  public newGreen: string = "green";
  public myTitle: string = "";
  public isShow: boolean = false;

  public clickMe() {
    console.log(`My title is: ${this.myTitle}`);

  }

}
