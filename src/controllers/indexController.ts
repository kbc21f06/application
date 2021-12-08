import * as Express from "express";
import {Controller} from '../controllers/Controller'

export default function indexController(req: Express.Request, res: Express.Response, next: Express.NextFunction) {
    const peopleController = new Controller();
    const aryPerson = peopleController.getAll();
//    console.log(JSON.stringify(aryPerson));
    res.render("./index.ejs", {ary : aryPerson});
}    