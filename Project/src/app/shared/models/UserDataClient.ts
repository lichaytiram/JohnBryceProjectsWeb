export class UserDataClient {
    public constructor(
        public token: number,
        public clientType: string,
        public id: number,
        public company?: number,
    ) { }

}
