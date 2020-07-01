export class Home {
    details: Boolean;
    constructor(public title: string, public location: string, public description: string, public date_posted: Date) {
      this.details = false;
    }
  }
