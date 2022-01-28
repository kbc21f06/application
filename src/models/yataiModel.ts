import { yatai } from '../common/yatai';
import * as mysql from "promise-mysql";
import config from "../config/Config";

export class yataiModel {

    //MySQLに接続
    private static async connectDb() {
        return await mysql.createConnection(config.db);
    };

    //指定されたSQL(SELECT)を実行して、取得したyataiの配列を返す
    private static async executeSqlSelect(sql: string): Promise<yatai[]> {
        return new Promise<Array<yatai>>((resolve, _) => { //<<このメソッドの戻り値>>
            yataiModel.connectDb().then((con) => {    //DBへの接続が取得できたので
                const result = con.query(sql);          //接続にクエリを送る
                con.end();                              //クエリ実行終了
                return result;                          //クエリ結果を次のthenへ
            }).then((rows) => {                       //クエリ終了で結果を受け取り
                //                console.log( JSON.stringify(rows));
                const people = new Array();
                for (var elem of rows) {                  //クエリ結果の各行をelementに入れながらループ
                    people.push(                        //メソッド呼び出し元に返す配列に入れていく
                        new yatai(elem.id, elem.yataiName, elem.yataiNameKana, elem.production,
                            elem.carpenter, elem.sculptor, elem.shrine));
                }
                resolve(people);    //<<このメソッドの戻り値>>のPromiseに値を設定
            });
        });
    }

    //指定されたPersonをInsert文で登録する
    private static async insertPerson(person: yatai): Promise<number> {
        let queryParam = {
            sql: "INSERT INTO address_entry (yataiName, yataiNameKana, production, carpenter, sculptor, "
                         + "shrine) VALUES (?,?,?,?,?,?)",
            values: [person.yataiName, person.yataiNameKana, person.production, person.carpenter, person.sculptor,
                        person.shrine]
        }

        return new Promise<number>((resolve, _) => {    //<<このメソッドの戻り値>>
            yataiModel.connectDb().then((con) => {    //DBへの接続が取得できたので
                const result = con.query(queryParam);   //接続にクエリを送る
                con.end();                              //クエリ実行終了
                return result;                          //クエリ結果を次のthenへ
            }).then((rows) => {                         //クエリ終了で結果を受け取り
                resolve(rows.insertId);                //<<このメソッドの戻り値>>のPromiseに値を設定
            });
        });
    }

    //引数に指定されたyataiのidを持つエントリをUpdate文で更新する
    private static async updateyatai(person: yatai): Promise<number> {
        let queryParam = {
            sql: "UPDATE address_entry SET yataiName = ?, yataiNameKana = ?, production = ?, carpenter = ?, "
                         + "sculptor = ?, shrine = ? WHERE id = ?",
            values: [person.yataiName, person.yataiNameKana, person.production, person.carpenter, person.sculptor,
                        person.sculptor, person.shrine, Number(person.id)]
        }

        return new Promise<number>((resolve, _) => {    //<<このメソッドの戻り値>>
            yataiModel.connectDb().then((con) => {    //DBへの接続が取得できたので
                const result = con.query(queryParam);   //接続にクエリを送る
                con.end();                              //クエリ実行終了
                return result;                          //クエリ結果を次のthenへ
            }).then((rows) => {                         //クエリ終了で結果を受け取り
                resolve(rows.changedRows);              //<<このメソッドの戻り値>>のPromiseに値を設定
            });
        });
    }

    public static async del(id: number):Promise<number> {
        let queryParam = {
            sql: "UPDATE address_entry SET deleted = true WHERE id=?",
            values: [id]
        }

        return new Promise<number>((resolve, _) => {    //<<このメソッドの戻り値>>
            yataiModel.connectDb().then((con) => {    //DBへの接続が取得できたので
                const result = con.query(queryParam);   //接続にクエリを送る
                con.end();                              //クエリ実行終了
                return result;                          //クエリ結果を次のthenへ
            }).then((rows) => {                         //クエリ終了で結果を受け取り
                resolve(rows.affectedRows);             //<<このメソッドの戻り値>>のPromiseに値を設定
            });
        });
    }

    public static async add(newEntry: yatai) : Promise<number> {
        return await yataiModel.insertPerson(newEntry);
    }

    //全員のデータを順序指定なしで取得
    public static async all(): Promise<yatai[]> {
        //staticなExecuteSqlSelectを呼び出して、全エントリ取得(DBアクセスのため非同期)
        return await yataiModel.executeSqlSelect("SELECT * FROM v_address_entry");
    }

    public static async findOne(param: { id: number; }): Promise<yatai> {
        const people = await yataiModel.executeSqlSelect("SELECT * FROM v_address_entry WHERE id = " + param.id);
        return people[0];
    }

    public static async edit(updateEntry: yatai) {
        return await yataiModel.updateyatai(updateEntry);
    }

}
