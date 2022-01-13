import * as Express from "express";
import {yataiController} from '../controllers/yataiController'

export default function indexController(req: Express.Request, res: Express.Response, next: Express.NextFunction) {
    const peopleController = new yataiController();
    peopleController.getAll().then( (aryyatai) => {
        res.render("./index.ejs", {ary : aryyatai});
    });
}       