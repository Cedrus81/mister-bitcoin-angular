export class Transaction{
    constructor(
        public toId:string,
        public to: string,
        public amount:number,
        public at:number
    ){}
}