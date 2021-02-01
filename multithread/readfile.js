// コマンドライン引数　０：同期処理　それ以外：非同期処理

if (process.argv[2] == 0) {
    // 同期処理
    const fs = require("fs");

    try{
    const data = fs.readFileSync("file1.txt");
    console.log(data.toString());
    }
    catch(e){
    console.log(e.message);
    }

    console.log("最後まで実行しました");
} else {
    // 非同期処理
    const fs = require("fs");

    fs.readFile("file1.txt", (err, data) => {
    if (err){
        console.log(`[error] ${err}`);
    }

    console.log(data.toString());
    });

    console.log("最後まで実行しました");
}