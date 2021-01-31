const express = require("express");
const app = express();
const port = 8080;

app.use(express.urlencoded({extended: true}));

// app.post("/", (req, res) => {
// 	// res.send('Hello World!');
// 	// res.sendFile(`${__dirname}/public/index.html`);

// 	const name = req.body.name;
// 	res.send(`君の名は ${name}`);
// 	console.log("access to /");
// });

app.get("/", (req, res) => {
	res.send('Hello World!');

	// const name = req.query.name;
	// res.send(`君の名は ${name}`);

	// res.sendFile(`${__dirname}/public/index.html`);

	// const data = {
	// 	"message": "hello world",
	// 	"date": "2020-06-29"
	// };
	// res.json(data);
	// console.log("access to /");
});

app.get("/meta/:file", (req,res) => {
	const file = req.params.file;

	res.sendFile(`${__dirname}/meta/${file}`);
	console.log(`access to /meta/${file}`);
});

app.listen(port, () => {
	console.log(`listening at http://localhost:${port}`);
});






// const http = require('http');

// const server = http.createServer((req, res) => {
// 	//code here
// 	res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
// 	res.write('<h1>Hello World</h1>');
// 	res.end();
// });

// const port = 8080;
// server.listen(port);
// console.log('Server listen on port ' + port);