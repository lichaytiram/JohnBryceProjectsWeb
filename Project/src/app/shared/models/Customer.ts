export class Customer {

    id?: number;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
    user?: User;

}

export class User {

    id: number;
    userName: string;
    password: string;
    type: string;
    companyId: string;

}