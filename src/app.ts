import Express from "express";
import path from "path";
import indexController from "./controllers/indexController";
import addController from "./controllers/addControllers";
import editController from "./controllers/editControllers";
import delController from "./controllers/delControllers";

const app = Express();

app.set('views', path.join(__dirname, '/views'));   //EJSのための設定
app.use(Express.static(__dirname + '/public'));     //CSSファイルのための設定

app.use(Express.urlencoded({extended: true}));

app.get("/", indexController);

app.get("/del", delController);
app.post("/del", delController);

app.get("/edit", editController);
app.post("/edit", editController);

app.get("/add", addController);
app.post("/add", addController);

app.listen(3000, () => {
    console.log("listening on port 3000!");
});
export default app;