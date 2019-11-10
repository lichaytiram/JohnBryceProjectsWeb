export class Purchase {
    public constructor(
        public customerId: number,
        public couponId: number,
        public amount: number,
        public date?: string,
        public id?: number
    ) { }
}