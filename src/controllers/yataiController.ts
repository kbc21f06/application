import {yataiModel} from '../models/yataiModel'
import {yatai} from '../common/yatai'

export class yataiController {
    public async edit(updateEntry: yatai) {
        return await yataiModel.edit(updateEntry);
    }
    public async get(id: number): Promise<yatai> {
        return await yataiModel.findOne({id: id})
    }

    public async del(id: number) {
        return await yataiModel.del(id);
    }

    public async add(newEntry: yatai) {
        return await yataiModel.add(newEntry);
    }
    //全登録者を取得。
    public async getAll(): Promise<yatai[]>  {
        return await yataiModel.all();
    }
}

