var express = require("express");
var mongoose= require("mongoose");
var cors = require('cors');
var schemaPerson = {
	firstName:String,
	lastName:String,
	email:String
}
mongoose.connect('mongodb://localhost/simple');
var dbPeople = mongoose.model('Person',schemaPerson, 'people');

var app = express();
app.use(cors());
app.get('/people',function(req,res){
	dbPeople.find(function(err, doc){
		res.send(doc);
	})	
});
app.listen(3000);
