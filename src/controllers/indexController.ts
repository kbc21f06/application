import * as Express from "express";
import {Controller} from '../controllers/Controller'

export default function indexController(req: Express.Request, res: Express.Response, next: Express.NextFunction) {
    const peopleController = new Controller();
    peopleController.getAll().then( (aryyatai) => {
        res.render("./index.ejs", {ary : aryyatai});
    });
}       