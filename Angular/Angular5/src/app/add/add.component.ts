import { Component } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  public name: string;
  public id: string;

  public send() {
    var name = this.name;
    var id = this.id;
    localStorage.setItem(name, id);
  }

}
