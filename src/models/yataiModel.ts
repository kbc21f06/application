import {yatai} from '../common/yati'

export class yataiModel {
    public all(): yatai[] {
        const people = new Array();
        //No,屋台名,読み方,制作年,大工,彫刻,神社
        people.push( new yatai(1,'中野','なかの','明治２３年','不明','菅 浜吉','伊曽乃神社'));
        people.push( new yatai(2,'','','','','',''));
        people.push( new yatai(3,'','','','','',''));
        people.push( new yatai(4,'','','','','',''));
        people.push( new yatai(5,'','','','','',''));
        people.push( new yatai(6,'','','','','',''));
        
        return people;
    }
}
