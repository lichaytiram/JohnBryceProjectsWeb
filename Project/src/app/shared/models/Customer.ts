
export class User {

    userName: string;
    password: string;
    type: string = "Customer";
    companyId?: string = null;

}

export class Customer {

    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
    user?: User;

}
