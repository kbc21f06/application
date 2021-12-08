import {yataiModel} from '../models/yataiModel'
import {yatai} from '../common/yati'

export class Controller {
    public getAll(): yatai[] {
        const people = new yataiModel();
        const aryPerson = people.all();
        return aryPerson;
    }
}

