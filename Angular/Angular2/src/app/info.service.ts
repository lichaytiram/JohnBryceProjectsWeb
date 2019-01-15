import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  constructor() { }

  public info = {
    selected: null
  };

  public inpute(index: number): void {
    this.info.selected = this.cars[index];    
  }

  public cars: string[] = [
    "https://www.lamborghini.com/sites/it-en/files/DAM/it/models_gateway/blocks/special.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIyOkdrwcBQBcnTxvncDlIEfmncPSQYbCN3Mt37FoRuGPZjNfqNA",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBW98bacWyNiq1JMMttVWcboptdyPTCxrXaayo4-_QYIexQFghxA",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9dD-MqeZ4I2qRe2L5NVBqcP3uw_qdSMccuIvWFjSeM5wEKOrB",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIKnPO8DzZdm2JbQTQZrJ83Ew6UWW7hYqvuT4zZ75SM9ZjxZfy"
  ]

}
