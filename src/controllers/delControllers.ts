import * as Express from "express";
import {yataiController} from '../controllers/yataiController'

export default async function delController(req: Express.Request, res: Express.Response, next: Express.NextFunction) {
    if(req.method === 'GET'){
        if(!req.query.id){      // GETメソッドでアクセスされたが、idが指定されていない場合
            res.redirect('/');  // トップページにリダイレクト 
        } else {
            let peopleController = new yataiController();
            const token = Math.random().toString(36).slice(-8)+Math.random().toString(36).slice(-8);

            peopleController.get(Number(req.query.id)).then((person) => {
                res.render("./del_confirm.ejs", {person: person, token: token});
            });
        }
    } else if(req.method === 'POST'){
        if(req.body.token){         // ToDo: トークンを検証する
            let peopleController = new yataiController();
            peopleController.del(Number(req.body.id)).then((affectedRows:number) => {
                console.log(`${affectedRows}件削除されました`);
                res.redirect('/');
            });
        }
    }
} 