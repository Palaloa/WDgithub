var express = require("express");
var url = require("url");
var http = require("http");

var port = 3000;
var app = express();
app.use(express.static(__dirname + "/client"));
http.createServer(app).listen(port);

var habits = [];
var t1 = { message : "Walk 10.000 steps", type  : 1, interval : "every day"};
var t2 = { message : "Go to the gym", type : 2, interval : "3 days a week"};
habits.push(t1);
habits.push(t2);

//clients requests habits
app.get("/habits", function (req, res) {
	console.log("habits requested!");
	res.json(habits);
});

//add habit to the server
app.get("/addhabit", function (req, res) {
	var url_parts = url.parse(req.url, true);
	var query = url_parts.query;
	
	if(query["message"]!==undefined) {
		var tx = { message : query["message"], 
			type: query["type"],
			deadline: query["deadline"]
		};
		habits.push(tx);
		console.log("Added " + tx.message);
		res.end("Habit added successfully");
	}
	else {
		res.end("Error: missing message parameter");
	}
});