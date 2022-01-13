import * as Express from "express";
import { yatai } from "../common/yatai";
import {yataiController} from '../controllers/yataiController'

export default function addController(req: Express.Request, res: Express.Response, next: Express.NextFunction) {
    console.log(JSON.stringify(req.method));
    if(req.method === 'GET'){
        res.render("./add.ejs", {});
    
    }else if(req.method === 'POST'){
        const newEntry = new yatai(-1, req.body.name, req.body.kana, req.body.production, req.body.carpenter, 
                                                req.body.sculptor, req.body.shrine);
        let peopleController = new yataiController();
        peopleController.add(newEntry);
        res.redirect("/");
    }
} 