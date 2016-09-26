
var appBeauty = angular.module('appBeauty',[]);

console.log(1);

appBeauty.controller('AppCtrl', function($http){
	var app = this;
console.log('hey man?');	
	$http.get('http://localhost:3000/people').success(function(result){
		app.people = result;
	})
})