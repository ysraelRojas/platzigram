var page = require('page');
var template = require('./template');
var empty = require('empty-element');
var title = require('title');

page('/', function(ctx, next){
	
	title('Platzigram');
	var main = document.getElementById('main-container');
	var pictures = [
	{
		user:{
			username: 'yrraRojas',
			avatar: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p200x200/12814612_10207788879616537_5604103499298726415_n.jpg?oh=00e8465b03ddebc59be7a68f301ee8df&oe=591F5F82'
		},
		url: 'office.jpg',
		likes: 10,
		liked: true,
		createdAt: new Date()
	},
	{
		user:{
			username: 'yrraRojas',
			avatar: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p200x200/12814612_10207788879616537_5604103499298726415_n.jpg?oh=00e8465b03ddebc59be7a68f301ee8df&oe=591F5F82'
		},
		url: 'office.jpg',
		likes: 2,
		liked: true,
		createdAt: new Date().setDate(new Date().getDate() - 10)
	}
	];
	empty(main).appendChild(template(pictures));
})