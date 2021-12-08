
export class yatai {
    id: number;
    yataiName: string;
    yataiNameKana: string;
    production: string;
    carpenter: string;
    sculptor: string;
    shrine:string;

    constructor(id:number, yataiName:string, yataiNameKana:string, production:string, carpenter: string, 
        sculptor: string,shrine:string){
        this.id = id;
        this.yataiName = yataiName;
        this.yataiNameKana = yataiNameKana;
        this.production = production;
        this.carpenter = carpenter;
        this.sculptor = sculptor;
        this.shrine = shrine;
    }
}
