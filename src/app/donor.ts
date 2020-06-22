export class Donor {
    constructor(public id: number,public location: string,public description:string, public organization:string, public phone_number:number, public card_number:number, public amount: PaymentCurrencyAmount, public receiver:string, public date_donated: Date){
        
      }
}
