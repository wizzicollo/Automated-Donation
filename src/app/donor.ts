export class Donor {
    details: Boolean;
    donor: string;
    constructor(public id: number,public location: string,public description:string, public organization:string, public phone_number:number, public card_number:number, public amount: number, public receiver:string, public date_donated: Date){
        this.details=false;
      }
}