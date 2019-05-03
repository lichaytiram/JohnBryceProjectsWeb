
export class User {

    id?: number;
    userName: string;
    password: string;
    type: string = "Customer";
    companyId?: string = null;

}

export class Customer {

    id?: number;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
    user?: User;

}
