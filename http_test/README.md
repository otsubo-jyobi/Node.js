
# Node.js(express)の使い方　その①

目次

<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=3 orderedList=false} -->

<!-- code_chunk_output -->
- [Node.js(express)の使い方　その①](#nodejsexpressの使い方その)
  - [準備](#準備)
    - [Nodejs用のプロジェクトを作成](#nodejs用のプロジェクトを作成)
  - [HTTPサーバーの作成](#httpサーバーの作成)
    - [expressのインストール](#expressのインストール)
    - [server.jsの作成](#serverjsの作成)
    - [実行・終了](#実行終了)
      - [実行](#実行)
      - [終了](#終了)
  - [expressの各種機能](#expressの各種機能)
    - [ファイルの返却](#ファイルの返却)
    - [パラメーター](#パラメーター)
    - [クエリの受け取り](#クエリの受け取り)
    - [JSONの返却](#jsonの返却)

<!-- /code_chunk_output -->

## 準備

### Nodejs用のプロジェクトを作成

プロジェクトフォルダの作成

```bash
$ mkdir project_name
$ cd project_name
```

packaage.jsonの作成
  
```bash
$ npm init
package name: (project_name) 
version: (1.0.0) 
description: 
entry point: (index.js) 
test command: 
git repository:
keywords: 
author:
license: (ISC) 
```

## HTTPサーバーの作成

### expressのインストール

```bash
npm install express
```

### server.jsの作成

プロジェクトフォルダ内に「server.js」を作成し、以下のコードを記述する。

```js
const express = require("express");
const app  = express();
const port = 8080;

// ルーティングの設定
app.get("/", (req, res) =>{
  res.send('Hello World!');
  console.log("/ へアクセスがありました");
});

// HTTPサーバを起動する
app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
```

### 実行・終了

#### 実行
以下のコマンドを実行してサーバーを起動する

```bash
$ node server.js
listening at http://localhost:8080
```

ブラウザから[http://localhost:8080](http://localhost:8080)にアクセスし、無事にメッセージが表示されたらOK

|![img](./meta/run.png)|
|:--|

#### 終了

このままだと永遠に起動したままになる。終了するには`Ctrl+c`で強制的にプログラムの実行を終了する。

```bash
$ node serve.js
listening at http://localhost:3000
^C
```

## expressの各種機能

### ファイルの返却

```js
const express = require("express");
const app  = express();
const port = 3000;

// ルーティングの設定
app.get("/", (req, res) =>{
  res.sendFile(`${__dirname}/public/index.html`);
  console.log("/ へアクセスがありました");
});

// HTTPサーバを起動する
app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
```

### パラメーター

```js
app.get("/a", (req, res) =>{
  res.sendFile(`${__dirname}/public/a.html`);
});
app.get("/b", (req, res) =>{
  res.sendFile(`${__dirname}/public/b.html`);
});
app.get("/c", (req, res) =>{
  res.sendFile(`${__dirname}/public/c.html`);
});
```

### クエリの受け取り

### JSONの返却
