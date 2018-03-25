var express = require('express');
const bodyParser = require('body-parser');
var app = express();

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

// set the view engine to ejs
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({
	extended: true
}));

app.use(bodyParser.json());

// set the home page route
app.get('/', function(req, res) {

    // ejs render automatically looks in the views folder
    res.render('index');
});

<<<<<<< HEAD

// app.post('/ajax/test.json',function(req,res){

	
// 	var a = req;
// 	//console.log(req);
//     console.log('req received');
	
//   // var ajaxTest={
//   //   tips:"you are not alone"
//   // };
//   // res.send(ajaxTest);
// });
app.post('/ajax/test',function(request,response){
	var query1=request.body.var1;
	var query2=request.body.var2;
});

app.get('/search',(req,res,next)=>{
	var term = req.params.term;
	//var term = 'aaa';
	res.json(
		{1: "ddd"}
	);
=======
var x = "";
var y = "";
var z = "";
app.get('/search',(req,res,next)=>{
	res.json({
	 	x: x,
	 	y: y,
	 	z: z
	});
>>>>>>> 2940b9ca8ffd60d1d91c85a7e9af7e462b02046d

});


app.post("/", function(req, res) {
	x = req.body.input.obj1;
	y = req.body.input.obj2;
	z = req.body.input.obj3;
	console.log("X: " + req.body.input.obj1);
	console.log("Y: " + req.body.input.obj2);
	console.log("Z: " + req.body.input.obj3);
});


app.listen(port, function() {
    console.log('The app is running on http://localhost:' + port);
});