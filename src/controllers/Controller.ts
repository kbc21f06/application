import {yataiModel} from '../models/yataiModel'
import {yatai} from '../common/yati'

export class Controller {
    public async getAll(): Promise<yatai[]> {
        const people = new yataiModel();
        return await people.all();
    }
}

