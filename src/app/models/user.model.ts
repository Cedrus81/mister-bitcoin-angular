import { Transaction } from "./transaction.model";
export class User {

    constructor(
        public name: string = '',
        public coins: number = 100,
        public transactions: Transaction[] = [],
        public _id?: string) {}

    // setId?(id: string = 'r101') {
        // Implement your own set Id
        // this._id = id
    }
// }
