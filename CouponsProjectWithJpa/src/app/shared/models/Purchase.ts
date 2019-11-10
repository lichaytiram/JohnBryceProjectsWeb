import { Customer } from './Customer';
import { Coupon } from './Coupon';

export class Purchase {
    public constructor(
        public customer: Customer,
        public coupon: Coupon,
        public amount: number,
        public date?: string,
        public id?: number
    ) { }
}