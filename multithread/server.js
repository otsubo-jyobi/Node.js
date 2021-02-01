const fs = require("fs");
const express = require("express");
const app  = express();
const port = 8080;
const file = "data.txt";

if (process.argv[2] == 0) {
    // 同期処理
    // ルーティング
    app.get("/", (req, res)=>{
    try{
        let count = fs.readFileSync(file);          // 読み込み
        fs.writeFileSync(file, (Number(count)+1));  // 書き込み
        res.send(`あなたは${count}人目のお客様です`);
    }
    catch(e){
        res.send(`エラーが発生しました ${e.message}`);
    }
    });

    // サーバを起動
    app.listen(port, ()=>{
    console.log(`Running at http://localhost:${port}/`);
    });

} else {
    // 非同期処理
    // ルーティング
    app.get("/", (req, res)=>{
    // 読み込み
    fs.readFile(file, (err, data)=>{
        const count = Number(data);

        if( err ){
        res.send(`エラーが発生しました ${err}`);
        return(false);
        }

        // 書き込み
        fs.writeFile(file, count+1, (err)=>{
        if( err ){
            res.send(`エラーが発生しました ${err}`);
            return(false);
        }

        res.send(`あなたは${count}人目のお客様です`);
        })

    });
    });

    // サーバを起動
    app.listen(port, ()=>{
    console.log(`Running at http://localhost:${port}/`);
    });

}