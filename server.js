var express = require('express');
var app = express();

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

// set the view engine to ejs
app.set('view engine', 'ejs');

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/public'));

// set the home page route
app.get('/', function(req, res) {

    // ejs render automatically looks in the views folder
    res.render('index');
});


app.post('/ajax/test.json',function(req,res){

	
	var a = req;
	//console.log(req);
    console.log('req received');
	
  // var ajaxTest={
  //   tips:"you are not alone"
  // };
  // res.send(ajaxTest);
});

app.get('/search',(req,res,next)=>{
	var term = req.params.term;
	//var term = 'aaa';
	res.json(
		{1: "ddd"}
	);

});

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});