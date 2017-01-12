var express = require('express');
var app = express();
var multer  = require('multer');
var ext = require('file-extension');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    cb(null,+Date.now() + '.' + ext(file.originalname))
  }
}) 
var upload = multer({ storage: storage }).single('picture');

app.set('view engine', 'pug');

app.use(express.static('public'));

app.get('/', function(req, res){
	res.render('index');
})

app.get('/signup', function(req, res){
	res.render('index');
})

app.get('/signin', function(req, res){
	res.render('index');
})

app.get('/api/pictures', function(req, res){

	var pictures = [
	{
		user:{
			username: 'yrraRojas',
			avatar: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p200x200/12814612_10207788879616537_5604103499298726415_n.jpg?oh=00e8465b03ddebc59be7a68f301ee8df&oe=591F5F82'
		},
		url: 'office.jpg',
		likes: 0,
		liked: true,
		createdAt: new Date().getTime()
	},
	{
		user:{
			username: 'yrraRojas',
			avatar: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p200x200/12814612_10207788879616537_5604103499298726415_n.jpg?oh=00e8465b03ddebc59be7a68f301ee8df&oe=591F5F82'
		},
		url: 'office.jpg',
		likes: 1,
		liked: true,
		createdAt: new Date().setDate(new Date().getDate() - 10)
	}
	];

	setTimeout(function(){
		res.send(pictures);	
	}, 2000)
	

})

app.post('/api/pictures', function(req, res){
	upload(req, res, function(err){
		if (err) {
			return res.send(500, "Error uploading file");
		}
		res.send('File uploaded');
	})
})

app.listen(3000, function(err){
	if (err) return console.log('Hubo un error'), process.exit(1);

	console.log('Platzigram escuchando en el puerto 3000');
})