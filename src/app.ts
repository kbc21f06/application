import Express from "express";
import path from "path";
import indexController from "./controllers/indexController";
const app = Express();

app.set('views', path.join(__dirname, '/views'));   //EJSのための設定
app.use(Express.static(__dirname + '/public'));     //CSSファイルのための設定

app.get("/", indexController);

app.listen(3000, () => {
    console.log("listening on port 3000!");
});
export default app;