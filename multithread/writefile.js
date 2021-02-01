// コマンドライン引数　０：同期処理　それ以外：非同期処理

if(process.argv[2] == 0) {
    // 同期処理
    const fs = require("fs");
    const data = "Hello Node";  // 書き込むデータ準備

    try{
    fs.writeFileSync("file1.txt", data);
    console.log("正常に書き込みが完了しました");
    }
    catch(e){
    console.log(e.message);
    }

    console.log("最後まで実行しました");
} else {
    // 非同期処理
    const fs = require("fs");
    const data = "Hello Node";  // 書き込むデータ準備

    // 書き込み
    fs.writeFile("file1.txt", data, (err) => {
    if (err){
        console.log(`[error] ${err}`);
    }

    console.log("正常に書き込みが完了しました");
    });

    console.log("最後まで実行しました");
}


