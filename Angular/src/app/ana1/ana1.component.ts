import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ana1',
  templateUrl: './ana1.component.html',
  styleUrls: ['./ana1.component.css']
})
export class Ana1Component {
  public userName: string = "Bob";
  public userAge: number = 20;


  public incAge(): void {
    this.userAge++;
  }

  public updateName(newName: string): void {
    this.userName = newName;
  }
}