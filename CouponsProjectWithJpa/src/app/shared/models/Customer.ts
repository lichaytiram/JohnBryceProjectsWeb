import { User } from './User';

export class Customer {
    public constructor(
        public firstName: string,
        public lastName: string,
        public phoneNumber: string,
        public email: string,
        public user: User,
        public id?: number
    ) { }
}