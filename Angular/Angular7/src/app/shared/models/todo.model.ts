import { Time } from '@angular/common';

export class todo {

    public date: Date;
    public time: Time;
    public text: string;

    constructor(date: Date, time: Time, text: string) {
        this.date = date;
        this.text = text;
        this.time = time;
    }
}