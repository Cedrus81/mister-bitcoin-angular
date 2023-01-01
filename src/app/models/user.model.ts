export class User {

    constructor(
        public _id?: string,
        public name: string = '',
        public coins: number = 100,
        public transactions: object[] = []) {}

    // setId?(id: string = 'r101') {
        // Implement your own set Id
        // this._id = id
    }
// }
