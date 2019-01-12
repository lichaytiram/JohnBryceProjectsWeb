import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-try5',
  templateUrl: './try5.component.html',
  styleUrls: ['./try5.component.css']
})
export class Try5Component {
  public char: string = "0";
  public new_vegetables_list: string[];
  public show: boolean;

  public check(): void {
    if (this.char.length > 1) {
      this.show = false;
      alert("please enter only one char");
    }
    else {
      this.show = true;
      this.new_vegetables_list = [];
      for (let i = 0; i < this.vegetables_list.length; i++)
        if (this.vegetables_list[i].charAt(0) == this.char.charAt(0))// char without [0]
          this.new_vegetables_list.push(this.vegetables_list[i]);
    }
  }


  public vegetables_list: string[] = [
    "nettles", "spinach", "okra", "onions", "kale", "skirret", "dill", "fennel", "saga", "lentils", "leek",
    "tomato", "anise", "celery", "arugula", "taro", "yam", "tubers", "tat soi", "chickpeas", "amrude", "artichoke"
  ]
}
