import * as Express from "express";
import { yatai } from "../common/yatai";
import {yataiController} from '../controllers/yataiController'

export default async function editController(req: Express.Request, res: Express.Response, next: Express.NextFunction) {
    if(req.method === 'GET'){
        if(!req.query.id){
            res.redirect('/');
        } else {
            let peopleController = new yataiController();
            peopleController.get(Number(req.query.id)).then((person) => {
                res.render("./edit.ejs", {person: person});
            });    
        }
    }else if(req.method === 'POST'){
        const updateEntry = new yatai(req.body.id, req.body.name, req.body.kana, req.body.production, req.body.carpenter,
                                               req.body.sculptor, req.body.shrine);
        let peopleController = new yataiController();
        await peopleController.edit(updateEntry);
        res.redirect("/");
    }
} 