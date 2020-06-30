export class Donor {
    details: Boolean;
    donor: string;
    constructor(public amount: number,public charity: string,public reminder:string, public card_number:number, public expiration_year:Date, public security_code:string){
        this.details=false;
      }
}
