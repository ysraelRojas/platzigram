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

	res.send(pictures);	

})

app.post('/api/pictures', function(req, res){
	upload(req, res, function(err){
		if (err) {
			return res.send(500, "Error uploading file");
		}
		res.send('File uploaded');
	})
})

app.get('/api/user/:username', function(eq, res){
	const user = {
		username: 'yrraRojas',
		avatar: 'https://scontent-mia1-1.cdninstagram.com/t51.2885-19/11821309_100705523617172_1224966390_a.jpg',
		pictures: [
			{
				id: 1,
				src: 'https://platzi.com/blog/wp-content/uploads/2015/06/vinizzio-estudiante-platzi.jpg',
				likes: 4
			},
			{
				id: 2,
				src: 'https://platzi.com/blog/wp-content/uploads/2015/06/vicky-jaqueline-platzi.jpg',
				likes: 10
			},
			{
				id: 3,
				src: 'https://platzi.com/blog/wp-content/uploads/2015/06/miguel-platzi.jpg',
				likes: 2
			},
			{
				id: 4,
				src: 'https://platzi.com/blog/wp-content/uploads/2015/06/Leonidas.jpg',
				likes: 56
			},
			{
				id: 5,
				src: 'https://platzi.com/blog/wp-content/uploads/2015/06/alejandro-platzi.jpg',
				likes: 0
			},
			{
				id: 6,
				src: 'https://platzi.com/blog/wp-content/uploads/2015/06/Santiago.jpg',
				likes: 100
			}
		]
	}

	res.send(user);
})

app.get('/:username', function(req, res){
	res.render('index', {title: `Platzigram - ${req.params.username}`})
})

app.listen(3000, function(err){
	if (err) return console.log('Hubo un error'), process.exit(1);

	console.log('Platzigram escuchando en el puerto 3000');
})