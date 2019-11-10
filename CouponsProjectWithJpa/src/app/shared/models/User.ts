import { Company } from './Company';

export class User {
    public constructor(
        public userName: string,
        public password: string,
        public id?: number,
        public type?: string,
        public company?: Company
    ) { }
}